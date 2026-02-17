import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getBulkPrice = (product, quantity) => {
    if (!product.bulkPricing || !product.bulkPricing.length) return product.price;
    
    const sortedBulk = [...product.bulkPricing].sort((a, b) => b.minQty - a.minQty);
    const applicableBulk = sortedBulk.find(bulk => quantity >= bulk.minQty);
    
    return applicableBulk ? applicableBulk.pricePerUnit : product.price;
  };

  const calculateItemPrice = (item) => {
    const pricePerUnit = getBulkPrice(item, item.quantity);
    return pricePerUnit * item.quantity;
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        const newQuantity = existing.quantity + quantity;
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId, quantity = 1) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - Math.abs(quantity)) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const getCartQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const cartSummary = useMemo(() => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const total = cartItems.reduce(
      (sum, item) => sum + calculateItemPrice(item),
      0
    );
    return { itemCount, total };
  }, [cartItems]);

  const value = {
    cartItems,
    cartSummary,
    addToCart,
    removeFromCart,
    clearCart,
    getCartQuantity,
    calculateItemPrice,
    getBulkPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

