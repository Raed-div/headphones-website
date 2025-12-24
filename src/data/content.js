/**
 * Website Content Management
 * 
 * This file contains all static content for the website.
 * Easy to modify, translate, or connect to an API in the future.
 * 
 * @author Raed (@Raed-div)
 * @version 1.0.0
 */

// ==========================================
// SITE CONFIGURATION
// ==========================================

export const siteConfig = {
  name: "Resonance",
  tagline: "Premium Audio Experience",
  domain: "resonance.com",
  email: "info@resonance.com",
  phone: "+1 (555) 123-4567",
  address: "123 Audio Street, Sound City, SC 12345",
  
  // Social Media
  social: {
    twitter: "https://twitter.com/resonance",
    facebook: "https://facebook.com/resonance",
    instagram: "https://instagram.com/resonance",
    youtube: "https://youtube.com/@resonance"
  },

  // SEO Meta
  meta: {
    title: "Resonance - Premium Headphones",
    description: "Experience premium audio quality with Resonance headphones. Studio-grade acoustics, adaptive noise cancellation, and stunning design.",
    keywords: "headphones, premium audio, noise cancellation, wireless headphones, spatial audio"
  }
};

// ==========================================
// HOME PAGE CONTENT
// ==========================================

export const homePageContent = {
  // Hero Section
  hero: {
    title: "Resonance",
    subtitle: "Aura Pro II",
    description: "Premium audio experience that moves you"
  },

  // Color Picker Section
  colorPicker: {
    title: "Your Style. Your Sound.",
    subtitle: "Studio-grade acoustics that dissolve distractions and awaken clarity.",
    bottomText: "Choose a color that fits your flow.",
    colors: {
      beige: {
        name: "Beige",
        hex: "#D4A84B",
        description: "Classic and timeless"
      },
      olive: {
        name: "Olive",
        hex: "#9AA26D",
        description: "Nature-inspired elegance"
      },
      burgundy: {
        name: "Burgundy",
        hex: "#8B4B4B",
        description: "Bold and sophisticated"
      }
    }
  },

  // Audio Card Section
  audioCard: {
    title: "Immersive Sound",
    description: "Experience audio like never before with our advanced sound technology.",
    features: [
      "360° Spatial Audio",
      "Adaptive Noise Cancellation",
      "Hi-Res Audio Certified"
    ]
  }
};

// ==========================================
// TECH SPECS PAGE CONTENT
// ==========================================

