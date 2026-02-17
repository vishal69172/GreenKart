#!/usr/bin/env node

/**
 * Setup Verification Script
 * Checks if the mobile app is properly configured for building
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    console.log(`${colors.green}✓${colors.reset} ${description}`);
    return true;
  } else {
    console.log(`${colors.red}✗${colors.reset} ${description} - MISSING`);
    return false;
  }
}

function checkDirectory(dirPath, description) {
  const exists = fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  if (exists) {
    console.log(`${colors.green}✓${colors.reset} ${description}`);
    return true;
  } else {
    console.log(`${colors.red}✗${colors.reset} ${description} - MISSING`);
    return false;
  }
}

console.log('\n' + colors.blue + 'Greenkart Mobile App - Setup Verification' + colors.reset + '\n');
console.log('Checking project configuration...\n');

let allGood = true;

// Check core files
console.log(colors.blue + 'Core Files:' + colors.reset);
allGood &= checkFile('App.js', 'App.js');
allGood &= checkFile('app.json', 'app.json');
allGood &= checkFile('package.json', 'package.json');
allGood &= checkFile('babel.config.js', 'babel.config.js');
allGood &= checkFile('eas.json', 'eas.json');

console.log('\n' + colors.blue + 'Source Files:' + colors.reset);
allGood &= checkDirectory('src', 'src/ directory');
allGood &= checkDirectory('src/screens', 'src/screens/');
allGood &= checkDirectory('src/context', 'src/context/');
allGood &= checkFile('src/context/CartContext.js', 'CartContext.js');
allGood &= checkFile('src/data/products.js', 'products.js');
allGood &= checkFile('src/screens/HomeScreen.js', 'HomeScreen.js');
allGood &= checkFile('src/screens/ProductsScreen.js', 'ProductsScreen.js');
allGood &= checkFile('src/screens/CartScreen.js', 'CartScreen.js');
allGood &= checkFile('src/screens/ProductDetailScreen.js', 'ProductDetailScreen.js');

console.log('\n' + colors.blue + 'Assets:' + colors.reset);
const assetsDir = checkDirectory('assets', 'assets/ directory');
if (assetsDir) {
  checkFile('assets/icon.png', 'icon.png (required for builds)');
  checkFile('assets/splash.png', 'splash.png (required for builds)');
  checkFile('assets/adaptive-icon.png', 'adaptive-icon.png (required for Android builds)');
  checkFile('assets/favicon.png', 'favicon.png (optional, for web)');
  console.log(colors.yellow + '⚠ Note: Assets are optional for development but required for production builds' + colors.reset);
} else {
  console.log(colors.yellow + '⚠ Assets directory missing - create it and add required images' + colors.reset);
}

// Check node_modules
console.log('\n' + colors.blue + 'Dependencies:' + colors.reset);
const nodeModulesExists = checkDirectory('node_modules', 'node_modules/ (run npm install)');

// Check package.json for required scripts
if (fs.existsSync('package.json')) {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('\n' + colors.blue + 'Package Scripts:' + colors.reset);
  if (packageJson.scripts) {
    const scripts = packageJson.scripts;
    checkFile(null, `start script: ${scripts.start || 'MISSING'}`);
    checkFile(null, `android script: ${scripts.android || 'MISSING'}`);
    checkFile(null, `ios script: ${scripts.ios || 'MISSING'}`);
    if (scripts['build:android']) {
      console.log(`${colors.green}✓${colors.reset} Build scripts configured`);
    }
  }
}

// Summary
console.log('\n' + '='.repeat(50));
if (allGood && nodeModulesExists) {
  console.log(colors.green + '\n✓ Setup looks good! You can start developing.' + colors.reset);
  console.log('\nNext steps:');
  console.log('  1. Run: npm start');
  console.log('  2. Press "i" for iOS or "a" for Android');
  console.log('  3. Or scan QR code with Expo Go app');
} else {
  console.log(colors.yellow + '\n⚠ Some items need attention:' + colors.reset);
  if (!nodeModulesExists) {
    console.log('  - Run: npm install');
  }
  if (!assetsDir) {
    console.log('  - Create assets/ directory and add app icons');
    console.log('  - See assets/README.md for details');
  }
  console.log('\nSee SETUP.md or QUICK_START.md for detailed instructions.');
}
console.log('='.repeat(50) + '\n');
