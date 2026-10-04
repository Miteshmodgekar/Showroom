// ============================================================
// BUSINESS CONFIGURATION
// Edit this file to update your business information.
// All pages use these values — you only need to change them here.
// ============================================================

export const business = {
  name: "CozyCorner Interiors",
  logo: "/images/logo/cozycorner-logo.png",
  tagline: "Bespoke Sofas, Designer Curtains, Orthopedic Mattresses & Full Home Interiors",
  phone: "+91 7090334427",
  whatsapp: "917090334427", // Include country code without + (e.g., 919876543210 for India)
  email: "youremail@example.com",
  address: "YOUR FULL ADDRESS",
  city: "Belagavi",
  state: "Karnataka",
  pincode: "YOUR PINCODE",
  mapEmbedUrl: "", // Paste your Google Maps embed URL here
  businessHours: {
    weekdays: "Monday – Saturday: 10:00 AM – 8:30 PM",
    sunday: "Sunday: 11:00 AM – 6:00 PM",
  },
  description:
    "Welcome to CozyCorner Interiors. We design and craft bespoke living room sofas, wave-fold motorized curtains, certified orthopedic mattresses, fluted acoustic wall paneling, and tailored interior furnishings.",
  social: {
    instagram: "https://www.instagram.com/cozy_corner26326?stkn=aGZhMDRzeTZ3OXBm",
    facebook: "",  // e.g., "https://facebook.com/yourbusiness"
    youtube: "",   // e.g., "https://youtube.com/@yourbusiness"
  },
};

// Helper to sanitize any phone/WhatsApp input into strict digits with country code
export function cleanWhatsAppNumber(num) {
  if (!num) return "";
  // Strip all non-digit characters: spaces, +, -, (, ), etc.
  let cleaned = String(num).trim().replace(/\D/g, "");

  // If user entered with leading 0 (e.g. 09876543210 -> 11 digits starting with 0)
  if (cleaned.length === 11 && cleaned.startsWith("0")) {
    cleaned = "91" + cleaned.slice(1);
  }
  // If user entered standard 10-digit Indian mobile number without country code
  else if (cleaned.length === 10) {
    cleaned = "91" + cleaned;
  }

  return cleaned;
}

// Get the latest live business info from localStorage or defaults
export function getLatestBusinessInfo() {
  if (typeof window !== 'undefined') {
    try {
      const savedV3 = localStorage.getItem('cozycorner_business_v3');
      if (savedV3) {
        const parsed = JSON.parse(savedV3);
        const merged = { ...business, ...parsed };

        // business.js values ALWAYS win for critical fields if they are real (non-placeholder)
        if (business.whatsapp && business.whatsapp !== '919999999999') {
          merged.whatsapp = business.whatsapp;
        }
        if (business.phone && business.phone !== 'YOUR PHONE NUMBER') {
          merged.phone = business.phone;
        }
        if (business.social?.instagram) {
          merged.social = { ...(merged.social || {}), instagram: business.social.instagram };
        }
        return merged;
      }

      const savedOld = localStorage.getItem('cozycorner_business');
      if (savedOld) {
        const parsedOld = JSON.parse(savedOld);
        const mergedOld = { ...business, ...parsedOld };

        // business.js values ALWAYS win for critical fields if they are real (non-placeholder)
        if (business.whatsapp && business.whatsapp !== '919999999999') {
          mergedOld.whatsapp = business.whatsapp;
        }
        if (business.phone && business.phone !== 'YOUR PHONE NUMBER') {
          mergedOld.phone = business.phone;
        }
        if (business.social?.instagram) {
          mergedOld.social = { ...(mergedOld.social || {}), instagram: business.social.instagram };
        }
        return mergedOld;
      }
    } catch (e) {
      console.warn('Error reading business info from localStorage', e);
    }
  }
  return business;
}

// WhatsApp URL generator
export function getWhatsAppLink(message = "", customNumber = null) {
  let targetNumber = customNumber;
  if (!targetNumber) {
    const liveInfo = getLatestBusinessInfo();
    targetNumber = liveInfo.whatsapp;
  }

  // Clean and sanitize the phone number
  const sanitized = cleanWhatsAppNumber(targetNumber) || cleanWhatsAppNumber(business.whatsapp);

  const defaultMsg =
    "Hi, I found your website and would like to know more about your products.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://api.whatsapp.com/send/?phone=${sanitized}&text=${encoded}`;
}

// Dynamic click handler for all WhatsApp buttons
export function openWhatsApp(message = "", customNumber = null, e = null) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  const url = getWhatsAppLink(message, customNumber);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return false;
}

export function getProductWhatsAppMessage(productName, price = null) {
  const priceSnippet = price ? ` (Listed at ${String(price).startsWith('₹') ? price : `₹${price}`})` : '';
  return `Hi, I am interested in the *${productName}*${priceSnippet} shown on your website. Could you please share the availability, fabric options, and delivery timeline?`;
}

export function getProductWhatsAppLink(productName, price = null) {
  return getWhatsAppLink(getProductWhatsAppMessage(productName, price));
}