export const techSpecsContent = {
  pageTitle: "Technical Specifications",
  pageDescription: "Detailed specifications for Aura Pro II",

  // Product Colors
  colors: {
    beige: { name: "Beige", hex: "#D4A84B" },
    olive: { name: "Olive", hex: "#9AA26D" },
    burgundy: { name: "Burgundy", hex: "#8B4B4B" }
  },

  // Specifications Categories
  categories: {
    audioTechnology: {
      title: "Audio Technology",
      specs: [
        {
          label: "Speaker type",
          value: "40mm neodymium drivers with custom-tuned DSP"
        },
        {
          label: "Frequency range",
          value: "5Hz - 40kHz (Hi-Res certified)"
        },
        {
          label: "Active Noise Cancellation",
          value: "Adaptive ANC up to 45dB reduction"
        },
        {
          label: "Transparency mode",
          value: "3-level adjustable ambient sound"
        }
      ]
    },

    intelligence: {
      title: "Intelligence",
      specs: [
        {
          label: "Spatial audio",
          value: "360° spatial with head tracking"
        },
        {
          label: "Smart features",
          value: "Auto play/pause, voice assistant integration"
        },
        {
          label: "Wear detection",
          value: "Automatic pause when removed"
        },
        {
          label: "Multipoint pairing",
          value: "Connect up to 3 devices simultaneously"
        }
      ]
    },

    power: {
      title: "Power",
      specs: [
        {
          label: "Battery life (ANC on)",
          value: "Up to 30 hours"
        },
        {
          label: "Quick charge",
          value: "5 min charge = 3 hours playback"
        },
        {
          label: "Charging port",
          value: "USB-C with fast charging support"
        }
      ]
    },

    controls: {
      title: "Controls",
      specs: [
        {
          label: "Touch controls",
          value: "Tap, swipe, and hold gestures"
        },
        {
          label: "Physical buttons",
          value: "Power, ANC toggle, volume rocker"
        },
        {
          label: "Voice assistant",
          value: "Wake word or button activation"
        }
      ]
    },

    elements: {
      title: "Built For The Elements",
      specs: [
        {
          label: "Weather resistance",
          value: "IPX4 splash and sweat resistant"
        },
        {
          label: "Temperature range",
          value: "-10°C to 45°C operating range"
        }
      ]
    },

    battery: {
      title: "Battery",
      specs: [
        {
          label: "Cell type",
          value: "Lithium-ion rechargeable (950mAh)"
        },
        {
          label: "Charge cycles",
          value: "500+ full cycles to 80% capacity"
        },
        {
          label: "Standby time",
          value: "Up to 200 hours"
        },
        {
          label: "Battery indicator",
          value: "LED and app display with percentage"
        }
      ]
    },

    connectivity: {
      title: "Connectivity",
      specs: [
        {
          label: "Bluetooth version",
          value: "5.3 with LE Audio"
        },
        {
          label: "Codecs",
          value: "LDAC, aptX Adaptive, AAC, SBC"
        },
        {
          label: "Range",
          value: "Up to 30m (line of sight)"
        },
        {
          label: "Wired option",
          value: "3.5mm aux cable (included)"
        }
      ]
    },

    materials: {
      title: "Materials",
      specs: [
        {
          label: "Headband",
          value: "Aluminum alloy with soft-touch coating"
        },
        {
          label: "Ear cushions",
          value: "Memory foam with premium vegan leather"
        },
        {
          label: "Weight",
          value: "250g (lightweight design)"
        },
        {
          label: "Sustainability",
          value: "45% recycled materials, carbon neutral shipping"
        }
      ]
    },

    sustainability: {
      title: "Sustainability & Materials",
      specs: [
        {
          label: "Eco-friendly packaging",
          value: "100% recyclable materials"
        },
        {
          label: "Replaceable parts",
          value: "Ear cushions, cables, and headband padding"
        },
        {
          label: "Certifications",
          value: "FSC, Energy Star, RoHS compliant"
        },
        {
          label: "Product lifespan",
          value: "5+ years with proper care"
        }
      ]
    }
  },

  // Bottom CTA
  cta: {
    title: "Sound. Presence. Purpose.",
    description: "Crafted for those who demand excellence in every detail. Experience audio that moves you, technology that understands you, and design that inspires you.",
    buttons: [
      { text: "Buy Now", type: "primary" },
      { text: "Learn More", type: "secondary" }
    ]
  }
};

// ==========================================
// COMPARE PAGE CONTENT
// ==========================================

export const comparePageContent = {
  title: "Compare Resonance Models",
  subtitle: "Get help choosing. Chat with a Specialist.",

  // Products to compare
  products: {
    auraPro: {
      id: "aura-pro-ii",
      name: "Aura Pro II",
      price: "$320",
      type: "Over-ear headphones",
      description: "Premium over-ear headphones with studio-quality sound"
    },
    flowII: {
      id: "flow-ii",
      name: "Flow II",
      price: "$160",
      type: "In-ear headphones",
      description: "Compact wireless earbuds with powerful features"
    }
  },

  // Feature labels for comparison
  featureLabels: {
    chip: "Chip",
    anc: "Active Noise Cancellation",
    spatialAudio: "Personalized Spatial Audio",
    losslessAudio: "Lossless Audio",
    hearingProtection: "Hearing Test and Hearing Protection",
    touchSensor: "Touch sensor",
    battery: "Battery Life",
    waterResistance: "Water resistant",
    microphones: "Microphones"
  }
};

