/**
 * Image Helper Utility
 * Handles local require() images only
 */

export const getImageSource = (image) => {
  // If image is undefined or null, return a default placeholder
  if (!image) {
    // Return a simple colored placeholder (you can replace with a local placeholder image)
    return require('../../../assets/icon.png'); // Fallback to app icon
  }
  // If image is already a require() object, use it directly
  return image;
};
