# Premium Foam & Sofa Showroom Website

A modern, fast, and fully responsive digital catalogue website for a **Foam and Sofa Dealership**. Built with React, Vite, Lucide Icons, and Vanilla CSS.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready static bundle in the `dist/` directory.

---

## ⚙️ Configuration (One File for Everything)

To change your business name, contact number, address, or WhatsApp details, edit only:

📂 **`src/config/business.js`**

```javascript
export const business = {
  name: "YOUR BUSINESS NAME",
  tagline: "Comfort. Quality. Made for Your Home.",
  phone: "YOUR PHONE NUMBER",
  whatsapp: "919999999999", // Country code + number without spaces or '+'
  email: "youremail@example.com",
  address: "YOUR SHOWROOM ADDRESS",
  city: "YOUR CITY",
  state: "YOUR STATE",
  pincode: "YOUR PINCODE",
  mapEmbedUrl: "", // Paste Google Maps embed link here
  businessHours: {
    weekdays: "Monday – Saturday: 10:00 AM – 8:00 PM",
    sunday: "Sunday: 11:00 AM – 6:00 PM",
  },
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};
```

---

## 🛋️ Managing Products & Catalogue

To add, edit, or remove products, edit:

📂 **`src/data/products.js`**

Each product item follows this simple format:
```javascript
{
  id: "sofa-unique-id",
  name: "Product Name",
  category: "sofas", // sofas | sofa-sets | sofa-beds | foam | cushions | custom
  subcategory: "3 Seater Sofa",
  shortDescription: "Brief overview for card",
  description: "Detailed description for product page",
  images: ["/images/sofas/your-photo.jpg"],
  colors: ["Beige", "Grey", "Brown"],
  specifications: {
    "Seating": "3 Seater",
    "Frame": "Hardwood",
    "Foam": "High-Density 32D"
  },
  features: [
    "High-density foam cushions",
    "Solid frame construction"
  ],
  featured: true // true to display on home page
}
```

---

## 🖼️ Image Folder Structure

Place your photographs directly inside the corresponding folders in `public/images/`:

```text
public/
└── images/
    ├── logo/         <- Your showroom logo
    ├── hero/         <- Hero banners
    ├── sofas/        <- 3-seater, 5-seater, corner sofas
    ├── sofa-sets/    <- 3+1+1, 3+2 living room suites
    ├── sofa-beds/    <- Sofa cum beds
    ├── foam/         <- Furniture foam, mattress foam sheets
    ├── cushions/     <- Cushion fillings and designs
    ├── custom/       <- Custom fabrication photos
    └── gallery/      <- Showroom photos & completed projects
```

> **Note:** The website has an automatic placeholder and fallback system. If an image file isn't uploaded yet, it renders a clean showroom placeholder with no broken image icons.

---

## 📱 Features Included

- **Sticky Navbar**: With mobile hamburger drawer and direct WhatsApp CTA.
- **Home Page**: Hero banner, value propositions, 6 featured products, category highlights, and custom order consultation.
- **Product Catalogue (`/products`)**: Live category filters, instant keyword search, and item count.
- **Product Details (`/products/:id`)**: High-res image gallery, specifications table, features list, colour tags, and one-click WhatsApp quotation button pre-filled with product name.
- **About Us (`/about`)**: Company overview, business specifications, and reasons to choose us.
- **Showroom Gallery (`/gallery`)**: Masonry grid with category filter and keyboard-accessible Lightbox modal (Esc / Left / Right arrows).
- **Contact Us (`/contact`)**: Showroom address, telephone dialer, WhatsApp direct link, Google Maps directions button, and embed placeholder.
- **Floating WhatsApp Button**: Persistent bottom-right button with helpful tooltip.
- **404 Not Found Page**: Clean fallback for non-existent routes.
- **Responsive & Accessible**: Seamlessly adapts from desktop monitors to tablets and mobile screens.
