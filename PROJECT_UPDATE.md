# Headphones Website - Tech Specs Update

## التحديثات الجديدة

تم تحويل المشروع بنجاح لاستخدام React Router DOM وإضافة صفحة المواصفات التقنية (Tech Specs).

### البنية الجديدة للمشروع

```
src/
├── pages/
│   ├── Home.jsx           # الصفحة الرئيسية (تحتوي على جميع المكونات الأصلية)
│   └── TechSpecs.jsx      # صفحة المواصفات التقنية
├── components/
│   ├── Navbar/
│   │   ├── Header.jsx     # تم تحديثه لاستخدام React Router Link
│   │   ├── HeroSection.jsx
│   │   ├── HeroContent.jsx
│   │   └── MobileMenu.jsx # تم تحديثه لاستخدام React Router Link
│   ├── ColorPicker/
│   ├── AudioCard/
│   ├── HorizontalGallery/
│   ├── DreamlikeSound/
│   └── Footer/
├── hooks/
├── assets/
├── App.js                 # تم تحديثه لاستخدام React Router
└── index.js
```

### الميزات الجديدة

#### 1. React Router DOM
- تم تحويل المشروع بالكامل لاستخدام React Router DOM v7
- إضافة نظام توجيه (Routing) للتنقل بين الصفحات
- روابط تفاعلية في القائمة الرئيسية والقائمة المحمولة

#### 2. صفحة المواصفات التقنية (Tech Specs)
صفحة شاملة تتضمن:
- **Audio Technology** - تقنيات الصوت المتقدمة
- **Intelligence** - الميزات الذكية
- **Power** - معلومات البطارية والشحن
- **Controls** - طرق التحكم
- **Built For The Elements** - مقاومة الطقس
- **Battery** - تفاصيل البطارية
- **Connectivity** - خيارات الاتصال
- **Materials** - المواد المستخدمة
- **Sustainability** - الاستدامة البيئية

#### 3. تصميم متجاوب
- تصميم يتكيف مع جميع أحجام الشاشات
- عرض المواصفات بشكل منظم وسهل القراءة
- نظام ألوان متناسق مع باقي الموقع

#### 4. اختيار الألوان
- إمكانية اختيار لون السماعات (Beige, Olive, Burgundy)
- تفاعل سلس عند التبديل بين الألوان

### كيفية التشغيل

```bash
# تثبيت الحزم
npm install

# تشغيل المشروع في وضع التطوير
npm start

# بناء المشروع للإنتاج
npm run build
```

### الصفحات المتاحة

1. **الصفحة الرئيسية** - `/`
   - Hero Section
   - Color Picker
   - Audio Card
   - Horizontal Gallery
   - Dreamlike Sound
   - Footer

2. **صفحة المواصفات التقنية** - `/tech-specs`
   - عرض شامل للمواصفات التقنية
   - صورة المنتج مع اختيار الألوان
   - جميع التفاصيل الفنية

### التقنيات المستخدمة

- React 19.2.3
- React Router DOM 7.11.0
- Tailwind CSS 3.4.19
- GSAP 3.14.2 (للأنميشن)

### ملاحظات

- جميع روابط التنقل تعمل بشكل صحيح
- التنقل متاح من Header في الشاشات الكبيرة
- التنقل متاح من Mobile Menu في الشاشات الصغيرة
- التصميم يحافظ على نفس الأسلوب البصري للموقع
