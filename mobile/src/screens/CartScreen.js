import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import { getImageSource } from '../utils/imageHelper';

const CartScreen = () => {
  const {
    cartItems,
    cartSummary,
    addToCart,
    removeFromCart,
    clearCart,
    calculateItemPrice,
    getBulkPrice,
  } = useCart();

  const getBulkPriceInfo = (item) => {
    if (!item.bulkPricing || !item.bulkPricing.length) return null;
    const sortedBulk = [...item.bulkPricing].sort((a, b) => b.minQty - a.minQty);
    const applicableBulk = sortedBulk.find(bulk => item.quantity >= bulk.minQty);
    return applicableBulk;
  };

  const renderCartItem = ({ item }) => {
    const itemTotal = calculateItemPrice(item);
    const pricePerUnit = itemTotal / item.quantity;
    const bulkInfo = getBulkPriceInfo(item);
    const basePrice = item.price;
    const isBulkPrice = bulkInfo && pricePerUnit < basePrice;

    return (
      <View style={styles.cartItem}>
        <Image
          source={getImageSource(item.image)}
          style={styles.itemImage}
          resizeMode="cover"
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
          <Text style={styles.itemUnit}>{item.unit}</Text>
          
          {isBulkPrice && bulkInfo && (
            <View style={styles.bulkBadge}>
              <Text style={styles.bulkText}>
                Bulk Price: ₹{bulkInfo.pricePerUnit}/unit
              </Text>
            </View>
          )}

          <View style={styles.priceRow}>
            <View>
              <View style={styles.priceContainer}>
                <Text style={styles.pricePerUnit}>₹{pricePerUnit.toFixed(2)}</Text>
                {isBulkPrice && (
                  <Text style={styles.originalPriceUnit}>₹{basePrice}</Text>
                )}
                <Text style={styles.perUnitText}>per unit</Text>
              </View>
              <Text style={styles.totalPrice}>Total: ₹{itemTotal.toFixed(2)}</Text>
            </View>

            <View style={styles.quantityContainer}>
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => removeFromCart(item.id, 1)}
                >
                  <Ionicons name="remove" size={18} color="#666" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => addToCart(item, 1)}
                >
                  <Ionicons name="add" size={18} color="#666" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id, item.quantity)}
              >
                <Ionicons name="trash-outline" size={20} color="#E23744" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="cart-outline" size={80} color="#ccc" />
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptySubtitle}>
          Add items from the catalogue to get started
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Cart Items ({cartSummary.itemCount})
        </Text>
        {cartItems.length > 0 && (
          <TouchableOpacity onPress={clearCart}>
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Items ({cartSummary.itemCount})</Text>
          <Text style={styles.summaryValue}>{cartSummary.itemCount}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹{cartSummary.total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
        <Text style={styles.deliveryText}>
          Free delivery on orders above ₹500
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  clearText: {
    fontSize: 14,
    color: '#E23744',
    fontWeight: '500',
  },
  cartList: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  itemUnit: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  bulkBadge: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  bulkText: {
    fontSize: 10,
    color: '#2E7D32',
    fontWeight: '600',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  pricePerUnit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  originalPriceUnit: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  perUnitText: {
    fontSize: 12,
    color: '#666',
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
  },
  qtyButton: {
    padding: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    paddingHorizontal: 16,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e0e0e0',
  },
  removeButton: {
    padding: 8,
  },
  summary: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  checkoutButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  deliveryText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default CartScreen;

