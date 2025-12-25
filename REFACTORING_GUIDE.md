# 🎧 Headphones Website - Architecture Guide

## 📁 Project Structure

```
src/
├── assets/images/              # WebP optimized images (7 files)
├── components/
│   ├── AudioCard/              # Audio feature cards
│   │   └── AudioCard.jsx
│   ├── ColorPicker/            # Color selection system
│   │   ├── ColorPicker.jsx     # Main component
│   │   ├── ColorButtons.jsx    # Color option buttons
│   │   └── ProductCarousel.jsx # Image carousel
│   ├── Compare/
│   │   ├── ProductCompareCard.jsx
│   │   └── icons.jsx           # SVG icon components (10 icons)
│   ├── DreamlikeSound/         # CTA section
│   │   └── DreamlikeSound.jsx
│   ├── HorizontalGallery/      # Scroll gallery
│   │   ├── HorizontalGallery.jsx
│   │   ├── GalleryTrack.jsx
│   │   └── GalleryPanel.jsx
│   ├── Navbar/
│   │   ├── Header.jsx          # Smart header (scroll-aware)
│   │   ├── MobileMenu.jsx      # Mobile navigation
│   │   ├── HeroSection.jsx     # Hero wrapper
│   │   └── HeroContent.jsx     # Animated hero content
│   └── Footer/
│       └── Footer.jsx
├── data/
│   ├── content.js              # Centralized content (500+ lines)
│   └── productsData.js         # Product specifications
├── hooks/                      # Custom React hooks
│   ├── useBottomSheetAnimation.js
│   ├── useCloseOnResize.js
│   ├── useHeroTextAnimation.js
│   └── useLockBodyScroll.js
├── pages/
│   ├── Home.jsx                # Homepage
│   ├── TechSpecs.jsx           # Technical specifications
│   └── Compare.jsx             # Product comparison
└── App.js                      # Router setup (React Router 7)
```

## 🎨 Compare Page Architecture

### Components Hierarchy

```
Compare (Page)
└── Container
    ├── Header
    ├── MobileMenu
    ├── Page Header (Title + Description)
    ├── Comparison Grid
    │   ├── ProductCompareCard (Aura Pro II)
    │   │   ├── Product Info Box
    │   │   │   ├── Name
    │   │   │   ├── Image
    │   │   │   ├── Price
    │   │   │   └── Buy Button
    │   │   └── Features List (9 items)
    │   │       └── Feature Item
    │   │           ├── Icon
    │   │           └── Label
    │   └── ProductCompareCard (Flow II)
    └── Footer
```

## 🔧 Key Features

### 1. **Separated Icons** (`icons.jsx`)
- All SVG icons in one file for easy maintenance
- Exported as named exports
- Consistent sizing (`w-7 h-7`)
- Minimal stroke width for clean look

### 2. **Centralized Data** (`productsData.js`)
- Product information stored separately
- Easy to update specifications
- Scalable for adding more products
- Type-safe with clear structure

### 3. **Reusable Components**
- `ProductCompareCard` - Generic comparison card
- Can be used for any product
- Accepts product object as prop

## 📊 Product Data Structure

```javascript
{
  id: "product-id",
  name: "Product Name",
  image: imageImport,
  price: "$XXX",
  features: [
    {
      icon: <IconComponent />,
      label: "Feature description",
      disabled: false
    }
  ]
}
```

## 🎯 Advantages of This Structure

### ✅ **Maintainability**
- Icons in one place - easy to update
- Data separated from UI logic
- Clear component responsibilities

### ✅ **Scalability**
- Add new products easily
- Add new icons without touching components
- Extend features without restructuring

### ✅ **Readability**
- Clean component files
- Well-documented code
- Logical file organization

### ✅ **Performance**
- Components can be memoized if needed
- Icons can be tree-shaken
- No unnecessary re-renders

### ✅ **Testability**
- Easy to test data separately
- Components can be tested in isolation
- Icons can be mocked easily

## 🚀 How to Add a New Product

1. **Add product image** to `src/assets/images/`
2. **Import image** in `src/data/productsData.js`
3. **Add product object** to `products`:
```javascript
export const newProduct = {
  id: "new-product",
  name: "New Product",
  image: newProductImg,
  price: "$XXX",
  features: [...]
};
```
4. **Add to Compare page**:
```javascript
<ProductCompareCard product={newProduct} />
```

## 🎨 How to Add a New Icon

1. **Create icon component** in `src/components/Compare/icons.jsx`:
```javascript
export const NewIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {/* SVG paths */}
  </svg>
);
```
2. **Import in data file**:
```javascript
import { NewIcon } from "../components/Compare/icons";
```
3. **Use in features**:
```javascript
{ icon: <NewIcon />, label: "Feature name" }
```

## 📝 Code Style Guidelines

- ✅ Use JSDoc comments for components
- ✅ Meaningful variable names
- ✅ Accessibility attributes (aria-label, aria-hidden)
- ✅ Consistent formatting
- ✅ Clear component responsibility

## 🎯 Best Practices Applied

1. **Single Responsibility Principle** - Each file has one purpose
2. **DRY (Don't Repeat Yourself)** - Reusable components and data
3. **Separation of Concerns** - UI, data, and logic separated
4. **Component Composition** - Small, focused components
5. **Custom Hooks** - Reusable logic extracted to hooks
6. **Content Management** - All text centralized in content.js
7. **Documentation** - Clear comments and README

---

**Built with ❤️ using React 19 and Tailwind CSS**

**Last Updated:** December 26, 2024
