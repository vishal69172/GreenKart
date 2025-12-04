import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Products from './components/Products';
import DeliveryModels from './components/DeliveryModels';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { products as productsByCategory } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
            ? { ...item, quantity: Math.max(0, item.quantity - quantity) }
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

  const allProducts = useMemo(
    () =>
      Object.values(productsByCategory).flatMap((list) =>
        list.map((p) => ({ ...p }))
      ),
    []
  );

  if (showCart) {
    return (
      <Cart
        cartItems={cartItems}
        cartSummary={cartSummary}
        onRemoveFromCart={removeFromCart}
        onAddToCart={addToCart}
        onClearCart={clearCart}
        calculateItemPrice={calculateItemPrice}
        onCloseCart={() => setShowCart(false)}
        getBulkPrice={getBulkPrice}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItems={cartItems}
        cartSummary={cartSummary}
        allProducts={allProducts}
        onRemoveFromCart={removeFromCart}
        onAddToCart={addToCart}
        onClearCart={clearCart}
        calculateItemPrice={calculateItemPrice}
        onOpenCart={() => setShowCart(true)}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Products 
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          getCartQuantity={getCartQuantity}
        />
        <DeliveryModels />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

