# Adding the Peas Image

To use your custom peas image, follow these steps:

## Step 1: Save the Image

1. Save your peas image file as `peas.png` in the `mobile/assets/` directory
2. The full path should be: `mobile/assets/peas.png`

## Step 2: Verify the Setup

The code has already been updated to use your local image. The product data now references:
```javascript
image: require('../../assets/peas.png')
```

## Step 3: Test

After saving the image:
1. Run `npm start` in the mobile directory
2. Navigate to the "Frozen Green Peas" product
3. You should see your custom image instead of the URL

## Image Requirements

- **Format**: PNG (recommended) or JPG
- **Size**: Any size (will be automatically resized)
- **Location**: Must be in `mobile/assets/` folder
- **Name**: `peas.png` (or update the require path in products.js if using a different name)

## Troubleshooting

If the image doesn't appear:
1. Check that the file is saved as `peas.png` in `mobile/assets/`
2. Verify the file name matches exactly (case-sensitive)
3. Restart the Expo development server: `npm start -- --reset-cache`
4. Check the console for any error messages
