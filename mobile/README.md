# Greenkart Mobile App

React Native mobile application for Greenkart - Quality Kitchen Supplies, built with Expo for cross-platform support (iOS & Android).

## 🎯 Features

- ✅ **Home Screen** - Hero section with stats and quick category links
- ✅ **Product Catalog** - Browse products by category with search functionality
- ✅ **Shopping Cart** - Add/remove items with quantity management
- ✅ **Product Details** - Detailed product view with bulk pricing support
- ✅ **Bulk Pricing** - Automatic price adjustments based on quantity
- ✅ **Modern UI** - Clean, green-themed interface matching brand identity
- ✅ **Navigation** - Bottom tabs + stack navigation for smooth UX

## 📱 Platforms

- **iOS** - iPhone and iPad support
- **Android** - Phone and tablet support
- **Web** - Progressive Web App support (via Expo)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Expo Go app (for physical device testing)

### Installation

```bash
# Navigate to mobile directory
cd mobile

# Install dependencies
npm install

# Verify setup
npm run verify

# Start development server
npm start
```

Then:
- Press `i` for iOS Simulator (Mac only)
- Press `a` for Android Emulator
- Scan QR code with Expo Go app on your device

**See `QUICK_START.md` for detailed quick start guide.**

## 📁 Project Structure

```
mobile/
├── App.js                    # Main app entry with navigation setup
├── app.json                  # Expo configuration (iOS/Android settings)
├── eas.json                  # EAS Build configuration
├── package.json              # Dependencies and scripts
├── babel.config.js           # Babel configuration
├── verify-setup.js           # Setup verification script
│
├── assets/                   # App icons and splash screens
│   ├── icon.png             # App icon (1024x1024px)
│   ├── splash.png           # Splash screen
│   ├── adaptive-icon.png    # Android adaptive icon
│   └── favicon.png          # Web favicon
│
└── src/
    ├── screens/             # Screen components
    │   ├── HomeScreen.js           # Home screen with hero
    │   ├── ProductsScreen.js       # Product listing with filters
    │   ├── CartScreen.js           # Shopping cart
    │   └── ProductDetailScreen.js  # Product details
    │
    ├── context/             # React Context providers
    │   └── CartContext.js   # Shopping cart state management
    │
    └── data/                # Data files
        └── products.js      # Product catalog data
```

## 🛠️ Development

### Available Scripts

```bash
npm start              # Start Expo development server
npm run android        # Start on Android emulator
npm run ios            # Start on iOS simulator
npm run web            # Start web version
npm run verify         # Verify project setup
```

### Development Workflow

1. **Start the dev server**: `npm start`
2. **Make changes** to code - hot reload is automatic
3. **Test on device** - Scan QR code with Expo Go
4. **Debug** - Use React Native Debugger or Chrome DevTools

## 🏗️ Building for Production

### Prerequisites for Building
- Expo account (free): https://expo.dev/signup
- EAS CLI: `npm install -g eas-cli`
- App assets (icons, splash screens) - See `assets/README.md`

### Build Commands

```bash
# Login to Expo
eas login

# Configure project (first time)
eas build:configure

# Build for Android
npm run build:android

# Build for iOS
npm run build:ios

# Build for both platforms
npm run build:all
```

**See `BUILD_GUIDE.md` for comprehensive build instructions.**

## 📦 Dependencies

### Core
- **expo** (~49.0.0) - Expo SDK
- **react** (18.2.0) - React library
- **react-native** (0.72.6) - React Native framework

### Navigation
- **@react-navigation/native** - Navigation core
- **@react-navigation/stack** - Stack navigator
- **@react-navigation/bottom-tabs** - Bottom tab navigator
- **react-native-screens** - Native screen components
- **react-native-safe-area-context** - Safe area handling
- **react-native-gesture-handler** - Gesture recognition

### UI & Icons
- **@expo/vector-icons** - Icon library (Ionicons)
- **react-native-vector-icons** - Additional icons
- **react-native-reanimated** - Animations

## 📚 Documentation

- **QUICK_START.md** - Get started in 5 minutes
- **SETUP.md** - Detailed setup instructions
- **BUILD_GUIDE.md** - Production build guide
- **assets/README.md** - Asset creation guide

## 🎨 Design

- **Primary Color**: #2E7D32 (Green)
- **Theme**: Clean, modern, food-focused
- **Typography**: System fonts (San Francisco on iOS, Roboto on Android)
- **Layout**: Responsive, works on phones and tablets

## 🔧 Configuration

### App Configuration (`app.json`)
- App name: "Greenkart"
- Bundle ID: `com.greenkart.app`
- Version: 1.0.0
- Orientation: Portrait

### iOS Configuration
- Supports iPhone and iPad
- Bundle Identifier: `com.greenkart.app`
- Build Number: 1.0.0

### Android Configuration
- Package Name: `com.greenkart.app`
- Version Code: 1
- Adaptive icon support

## 🐛 Troubleshooting

### Common Issues

**Metro bundler won't start**
```bash
npm start -- --reset-cache
```

**Dependencies issues**
```bash
rm -rf node_modules
npm install
```

**Build fails**
- Check `BUILD_GUIDE.md` for platform-specific requirements
- Ensure all assets are in `assets/` directory
- Verify `app.json` configuration

**Navigation errors**
- Ensure all screens are properly imported
- Check navigation dependencies are installed

## 📱 Testing

### Development Testing
- Use Expo Go app for quick testing on physical devices
- Use simulators/emulators for platform-specific testing
- Test on both iOS and Android before production builds

### Production Testing
- Build preview builds: `eas build --profile preview`
- Test APK/IPA on physical devices
- Test on multiple screen sizes
- Verify all features work correctly

## 🚢 Deployment

### Google Play Store
1. Build production AAB: `eas build --platform android --profile production`
2. Submit: `eas submit --platform android`
3. Complete Play Console listing

### Apple App Store
1. Build production IPA: `eas build --platform ios --profile production`
2. Submit: `eas submit --platform ios`
3. Complete App Store Connect listing

## 🔄 Version Management

Update versions before each release:
- `app.json` → `version`: "1.0.0"
- `app.json` → `ios.buildNumber`: "1.0.0"
- `app.json` → `android.versionCode`: 1

## 📞 Support

- Expo Documentation: https://docs.expo.dev
- EAS Build Docs: https://docs.expo.dev/build/introduction/
- Expo Forums: https://forums.expo.dev
- React Native Docs: https://reactnative.dev

## 📄 License

[Add your license here]

## 👥 Contributors

[Add contributors here]

---

**Built with ❤️ using React Native and Expo**
