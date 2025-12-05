export const products = {
  'Fruits & Vegetables': [
    { id: 9, name: 'Carrots (Big), 1 Kg', price: 74, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=400&fit=crop', bulkPricing: [
      { minQty: 3, pricePerUnit: 72, label: '3 kgs+' },
      { minQty: 7, pricePerUnit: 71, label: '7 kgs+' }
    ]},
    { id: 10, name: 'Green Chilli /Mirchi (Spicy), 500 gm', price: 33, unit: '0.50 kg', dietary: true, image: 'https://images.unsplash.com/photo-1604908177520-4029a775e1c7?auto=format&fit=crop&w=800&q=80' },
    { id: 11, name: 'Mint Leaves (Pudina), 250 gm', price: 19, unit: '0.25 kg', dietary: true, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop', bulkPricing: [
      { minQty: 4, pricePerUnit: 72, label: '1 kg+' }
    ]},
    { id: 12, name: 'Frozen Sweet Corn, 1 Kg', price: 80, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop' },
    { id: 13, name: 'Frozen Green Peas, 1 Kg', price: 95, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400&h=400&fit=crop' },
    { id: 14, name: 'Spring Onion, 250 gm', price: 17, unit: '0.25 kg', dietary: true, image: 'https://images.unsplash.com/photo-1618512496249-3e7029d37045?w=400&h=400&fit=crop' },
    { id: 15, name: 'Coriander Leaves (Kothmir), 1 Kg', price: 72, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop' },
    { id: 16, name: 'Green Capsicum (Big Size), 1 Kg', price: 49, originalPrice: 54.4, unit: '1 kg', dietary: true, discount: 14, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop', bulkPricing: [
      { minQty: 3, pricePerUnit: 48, label: '3 kgs+' },
      { minQty: 6, pricePerUnit: 47, label: '6 kgs+' }
    ]},
    { id: 17, name: 'Basil Leaves, 100 gm', price: 12, unit: '0.10 kg', dietary: true, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop' },
    { id: 18, name: 'Onion (Regular), 5 Kg', price: 114, unit: '5 kg', pricePerUnit: '₹22.8/kg', dietary: true, image: 'https://images.unsplash.com/photo-1618512496249-3e7029d37045?w=400&h=400&fit=crop' },
  ],
  'Dairy': [
    { id: 19, name: 'Amul - Butter Salted, 500 gm', price: 259, unit: '1 pack', dietary: true, image: 'https://images.unsplash.com/photo-1588165276332-4c59e7835b0c?w=400&h=400&fit=crop' },
    { id: 20, name: 'Amul - Fresh Cream, 1 L', price: 225, unit: '1 ltr', dietary: true, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop' },
    { id: 21, name: 'Amul - Processed Cheese Block, 1 Kg', price: 484, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1618164436269-0fbb1e8b3228?w=400&h=400&fit=crop' },
    { id: 22, name: 'Milky Mist - Paneer, 1 Kg', price: 324, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1618164436269-0fbb1e8b3228?w=400&h=400&fit=crop' },
    { id: 23, name: 'Amul - Delicious Margarine, 500 gm', price: 85, unit: '0.50 kg', dietary: true, image: 'https://images.unsplash.com/photo-1588165276332-4c59e7835b0c?w=400&h=400&fit=crop' },
    { id: 24, name: 'Nutralite - Professional Fat Spread, 500 gm', price: 84, unit: '0.50 kg', dietary: true, image: 'https://images.unsplash.com/photo-1588165276332-4c59e7835b0c?w=400&h=400&fit=crop' },
    { id: 25, name: 'Amul - Toned Curd, 1 Kg', price: 47, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop' },
    { id: 26, name: 'Amul - Cheese, Diced Mozzarella, 1 Kg', price: 443, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1618164436269-0fbb1e8b3228?w=400&h=400&fit=crop' },
    { id: 27, name: 'Amul - Taaza Milk, 1 L', price: 74, unit: '1 ltr', dietary: true, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop' },
    { id: 28, name: 'Fresh Paneer, 1 Kg', price: 317, unit: '1 kg', dietary: true, image: 'https://images.unsplash.com/photo-1618164436269-0fbb1e8b3228?w=400&h=400&fit=crop' },
  ],
};

export const categories = [
  'Your Menu Add-ons',
  'Fruits & Vegetables',
  'Dairy',
  'Masala, Salt & Sugar',
  'Chicken & Eggs',
  'Sauces & Seasoning',
  'Custom Packaging',
  'Packaging Material',
  'Canned & Imported Items',
  'Edible Oils',
  'Frozen & Instant Food',
  'Bakery & Chocolates',
  'Flours',
  'Pulses',
  'Cleaning & Consumables',
  'Dry Fruits & Nuts',
  'Beverages & Mixers',
  'Rice & Rice Products',
  'Fish, Prawns & Seafood',
  'Mutton, Duck & Lamb',
  'Kitchenware',
  'Fresh Cut & Peeled',
  'Kitchen Appliances',
  'GT Chicken & Eggs',
];



