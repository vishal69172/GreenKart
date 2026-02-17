# Quick Start Guide - Greenkart Mobile App

Get your Greenkart mobile app running in minutes!

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Dependencies

```bash
cd mobile
npm install
```

### Step 2: Start Development Server

```bash
npm start
```

This opens Expo DevTools in your browser.

### Step 3: Run on Device/Simulator

**Option A: Physical Device (Easiest)**
1. Install **Expo Go** app:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
2. Scan the QR code shown in terminal/browser
3. App opens on your device!

**Option B: Simulator/Emulator**
- Press `i` in terminal for iOS Simulator (Mac only)
- Press `a` in terminal for Android Emulator
- Requires Xcode (iOS) or Android Studio (Android) installed

## 📱 Testing the App

The app includes:
- ✅ Home screen with hero section
- ✅ Product browsing with categories
- ✅ Search functionality
- ✅ Shopping cart
- ✅ Product details with bulk pricing

## 🏗️ Building for Production

### Prerequisites
- Expo account (free): https://expo.dev/signup
- EAS CLI: `npm install -g eas-cli`

### Build Commands

```bash
# Login to Expo
eas login

# Build for Android (APK)
npm run build:android

# Build for iOS (IPA)
npm run build:ios

# Build for both platforms
npm run build:all
```

**Note**: Before building, you'll need to:
1. Create app assets (see `assets/README.md`)
2. Run `eas build:configure` to set up the project

See `BUILD_GUIDE.md` for detailed instructions.

## 📋 What's Included

- React Native with Expo
- Navigation (Bottom tabs + Stack navigation)
- Shopping cart with context API
- Product catalog with categories
- Bulk pricing support
- Modern UI with green theme (#2E7D32)

## 🐛 Troubleshooting

**App won't start?**
```bash
npm start -- --reset-cache
```

**Dependencies issues?**
```bash
rm -rf node_modules
npm install
```

**Build errors?**
- Check `BUILD_GUIDE.md` for platform-specific requirements
- Ensure all assets are in `assets/` directory
- Verify `app.json` configuration

## 📚 Next Steps

- Read `BUILD_GUIDE.md` for production builds
- Check `SETUP.md` for detailed setup
- See `README.md` for project structure

## 🆘 Need Help?

- Expo Docs: https://docs.expo.dev
- EAS Build: https://docs.expo.dev/build/introduction/
- Expo Forums: https://forums.expo.dev
