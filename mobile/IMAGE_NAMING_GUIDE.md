# Image Naming Guide

All product images should be placed in `src/images/` directory with the following naming convention:

## Naming Pattern

Convert product name to lowercase, replace spaces and special characters with hyphens, and use `.jpg` extension.

**Format**: `product-name-in-lowercase.jpg`

## Required Images

### Fruits & Vegetables
1. `carrots-big-1-kg.jpg` - Carrots (Big), 1 Kg
2. `green-chilli-spicy-500-gm.jpg` - Green Chilli (Spicy), 500 gm
3. `mint-leaves-pudina-250-gm.jpg` - Mint Leaves (Pudina), 250 gm
4. `frozen-sweet-corn-1-kg.jpg` - Frozen Sweet Corn, 1 Kg
5. `frozen-peas-image.jpeg` - Frozen Green Peas, 1 Kg ✅ (already exists)
6. `spring-onion-250-gm.jpg` - Spring Onion, 250 gm
7. `coriander-leaves-1-kg.jpg` - Coriander Leaves, 1 Kg
8. `green-capsicum-1-kg.jpg` - Green Capsicum, 1 Kg
9. `basil-leaves-100-gm.jpg` - Basil Leaves, 100 gm
10. `onion-regular-5-kg.jpg` - Onion (Regular), 5 Kg

### Dairy
1. `amul-butter-salted-500-gm.jpg` - Amul - Butter Salted, 500 gm
2. `amul-fresh-cream-1-l.jpg` - Amul - Fresh Cream, 1 L
3. `amul-processed-cheese-block-1-kg.jpg` - Amul - Processed Cheese Block, 1 Kg
4. `milky-mist-paneer-1-kg.jpg` - Milky Mist - Paneer, 1 Kg
5. `amul-delicious-margarine-500-gm.jpg` - Amul - Delicious Margarine, 500 gm
6. `nutralite-professional-fat-spread-500-gm.jpg` - Nutralite - Professional Fat Spread, 500 gm
7. `amul-toned-curd-1-kg.jpg` - Amul - Toned Curd, 1 Kg
8. `amul-cheese-diced-mozzarella-1-kg.jpg` - Amul - Cheese, Diced Mozzarella, 1 Kg
9. `amul-taaza-milk-1-l.jpg` - Amul - Taaza Milk, 1 L
10. `fresh-paneer-1-kg.jpg` - Fresh Paneer, 1 Kg

## Image Requirements

- **Format**: JPG or JPEG (PNG also supported)
- **Size**: Recommended 400x400px or higher (will be auto-resized)
- **Location**: `src/images/` directory
- **Naming**: Must match exactly (case-sensitive)

## Notes

- The frozen peas image already exists as `frozen peas image.jpeg` - this has been mapped correctly
- All other images need to be added to the `src/images/` directory
- If an image file doesn't exist, the app will show an error - make sure all images are present before running

## Quick Reference

To add a new product image:
1. Save the image file in `src/images/` directory
2. Name it following the pattern: `product-name-lowercase.jpg`
3. Update the product in `mobile/src/data/products.js` to use:
   ```javascript
   image: require('../../../src/images/product-name-lowercase.jpg')
   ```
