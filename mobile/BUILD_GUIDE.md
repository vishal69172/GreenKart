# Greenkart Mobile App - Build Guide for Android & iOS

This guide will help you build and deploy the Greenkart mobile app for both Android and iOS platforms.

## Prerequisites

### For Both Platforms
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- EAS CLI: `npm install -g eas-cli`
- Expo account (free): Sign up at https://expo.dev

### For iOS Development
- macOS (required)
- Xcode (latest version from Mac App Store)
- CocoaPods: `sudo gem install cocoapods`
- Apple Developer Account ($99/year) - Required for App Store distribution

### For Android Development
- Android Studio (latest version)
- Java Development Kit (JDK 11 or higher)
- Android SDK (installed via Android Studio)
- Google Play Developer Account ($25 one-time) - Required for Play Store distribution

## Initial Setup

### 1. Install Dependencies

```bash
cd mobile
npm install
```

### 2. Create App Assets

Before building, you need to create app icons and splash screens:

1. Create a 1024x1024px app icon
2. Place the following files in the `assets/` directory:
   - `icon.png` (1024x1024px)
   - `splash.png` (1242x2436px)
   - `adaptive-icon.png` (1024x1024px)
   - `favicon.png` (48x48px)

See `assets/README.md` for detailed instructions.

### 3. Configure EAS Build

```bash
# Login to Expo
eas login

# Configure the project
eas build:configure
```

This will create/update the `eas.json` file.

## Development Builds

### Running on Simulator/Emulator

```bash
# Start development server
npm start

# Then press:
# - 'i' for iOS simulator
# - 'a' for Android emulator
```

### Running on Physical Device

1. Install Expo Go app on your device:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Start the development server:
   ```bash
   npm start
   ```

3. Scan the QR code with:
   - iOS: Camera app (iOS 11+)
   - Android: Expo Go app

## Building for Production

### Using EAS Build (Recommended)

EAS Build is Expo's cloud-based build service that handles all the complexity of building native apps.

#### 1. Configure Build Profiles

The `eas.json` file contains three build profiles:
- **development**: For development builds with Expo Dev Client
- **preview**: For testing on physical devices (APK/IPA)
- **production**: For App Store and Play Store releases

#### 2. Build for Android

```bash
# Build APK (for direct installation)
eas build --platform android --profile preview

# Build AAB (for Play Store)
eas build --platform android --profile production
```

The build will be uploaded to EAS servers and you'll get a download link when it's complete.

#### 3. Build for iOS

```bash
# Build for simulator (testing)
eas build --platform ios --profile preview

# Build for App Store
eas build --platform ios --profile production
```

**Note**: For iOS production builds, you'll need:
- An Apple Developer account
- Proper certificates and provisioning profiles (EAS handles this automatically)

#### 4. Build for Both Platforms

```bash
eas build --platform all --profile production
```

### Local Builds (Advanced)

#### Android APK (Local)

```bash
# Generate Android keystore (first time only)
keytool -genkeypair -v -storetype PKCS12 -keystore android-keystore.jks -alias greenkart -keyalg RSA -keysize 2048 -validity 10000

# Build APK
eas build --platform android --local
```

#### iOS IPA (Local - macOS only)

```bash
# Requires Xcode and proper certificates
eas build --platform ios --local
```

## Submitting to App Stores

### Google Play Store

1. Build the production AAB:
   ```bash
   eas build --platform android --profile production
   ```

2. Submit to Play Store:
   ```bash
   eas submit --platform android
   ```

   Or manually upload the AAB file from your Google Play Console.

### Apple App Store

1. Build the production IPA:
   ```bash
   eas build --platform ios --profile production
   ```

2. Submit to App Store:
   ```bash
   eas submit --platform ios
   ```

   Or use Xcode's Organizer to upload the IPA.

## Build Status

Check your build status:
```bash
eas build:list
```

View build logs:
```bash
eas build:view [BUILD_ID]
```

## Troubleshooting

### Common Build Issues

1. **"Missing app icon"**
   - Ensure all required assets are in the `assets/` directory
   - Check file names match exactly (case-sensitive)

2. **"Build failed - credentials"**
   - Run `eas build:configure` again
   - For iOS: Ensure your Apple Developer account is linked

3. **"Metro bundler errors"**
   - Clear cache: `npm start -- --reset-cache`
   - Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

4. **"Android build fails"**
   - Ensure Android SDK is properly installed
   - Check Java version: `java -version` (should be 11+)

5. **"iOS build fails"**
   - Ensure Xcode Command Line Tools are installed: `xcode-select --install`
   - Run `pod install` in `ios/` directory (if using bare workflow)

### Getting Help

- Expo Documentation: https://docs.expo.dev
- EAS Build Docs: https://docs.expo.dev/build/introduction/
- Expo Forums: https://forums.expo.dev

## Next Steps After Building

1. **Test thoroughly** on both platforms
2. **Set up app store listings** with screenshots and descriptions
3. **Configure app store metadata** (privacy policy, support URL, etc.)
4. **Set up analytics** (Firebase, Mixpanel, etc.)
5. **Configure push notifications** (Expo Notifications)
6. **Set up crash reporting** (Sentry, Bugsnag)

## Version Management

Update version numbers before each build:

- **app.json**: Update `version` (e.g., "1.0.0")
- **app.json** (iOS): Update `buildNumber` (e.g., "1.0.0")
- **app.json** (Android): Update `versionCode` (e.g., 1)

For subsequent releases:
- Increment version: "1.0.0" → "1.0.1" → "1.1.0"
- Increment build numbers accordingly
