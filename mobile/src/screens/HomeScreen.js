import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import { testimonials } from '../data/testimonials';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const { cartSummary } = useCart();

  const stats = [
    { icon: 'location', number: '115+', label: "cities we're active in" },
    { icon: 'people', number: '1 Lakh+', label: 'partners trust us' },
    { icon: 'cube', number: '1.1 Crore+', label: 'orders delivered' },
    { icon: 'bag', number: '600+', label: 'seller brands listed' },
  ];

  const deliveryModels = [
    {
      title: 'Wholesale Delivery',
      description: 'Perfect for regular restocking with next-day delivery options.',
      icon: 'bus',
      color: '#2196F3',
      bg: '#E3F2FD'
    },
    {
      title: 'Express Delivery',
      description: 'Urgent same-day supplies for when you need ingredients fast.',
      icon: 'flash',
      color: '#FF9800',
      bg: '#FFF3E0'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <ImageBackground
        source={require('../../assets/hero-bg.png')}
        style={styles.hero}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>
            Fresh. Quality.{'\n'}
            <Text style={styles.heroTitleGreen}>Delivered Daily.</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Your trusted partner for premium kitchen supplies and seamless supply chain solutions
          </Text>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.shopButtonText}>Shop Now</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <Ionicons name={stat.icon} size={32} color="#2E7D32" />
            <Text style={styles.statNumber}>{stat.number}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Delivery Models */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Delivery Models</Text>
        <View style={styles.deliveryContainer}>
          {deliveryModels.map((model, index) => (
            <View key={index} style={[styles.deliveryCard, { backgroundColor: model.bg }]}>
              <Ionicons name={model.icon} size={40} color={model.color} />
              <Text style={styles.deliveryTitle}>{model.title}</Text>
              <Text style={styles.deliveryDesc}>{model.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Quick Links */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <View style={styles.quickLinks}>
          <TouchableOpacity
            style={styles.quickLinkCard}
            onPress={() => navigation.navigate('Products', { category: 'Fruits & Vegetables' })}
          >
            <Ionicons name="leaf" size={40} color="#2E7D32" />
            <Text style={styles.quickLinkText}>Fruits & Veggies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickLinkCard}
            onPress={() => navigation.navigate('Products', { category: 'Dairy' })}
          >
            <Ionicons name="water" size={40} color="#2E7D32" />
            <Text style={styles.quickLinkText}>Dairy Products</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Testimonials */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trusted by Partners</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.testimonialScroll}>
          {testimonials.map((item, index) => (
            <View key={index} style={styles.testimonialCard}>
              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map(s => <Ionicons key={s} name="star" size={16} color="#FFB300" />)}
              </View>
              <Text style={styles.testimonialText}>"{item.text}"</Text>
              <Text style={styles.testimonialCompany}>{item.company}</Text>
              <Text style={styles.testimonialRole}>{item.role}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  hero: {
    width: width,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f9f0',
  },
  heroOverlay: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white overlay
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroTitleGreen: {
    color: '#2E7D32',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  shopButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  statCard: {
    width: width / 2 - 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
    textTransform: 'uppercase',
  },
  deliveryContainer: {
    gap: 12,
  },
  deliveryCard: {
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  deliveryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#1a1a1a',
  },
  deliveryDesc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
  quickLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  quickLinkCard: {
    flex: 1,
    backgroundColor: '#f0f9f0',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2E7D32',
  },
  quickLinkText: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#2E7D32',
    textAlign: 'center',
  },
  testimonialScroll: {
    marginHorizontal: -20,
    paddingLeft: 20,
  },
  testimonialCard: {
    width: width * 0.8,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  testimonialText: {
    fontSize: 15,
    color: '#444',
    fontStyle: 'italic',
    lineHeight: 22,
    marginBottom: 16,
  },
  testimonialCompany: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  testimonialRole: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});

export default HomeScreen;
