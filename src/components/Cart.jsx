import React from 'react';
import { FiChevronLeft, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';

const Cart = ({ 
  cartItems = [], 
  cartSummary, 
  onRemoveFromCart, 
  onAddToCart, 
  onClearCart, 
  calculateItemPrice,
  onCloseCart,
  getBulkPrice
}) => {
  const getBulkPriceInfo = (item) => {
    if (!item.bulkPricing || !item.bulkPricing.length) return null;
    
    const sortedBulk = [...item.bulkPricing].sort((a, b) => b.minQty - a.minQty);
    const applicableBulk = sortedBulk.find(bulk => item.quantity >= bulk.minQty);
    
    return applicableBulk;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onCloseCart}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition"
            >
              <FiChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FiShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add items from the catalogue to get started</p>
            <button
              onClick={onCloseCart}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-red-600 transition font-medium"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Cart Items ({cartSummary?.itemCount || 0})
                  </h2>
                  {cartItems.length > 0 && (
                    <button
                      onClick={onClearCart}
                      className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center space-x-1"
                    >
                      <FiTrash2 className="w-4 h-4" />
                      <span>Clear Cart</span>
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const itemTotal = calculateItemPrice ? calculateItemPrice(item) : item.price * item.quantity;
                    const pricePerUnit = itemTotal / item.quantity;
                    const bulkInfo = getBulkPriceInfo(item);
                    const basePrice = item.price;
                    const isBulkPrice = bulkInfo && pricePerUnit < basePrice;

                    return (
                      <div
                        key={item.id}
                        className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex gap-4">
                          {/* Product Image Placeholder */}
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                            <FiShoppingBag className="w-8 h-8 text-gray-400" />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-medium text-gray-900 mb-1 line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{item.unit}</p>
                            
                            {/* Bulk Pricing Badge */}
                            {isBulkPrice && bulkInfo && (
                              <div className="inline-flex items-center px-2 py-1 rounded bg-green-50 text-green-700 text-xs font-medium mb-2">
                                Bulk Price: ₹{bulkInfo.pricePerUnit}/unit
                              </div>
                            )}

                            {/* Price and Quantity Controls */}
                            <div className="flex items-center justify-between mt-3">
                              <div>
                                <div className="flex items-baseline space-x-2">
                                  <span className="text-lg font-bold text-gray-900">
                                    ₹{pricePerUnit.toFixed(2)}
                                  </span>
                                  {isBulkPrice && (
                                    <span className="text-sm text-gray-400 line-through">
                                      ₹{basePrice}
                                    </span>
                                  )}
                                  <span className="text-sm text-gray-500">per unit</span>
                                </div>
                                <div className="text-sm font-semibold text-gray-900 mt-1">
                                  Total: ₹{itemTotal.toFixed(2)}
                                </div>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                  <button
                                    onClick={() => onRemoveFromCart?.(item.id, 1)}
                                    className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-l-md transition"
                                    aria-label="Decrease quantity"
                                  >
                                    <FiMinus className="w-4 h-4" />
                                  </button>
                                  <span className="px-4 py-2 font-medium text-gray-900 min-w-[3rem] text-center border-x border-gray-300">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => onAddToCart?.(item, 1)}
                                    className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-r-md transition"
                                    aria-label="Increase quantity"
                                  >
                                    <FiPlus className="w-4 h-4" />
                                  </button>
                                </div>
                                <button
                                  onClick={() => onRemoveFromCart?.(item.id, item.quantity)}
                                  className="p-2 text-red-600 hover:bg-red-50 rounded-md transition"
                                  aria-label="Remove item"
                                >
                                  <FiTrash2 className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Items ({cartSummary?.itemCount || 0})</span>
                    <span className="text-gray-900 font-medium">
                      {cartSummary?.itemCount || 0}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-base font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{cartSummary?.total?.toFixed(2) || '0.00'}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-red-600 transition font-medium text-base mb-4"
                >
                  Proceed to Checkout
                </button>

                <div className="text-xs text-gray-500 text-center">
                  <p>Free delivery on orders above ₹500</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