// ==========================================
// FOOTER CONTENT
// ==========================================

export const footerContent = {
  tagline: {
    title: "Sound. Presence. Purpose.",
    description: [
      "Focused on crafting immersive audio experiences.",
      "We believe sound should not just be heard—it should move you."
    ]
  },

  products: [
    { name: "Aura Pro II", link: "/tech-specs" },
    { name: "Flow II", link: "/tech-specs" }
  ],

  links: {
    shop: [
      { name: "All Products", link: "#" },
      { name: "Accessories", link: "#" },
      { name: "Gift Cards", link: "#" }
    ],
    support: [
      { name: "Help Center", link: "#" },
      { name: "Warranty", link: "#" },
      { name: "Contact Us", link: "#" }
    ],
    company: [
      { name: "About Us", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Press", link: "#" }
    ]
  },

  social: [
    { name: "Discord", icon: "discord", link: "#" },
    { name: "X (Twitter)", icon: "x", link: "#" },
    { name: "Meta", icon: "meta", link: "#" }
  ],

  copyright: {
    year: new Date().getFullYear(),
    text: "Resonance. All rights reserved.",
    author: "Raed",
    authorLink: "https://github.com/Raed-div"
  },

  legal: [
    { name: "Privacy Policy", link: "#" },
    { name: "Terms of Service", link: "#" },
    { name: "Cookie Policy", link: "#" }
  ]
};

// ==========================================
// NAVIGATION CONTENT
// ==========================================

export const navigationContent = {
  logo: {
    text: "Resonance",
    link: "/"
  },

  menuItems: [
    { name: "Home", path: "/", exact: true },
    { name: "Tech Specs", path: "/tech-specs" },
    { name: "Compare", path: "/compare" }
  ],

  cta: {
    text: "Compare",
    path: "/compare"
  }
};

// ==========================================
// GENERAL UI TEXT
// ==========================================

export const uiText = {
  buttons: {
    buyNow: "Buy Now",
    learnMore: "Learn More",
    viewSpecs: "View Specs",
    compare: "Compare",
    backToTop: "Back to Top",
    close: "Close",
    menu: "Menu"
  },

  placeholders: {
    search: "Search products...",
    email: "Enter your email",
    message: "Your message..."
  },

  messages: {
    loading: "Loading...",
    error: "Something went wrong. Please try again.",
    success: "Success!",
    comingSoon: "Coming Soon",
    unavailable: "None"
  },

  pricing: {
    startingAt: "Starting at",
    from: "From",
    msrp: "MSRP"
  }
};

// ==========================================
// API ENDPOINTS (for future use)
// ==========================================

export const apiEndpoints = {
  products: "/api/products",
  specifications: "/api/specifications",
  compare: "/api/compare",
  contact: "/api/contact",
  newsletter: "/api/newsletter"
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get content by key path
 * Example: getContent('homePageContent.hero.title')
 */
export const getContent = (path, defaultValue = '') => {
  const keys = path.split('.');
  let result = { 
    siteConfig, 
    homePageContent, 
    techSpecsContent, 
    comparePageContent, 
    footerContent,
    navigationContent,
    uiText 
  };

  for (const key of keys) {
    if (result[key] === undefined) return defaultValue;
    result = result[key];
  }

  return result;
};

/**
 * Format price
 */
export const formatPrice = (price) => {
  if (typeof price === 'number') {
    return `$${price}`;
  }
  return price;
};

/**
 * Get current year for copyright
 */
export const getCurrentYear = () => new Date().getFullYear();

// Export all content as default
export default {
  siteConfig,
  homePageContent,
  techSpecsContent,
  comparePageContent,
  footerContent,
  navigationContent,
  uiText,
  apiEndpoints
};
