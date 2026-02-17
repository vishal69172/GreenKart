# Greenkart Native iOS App (SwiftUI)

I have created a native iOS project structure for you in the `GreenkartIOS` directory using **SwiftUI**.

### 📂 Project Structure:
- **GreenkartApp.swift**: The main entry point of the app.
- **Models/Product.swift**: The data structure for your products.
- **Models/ProductData.swift**: Your actual product data migrated from the website.
- **Views/ProductListView.swift**: The main screen with category filtering and a grid of products.
- **Views/ProductCardView.swift**: Reusable component for the product cards.
- **Views/ProductDetailView.swift**: Detailed view showing pricing, images, and quantity selectors.

### 🚀 How to Open in Xcode:
1.  Open **Xcode** on your Mac.
2.  Select **"Open a project or file"**.
3.  Navigate to the `GreenkartIOS` folder in this directory.
4.  Since this is a simple SwiftUI project, you can create a new **Xcode Project** (App template) named "GreenkartIOS" and then drag these files into it.

### 🖼️ Adding Images:
The app is configured to use the same image names as your website.
1.  In Xcode, open **Assets.xcassets**.
2.  Drag all the images from `public/images/products/*.png` into the assets catalog.
3.  Ensure the names in the assets catalog match the `image` string in `ProductData.swift` (e.g., `carrots`, `amul-butter`).

### ✨ Key Features implemented:
- **Native Performance**: 100% native SwiftUI components.
- **Category Filtering**: Seamlessly filter between Fruits, Vegetables, and Dairy.
- **Grid Layout**: Responsive grid that looks great on all iPhone models.
- **Bulk Pricing Support**: Native UI for showing wholesale price tiers.
- **Interactive Detail View**: High-quality imagery and quantity controls.
