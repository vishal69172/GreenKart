import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import { getImageSource } from '../utils/imageHelper';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart, getCartQuantity, getBulkPrice } = useCart();
  const cartQuantity = getCartQuantity(product.id);

  const currentPrice = getBulkPrice(product, cartQuantity || 1);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={getImageSource(product.image)}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        {product.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{product.discount}% OFF</Text>
          </View>
        )}

        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productUnit}>{product.unit}</Text>

        {product.dietary && (
          <View style={styles.vegBadge}>
            <Text style={styles.vegText}>✓ Vegetarian</Text>
          </View>
        )}

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{product.price}</Text>
          {product.originalPrice && (
            <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
          )}
        </View>

        {product.bulkPricing && product.bulkPricing.length > 0 && (
          <View style={styles.bulkSection}>
            <Text style={styles.bulkTitle}>Bulk Pricing:</Text>
            {product.bulkPricing.map((bulk, index) => (
              <View key={index} style={styles.bulkItem}>
                <View style={styles.bulkInfo}>
                  <Text style={styles.bulkLabel}>
                    ₹{bulk.pricePerUnit}/unit for {bulk.label}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.bulkButton}
                  onPress={() => addToCart(product, bulk.minQty)}
                >
                  <Text style={styles.bulkButtonText}>Add {bulk.minQty}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {cartQuantity > 0 ? (
          <View style={styles.quantitySection}>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => addToCart(product, -1)}
              >
                <Ionicons name="remove" size={24} color="#2E7D32" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{cartQuantity}</Text>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => addToCart(product, 1)}
              >
                <Ionicons name="add" size={24} color="#2E7D32" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(product, 1)}
          >
            <Text style={styles.addButtonText}>ADD TO CART</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 400,
  },
  content: {
    padding: 16,
  },
  discountBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E23744',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  productUnit: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  vegBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 16,
  },
  vegText: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: '600',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  originalPrice: {
    fontSize: 18,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 12,
  },
  bulkSection: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  bulkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  bulkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  bulkInfo: {
    flex: 1,
  },
  bulkLabel: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  bulkButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  bulkButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  quantitySection: {
    marginTop: 24,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2E7D32',
    borderRadius: 12,
    paddingVertical: 12,
  },
  qtyButton: {
    padding: 12,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginHorizontal: 24,
  },
  addButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProductDetailScreen;

