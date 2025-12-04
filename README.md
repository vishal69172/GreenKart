# Greenkart

<<<<<<< HEAD
A modern grocery shopping platform built with React and Tailwind CSS.
=======
Built with React and Tailwind CSS.
>>>>>>> 00f1a3d356d2a4a89231ca411abbf5baf84d82d4

## Features

- 🛍️ Product catalog with multiple categories
- 📱 Fully responsive design
- 🎨 Modern UI/UX matching the original design
- 💬 Customer testimonials carousel
- ❓ FAQ section with expandable questions
- 🚚 Delivery models information
- 📊 Statistics showcase

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Greenkart/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Categories.jsx
│   │   ├── CategorySection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── DeliveryModels.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── data/            # Data files
│   │   ├── products.js
│   │   └── testimonials.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Components

- **Header**: Navigation bar with location selector and login
- **Hero**: Statistics and main hero section
- **Categories**: Product categories with scrollable product lists
- **DeliveryModels**: Information about delivery options
- **Testimonials**: Customer testimonials carousel
- **FAQ**: Frequently asked questions with expandable answers
- **Footer**: Footer with company information and links

## Customization

You can customize the colors, fonts, and other design elements by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles
- Individual component files for specific styling

## License

This project is a clone for educational purposes.



