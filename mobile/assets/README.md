# Assets Directory

This directory contains the app icons and splash screens required for building the mobile app.

## Required Assets

You need to create the following image files:

### 1. icon.png
- **Size**: 1024x1024 pixels
- **Format**: PNG
- **Usage**: App icon for iOS and Android
- **Design**: Square icon with rounded corners (iOS/Android will apply their own rounding)

### 2. splash.png
- **Size**: 1242x2436 pixels (or 2048x2732 for iPad)
- **Format**: PNG
- **Usage**: Splash screen shown when app launches
- **Design**: Should match your app's branding with green (#2E7D32) background

### 3. adaptive-icon.png
- **Size**: 1024x1024 pixels
- **Format**: PNG
- **Usage**: Android adaptive icon foreground
- **Design**: Icon should be centered in a square canvas (safe area: 432x432 pixels in center)

### 4. favicon.png
- **Size**: 48x48 pixels (or 16x16, 32x32, 96x96)
- **Format**: PNG
- **Usage**: Web favicon
- **Design**: Small version of your app icon

## Quick Setup

### Option 1: Use Online Tools
1. Visit https://www.appicon.co/ or https://makeappicon.com/
2. Upload a 1024x1024px icon
3. Download the generated assets
4. Place them in this directory

### Option 2: Create Manually
1. Design your icon in a graphics editor (Figma, Photoshop, etc.)
2. Export as PNG with the required dimensions
3. Place files in this directory

### Option 3: Use Expo Asset Generator
```bash
npm install -g expo-asset-generator
# Then follow the prompts
```

## Temporary Placeholder

For development purposes, you can temporarily use placeholder images. However, you'll need proper assets before building for production.

## Notes

- All images should be high-quality and optimized
- Use transparent backgrounds where appropriate
- Follow platform-specific design guidelines:
  - iOS: https://developer.apple.com/design/human-interface-guidelines/app-icons
  - Android: https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive
