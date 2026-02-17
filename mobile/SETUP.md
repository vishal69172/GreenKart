# Greenkart Mobile App Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
cd mobile
npm install
```

### 2. Start Development Server

```bash
npm start
```

### 3. Run on Device/Emulator

- **iOS Simulator**: Press `i` in the terminal or click in Expo DevTools
- **Android Emulator**: Press `a` in the terminal or click in Expo DevTools
- **Physical Device**: Install Expo Go app and scan the QR code

## Required Assets

Create the following assets in the `mobile/assets/` directory:

1. **icon.png** - App icon (1024x1024px)
2. **splash.png** - Splash screen (1242x2436px recommended)
3. **adaptive-icon.png** - Android adaptive icon (1024x1024px)
4. **favicon.png** - Web favicon (48x48px)

See `assets/README.md` for detailed instructions on creating these assets.

**Quick Option**: Use online tools like:
- https://www.appicon.co/
- https://makeappicon.com/
- https://www.favicon-generator.org/

## Building for Production

### Using EAS Build (Recommended)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo (create free account at https://expo.dev):
```bash
eas login
```

3. Configure the project:
```bash
eas build:configure
```

4. Build for platforms:
```bash
# Android APK (for testing)
npm run build:android

# iOS IPA (for testing)
npm run build:ios

# Or use EAS directly:
eas build --platform android --profile preview
eas build --platform ios --profile preview

# Production builds (for app stores):
eas build --platform android --profile production
eas build --platform ios --profile production
```

See `BUILD_GUIDE.md` for comprehensive build instructions.

## Testing on Physical Devices

### iOS
1. Install Expo Go from App Store
2. Run `npm start`
3. Scan QR code with Camera app (iOS 11+)

### Android
1. Install Expo Go from Play Store
2. Run `npm start`
3. Scan QR code with Expo Go app

## Project Structure

```
mobile/
├── App.js                 # Main app entry with navigation
├── app.json               # Expo configuration
├── eas.json              # EAS Build configuration
├── package.json          # Dependencies and scripts
├── babel.config.js       # Babel configuration
├── assets/               # App icons and splash screens
│   ├── icon.png
│   ├── splash.png
│   ├── adaptive-icon.png
│   └── favicon.png
└── src/
    ├── screens/          # Screen components
    │   ├── HomeScreen.js
    │   ├── ProductsScreen.js
    │   ├── CartScreen.js
    │   └── ProductDetailScreen.js
    ├── context/          # React Context
    │   └── CartContext.js
    └── data/             # Data files
        └── products.js
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Start on Android emulator
- `npm run ios` - Start on iOS simulator
- `npm run web` - Start web version
- `npm run build:android` - Build Android APK/AAB
- `npm run build:ios` - Build iOS IPA
- `npm run build:all` - Build for both platforms

## Troubleshooting

### Common Issues

1. **Metro bundler not starting**: 
   ```bash
   npm start -- --reset-cache
   ```

2. **Build errors**: 
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Image loading issues**: 
   - Check network permissions
   - Verify image URLs are accessible
   - Ensure assets directory exists

4. **Navigation errors**: 
   - Ensure all screens are properly imported
   - Check navigation dependencies are installed

5. **iOS build fails**:
   - Ensure Xcode is installed (Mac only)
   - Run `xcode-select --install` if needed
   - Check Apple Developer account is linked

6. **Android build fails**:
   - Ensure Android Studio and SDK are installed
   - Check Java version: `java -version` (should be 11+)
   - Verify ANDROID_HOME environment variable

## Platform-Specific Requirements

### iOS
- macOS required
- Xcode (latest version)
- CocoaPods: `sudo gem install cocoapods`
- Apple Developer Account ($99/year) for App Store

### Android
- Android Studio
- Java JDK 11+
- Android SDK
- Google Play Developer Account ($25 one-time) for Play Store

## Next Steps

- ✅ Basic app structure complete
- ✅ Navigation and cart functionality
- 🔄 Add authentication
- 🔄 Integrate payment gateway
- 🔄 Add push notifications
- 🔄 Implement user profiles
- 🔄 Add order tracking
- 🔄 Add analytics
- 🔄 Set up crash reporting

## Documentation

- `QUICK_START.md` - Get started in 5 minutes
- `BUILD_GUIDE.md` - Comprehensive build instructions
- `README.md` - Project overview
- `assets/README.md` - Asset creation guide

