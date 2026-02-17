export const products = {
  'Fruits & Vegetables': [
    {
      id: 9, name: 'Carrots (Big), 1 Kg', price: 74, unit: '1 kg', dietary: true, image: require('../../assets/products/carrots.png'), bulkPricing: [
        { minQty: 3, pricePerUnit: 72, label: '3 kgs+' },
        { minQty: 7, pricePerUnit: 71, label: '7 kgs+' }
      ]
    },
    { id: 10, name: 'Green Chilli (Spicy), 500 gm', price: 33, unit: '0.50 kg', dietary: true, image: require('../../assets/products/green-chilli.png') },
    {
      id: 11, name: 'Mint Leaves (Pudina), 250 gm', price: 19, unit: '0.25 kg', dietary: true, image: require('../../assets/products/mint-leaves.png'), bulkPricing: [
        { minQty: 4, pricePerUnit: 72, label: '1 kg+' }
      ]
    },
    { id: 12, name: 'Frozen Sweet Corn, 1 Kg', price: 80, unit: '1 kg', dietary: true, image: require('../../assets/products/frozen-corn.png') },
    { id: 13, name: 'Frozen Green Peas, 1 Kg', price: 95, unit: '1 kg', dietary: true, image: require('../../assets/products/frozen-peas.png') },
    { id: 14, name: 'Spring Onion, 250 gm', price: 17, unit: '0.25 kg', dietary: true, image: require('../../assets/products/spring-onion.png') },
    { id: 15, name: 'Coriander Leaves, 1 Kg', price: 72, unit: '1 kg', dietary: true, image: require('../../assets/products/coriander-leaves.png') },
    {
      id: 16, name: 'Green Capsicum, 1 Kg', price: 49, originalPrice: 54.4, unit: '1 kg', dietary: true, discount: 14, image: require('../../assets/products/green-capsicum.png'), bulkPricing: [
        { minQty: 3, pricePerUnit: 48, label: '3 kgs+' },
        { minQty: 6, pricePerUnit: 47, label: '6 kgs+' }
      ]
    },
    { id: 17, name: 'Basil Leaves, 100 gm', price: 12, unit: '0.10 kg', dietary: true, image: require('../../assets/products/basil-leaves.png') },
    { id: 18, name: 'Onion (Regular), 5 Kg', price: 114, unit: '5 kg', pricePerUnit: '₹22.8/kg', dietary: true, image: require('../../assets/products/onion-regular.png') },
  ],
  'Dairy': [
    { id: 19, name: 'Amul - Butter Salted, 500 gm', price: 259, unit: '1 pack', dietary: true, image: require('../../assets/products/amul-butter.png') },
    { id: 20, name: 'Amul - Fresh Cream, 1 L', price: 225, unit: '1 ltr', dietary: true, image: require('../../assets/products/amul-fresh-cream.png') },
    { id: 21, name: 'Amul - Processed Cheese Block, 1 Kg', price: 484, unit: '1 kg', dietary: true, image: require('../../assets/products/amul-cheese-block.png') },
    { id: 22, name: 'Milky Mist - Paneer, 1 Kg', price: 324, unit: '1 kg', dietary: true, image: require('../../assets/products/paneer.png') },
    { id: 23, name: 'Amul - Delicious Margarine, 500 gm', price: 85, unit: '0.50 kg', dietary: true, image: require('../../assets/products/margarine.png') },
    { id: 24, name: 'Nutralite - Professional Fat Spread, 500 gm', price: 84, unit: '0.50 kg', dietary: true, image: require('../../assets/products/nutralite-spread.png') },
    { id: 25, name: 'Amul - Toned Curd, 1 Kg', price: 47, unit: '1 kg', dietary: true, image: require('../../assets/products/amul-curd.png') },
    { id: 26, name: 'Amul - Cheese, Diced Mozzarella, 1 Kg', price: 443, unit: '1 kg', dietary: true, image: require('../../assets/products/amul-mozzarella.png') },
    { id: 27, name: 'Amul - Taaza Milk, 1 L', price: 74, unit: '1 ltr', dietary: true, image: require('../../assets/products/amul-milk.png') },
    { id: 28, name: 'Fresh Paneer, 1 Kg', price: 317, unit: '1 kg', dietary: true, image: require('../../assets/products/paneer.png') },
  ],
};

