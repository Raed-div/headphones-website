# 📝 Content Management System Guide

## Overview

The `content.js` file is a centralized content management system for the entire website. All text, labels, and static data are stored here, making it easy to:

- ✅ Update content in one place
- ✅ Translate to multiple languages
- ✅ Connect to a CMS or API
- ✅ Maintain consistency across pages
- ✅ Version control for copy changes

---

## 📁 File Location

```
src/data/content.js
```

---

## 🗂️ Content Structure

### 1. **Site Configuration**
```javascript
import { siteConfig } from '../data/content';

// Access
siteConfig.name          // "Resonance"
siteConfig.email         // "info@resonance.com"
siteConfig.social.twitter // Twitter URL
```

### 2. **Home Page Content**
```javascript
import { homePageContent } from '../data/content';

// Hero Section
homePageContent.hero.title        // "Resonance"
homePageContent.hero.subtitle     // "Aura Pro II"

// Color Picker
homePageContent.colorPicker.title // "Your Style. Your Sound."
homePageContent.colorPicker.colors.beige.name // "Beige"
```

### 3. **Tech Specs Content**
```javascript
import { techSpecsContent } from '../data/content';

// Categories
techSpecsContent.categories.audioTechnology.title
techSpecsContent.categories.audioTechnology.specs[0].label
techSpecsContent.categories.audioTechnology.specs[0].value
```

### 4. **Compare Page Content**
```javascript
import { comparePageContent } from '../data/content';

comparePageContent.title          // "Compare Resonance Models"
comparePageContent.products.auraPro.name  // "Aura Pro II"
```

### 5. **Footer Content**
```javascript
import { footerContent } from '../data/content';

footerContent.tagline.title
footerContent.products
footerContent.social
```

### 6. **Navigation Content**
```javascript
import { navigationContent } from '../data/content';

navigationContent.logo.text      // "Resonance"
navigationContent.menuItems      // Array of nav items
```

### 7. **UI Text**
```javascript
import { uiText } from '../data/content';

uiText.buttons.buyNow           // "Buy Now"
uiText.messages.loading         // "Loading..."
```

---

## 💡 Usage Examples

### Example 1: Simple Import
```jsx
import { homePageContent } from '../data/content';

function Hero() {
  return (
    <h1>{homePageContent.hero.title}</h1>
  );
}
```

### Example 2: Using Multiple Sections
```jsx
import { techSpecsContent } from '../data/content';

function TechSpecs() {
  const { categories } = techSpecsContent;
  
  return (
    <div>
      <h2>{categories.audioTechnology.title}</h2>
      {categories.audioTechnology.specs.map((spec, index) => (
        <div key={index}>
          <span>{spec.label}:</span>
          <span>{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
```

### Example 3: Using Helper Functions
```jsx
import { getContent, formatPrice } from '../data/content';

function ProductCard({ productId }) {
  const price = getContent(`comparePageContent.products.${productId}.price`);
  
  return <span>{price}</span>;
}
```

---

## 🔄 Connecting to an API

### Step 1: Create API Service

```javascript
// src/services/contentService.js
import axios from 'axios';
import defaultContent from '../data/content';

export const fetchContent = async () => {
  try {
    const response = await axios.get('/api/content');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch content, using defaults');
    return defaultContent;
  }
};
```

### Step 2: Create Content Context

```javascript
// src/context/ContentContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchContent } from '../services/contentService';
import defaultContent from '../data/content';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchContent();
      setContent(data);
      setLoading(false);
    };
    
    loadContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading }}>
      {children}
    </ContentContext.Provider>
  );
};
```

### Step 3: Use in Components

```javascript
// src/pages/Home.jsx
import React, { useContext } from 'react';
import { ContentContext } from '../context/ContentContext';

function Home() {
  const { content, loading } = useContext(ContentContext);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <h1>{content.homePageContent.hero.title}</h1>
  );
}
```

---

## 🌍 Multi-Language Support

### Structure for i18n

```javascript
// src/data/content/en.js
export const content_en = {
  homePageContent: {
    hero: {
      title: "Resonance"
    }
  }
};

// src/data/content/ar.js
export const content_ar = {
  homePageContent: {
    hero: {
      title: "رنين"
    }
  }
};

// Usage
import { content_en } from './content/en';
import { content_ar } from './content/ar';

const content = language === 'ar' ? content_ar : content_en;
```

---

## 📊 Content Categories

| Category | Description | Use Case |
|----------|-------------|----------|
| `siteConfig` | Site-wide settings | Logo, contact info, SEO |
| `homePageContent` | Homepage text | Hero, sections, CTAs |
| `techSpecsContent` | Technical details | Product specifications |
| `comparePageContent` | Comparison data | Product comparison |
| `footerContent` | Footer information | Links, social, legal |
| `navigationContent` | Menu items | Header navigation |
| `uiText` | Common UI labels | Buttons, messages |

---

## 🔧 Modifying Content

### Adding New Content

```javascript
// In content.js
export const newSectionContent = {
  title: "New Section",
  description: "Description here",
  items: [
    { label: "Item 1", value: "Value 1" }
  ]
};
```

### Updating Existing Content

```javascript
// Just edit the value in content.js
export const homePageContent = {
  hero: {
    title: "New Title Here" // ← Change this
  }
};
```

---

## 🎯 Best Practices

### ✅ DO:
- Keep all static text in content.js
- Use descriptive key names
- Group related content together
- Add comments for complex structures
- Version control your changes

### ❌ DON'T:
- Hardcode text directly in components
- Mix content with logic
- Duplicate content in multiple places
- Store dynamic data here (use state/API)

---

## 🚀 Migration Guide

### From Hardcoded to Content File

**Before:**
```jsx
function Hero() {
  return <h1>Resonance</h1>;
}
```

**After:**
```jsx
import { homePageContent } from '../data/content';

function Hero() {
  return <h1>{homePageContent.hero.title}</h1>;
}
```

---

## 📝 Content Update Workflow

1. **Edit** `content.js`
2. **Save** the file
3. **Test** affected pages
4. **Commit** with clear message
5. **Deploy** changes

---

## 🔮 Future Enhancements

- [ ] Multi-language support
- [ ] CMS integration (Strapi, Contentful)
- [ ] A/B testing for copy
- [ ] Content versioning
- [ ] Admin panel for editing
- [ ] GraphQL integration
- [ ] Real-time updates
- [ ] Content preview

---

## 📚 Related Files

- `/src/data/content.js` - Main content file
- `/src/data/productsData.js` - Product specifications
- `/src/components/Compare/icons.jsx` - Icon components

---

## 🤝 Contributing

When adding new content:

1. Follow existing naming conventions
2. Add JSDoc comments
3. Group logically by section
4. Update this README
5. Test all affected components

---

## 💬 Support

For questions about the content system:
- Email: raed.div@gmail.com
- GitHub: [@Raed-div](https://github.com/Raed-div)

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Maintained by:** Raed
