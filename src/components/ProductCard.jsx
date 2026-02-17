import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, cartQuantity = 0 }) => {
  const getBulkPrice = (quantity) => {
    if (!product.bulkPricing || !product.bulkPricing.length) return null;
    
    // Sort bulk pricing by minQty descending to find the best match
    const sortedBulk = [...product.bulkPricing].sort((a, b) => b.minQty - a.minQty);
    const applicableBulk = sortedBulk.find(bulk => quantity >= bulk.minQty);
    
    return applicableBulk || null;
  };

  const calculatePrice = (qty) => {
    const bulk = getBulkPrice(qty);
    if (bulk) {
      return bulk.pricePerUnit * qty;
    }
    return product.price * qty;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col relative border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1">
      {product.discount && (
        <span className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
          {product.discount}% OFF
        </span>
      )}
      
      {/* Product Image */}
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
        <img 
          src={product.image || 'https://via.placeholder.com/400x400?text=No+Image'} 
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
          }}
        />
        {product.dietary && (
          <span className="absolute bottom-2 left-2 text-xs text-primary bg-white/90 backdrop-blur-sm font-semibold px-2 py-1 rounded-md z-10">
            ✓ Vegetarian
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">
        {product.name}
      </h3>
      <div className="text-xs text-gray-500 mb-3 font-medium">{product.unit}</div>
      <div className="mt-auto">
        <div className="flex items-baseline space-x-2 mb-3">
          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
          {product.pricePerUnit && (
            <span className="text-xs text-gray-500 font-medium">at {product.pricePerUnit}</span>
          )}
        </div>

        {/* Quantity Controls */}
        {cartQuantity > 0 ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between border-2 border-primary/30 rounded-lg overflow-hidden">
              <button
                onClick={() => onRemoveFromCart?.(product.id)}
                className="px-4 py-2.5 text-primary hover:bg-primary hover:text-white transition-all duration-200 font-bold"
              >
                <FiMinus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2.5 font-bold text-gray-900 text-base bg-green-50">{cartQuantity}</span>
              <button
                onClick={() => onAddToCart?.(product, 1)}
                className="px-4 py-2.5 text-primary hover:bg-primary hover:text-white transition-all duration-200 font-bold"
              >
                <FiPlus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <button
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primaryDark transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => onAddToCart?.(product, 1)}
          >
            ADD TO CART
          </button>
        )}

        {/* Bulk Pricing Options */}
        {product.bulkPricing && product.bulkPricing.length > 0 && (
          <div className="mt-3 space-y-2 pt-3 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-700 mb-2">Bulk Pricing:</p>
            {product.bulkPricing.map((bulk, index) => (
              <div key={index} className="flex items-center justify-between bg-green-50 rounded-lg p-2">
                <span className="text-xs text-gray-700 font-medium">
                  ₹{bulk.pricePerUnit}/kg for {bulk.label}
                </span>
                <button
                  onClick={() => onAddToCart?.(product, bulk.minQty)}
                  className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primaryDark text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow"
                >
                  Add {bulk.minQty}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;



