// ============================================================
// PRODUCT DATA
// Add, edit, or remove products here.
// This is the single source of truth for the product catalogue.
// ============================================================

export const categories = [
  { id: "all", label: "All Collections" },
  { id: "sofas", label: "Luxury Sofas" },
  { id: "curtains", label: "Designer Curtains & Drapes" },
  { id: "mattresses", label: "Orthopedic Mattresses" },
  { id: "interiors", label: "Wall Paneling & Interiors" },
  { id: "sofa-beds", label: "Sofa Beds" },
  { id: "foam", label: "High-Density Foam" },
  { id: "custom", label: "Bespoke Custom Works" },
];

export const subcategories = {
  sofas: ["Curved Sectionals", "3 Seater Sofas", "Chesterfield Lounges", "Corner Sets"],
  curtains: ["Wave-Fold Sheers", "Motorized Blackout Drapes", "Roman Blinds", "Pleated Velvet Curtains"],
  mattresses: ["7-Zone Orthopedic Latex", "Dual-Comfort Memory Foam", "Pocket Spring Hotel Mattress"],
  interiors: ["Fluted Wall Paneling", "Acoustic Bed Headboards", "Custom Media Consoles", "Full Room Styling"],
  "sofa-sets": ["3+2 Sofa Set", "3+1+1 Sofa Set", "Sectional Sets"],
  "sofa-beds": ["Sofa Cum Bed", "Foldable Sofa Beds"],
  foam: ["Furniture Foam", "Mattress Foam", "Cushion Foam"],
  cushions: ["Back Cushions", "Seat Cushions", "Decorative Cushions"],
  custom: ["Custom Sofas", "Custom Curtains", "Custom Mattresses", "Turnkey Interiors"],
};

// Replace image paths with your actual product images.
// Place images in: public/images/<category>/<filename>.jpg
// Use a relative path from /public, e.g. "/images/sofas/sofa-01.jpg"

export const products = [
{
    "id": "grand-horizon-u-sectional",
    "name": "The Grand Horizon U-Shape Sectional & Cocktail Ottoman",
    "category": "sofas",
    "subcategory": "Sectional Sets",
    "shortDescription": "Expansive U-shaped statement sectional in slate velvet with vertical fluted channels and gold stiletto legs.",
    "description": "Designed for grand living rooms, the Grand Horizon U-Shape Sectional offers generous seating for the entire family. Features precision vertical fluted channels across the entire backrest, dual chaise lounging wings, mirror-finish electroplated gold stiletto legs, and a matching custom upholstered cocktail ottoman.",
    "images": [
      "/images/real_work/sofa-u-sectional-slate.jpg"
    ],
    "colors": [
      "Smoke Slate Velvet",
      "Charcoal Grey",
      "Champagne Gold",
      "Royal Navy"
    ],
    "price": "\u20b978,500",
    "rating": 5.0,
    "reviewsCount": 48,
    "specifications": {
      "Configuration": "Full U-Shape with Dual Chaise Lounges",
      "Frame": "Kiln-Dried Solid Sal Wood with 10-Yr Guarantee",
      "Foam": "40D High-Resilience Virgin Foam + Polyfill Wrap",
      "Fabric": "Heavy GSM Matte Stain-Resistant Velvet",
      "Legs": "Electroplated Titanium Gold Alloy Stiletto Legs",
      "Dimensions": "12 ft (Width) x 8 ft (Left Chaise) x 5.5 ft (Right Chaise)"
    },
    "features": [
      "Complete U-Shape layout with dual lounging chaises",
      "Matching upholstered cocktail table / ottoman included",
      "High-density 40D anti-sagging cushion core with 7-year warranty",
      "Reinforced solid hardwood internal structure",
      "Choice of 50+ designer fabric swatches at your doorstep"
    ],
    "featured": true
  },
  {
    "id": "milano-italian-leather-suite",
    "name": "Milano Executive Italian Leather Living Suite & Recliner",
    "category": "sofas",
    "subcategory": "3+2 Sofa Set",
    "shortDescription": "Master living suite in almond Italian top-grain leather with ergonomic ratcheted headrests and swivel recliner.",
    "description": "Contemporary European luxury for the modern penthouse. Upholstered in buttery soft Italian top-grain leather with tailored French seam detailing. Includes an adjustable multi-position ratchet headrest system, 3-seater sofa, 2-seater loveseat, and an executive high-back swivel recliner.",
    "images": [
      "/images/real_work/lounge-milano-leather-suite.jpg",
      "/images/real_work/lounge-loveseat-detail.jpg",
      "/images/real_work/interior-living-room-suite-alt.jpg"
    ],
    "colors": [
      "Almond Cream Leather",
      "Camel Tan",
      "Mocha Brown",
      "Onyx Black"
    ],
    "price": "\u20b994,000",
    "rating": 5.0,
    "reviewsCount": 53,
    "specifications": {
      "Configuration": "3-Seater + 2-Seater Loveseat + Swivel Recliner",
      "Upholstery": "100% Genuine Italian Top-Grain Leather",
      "Headrests": "German Engineered Multi-Stage Ratchet Mechanism",
      "Cushioning": "45D High-Resilience Polyurethane with Microfiber Wrap",
      "Recliner": "360-Degree Swivel Base with Zero-Gravity Recline"
    },
    "features": [
      "Multi-position adjustable headrests for personalized neck support",
      "Executive single swivel recliner included in set",
      "Handcrafted double-needle stitch detailing",
      "Breathable, easy-to-clean leather that patinas beautifully with age"
    ],
    "featured": true
  },
  {
    "id": "royal-fluted-ivory-sectional",
    "name": "Royal Fluted Ivory L-Sectional & Velvet Coffee Table",
    "category": "sofas",
    "subcategory": "Curved Sectionals",
    "shortDescription": "Ivory velvet corner sectional with signature vertical fluted channels and gold diamond crest accents.",
    "description": "An exquisite blend of classical art-deco glamour and modern comfort. Features tailored vertical channel tufting, diamond gold crest emblems on the side armrests, slender gold stiletto feet, and a custom matching velvet coffee table with glass top.",
    "images": [
      "/images/real_work/sofa-fluted-ivory-l.jpg"
    ],
    "colors": [
      "Ivory Cream Velvet",
      "Dusty Rose",
      "Sage Green",
      "Royal Blue"
    ],
    "price": "\u20b956,000",
    "rating": 4.9,
    "reviewsCount": 39,
    "specifications": {
      "Dimensions": "9 ft x 6.5 ft L-Shape Corner",
      "Foam": "38D High-Elasticity Core with Feather-Soft Touch",
      "Fabric": "Hydrophobic Stain-Resistant Italian Velvet",
      "Table": "Matching Padded Velvet Table with Toughened Glass Top",
      "Accents": "Diamond Cut Gold Plated Crest Emblems"
    },
    "features": [
      "Art-deco diamond gold jewelry accents on armrests",
      "Ergonomically contoured fluted backrest for spinal support",
      "Matching glass-topped velvet coffee table included",
      "Easy-to-clean stain-shielded velvet"
    ],
    "featured": true
  },
  {
    "id": "sovereign-grey-suede-sectional",
    "name": "Sovereign Pearl Grey Suede Modular L-Sectional",
    "category": "sofas",
    "subcategory": "Sectional Sets",
    "shortDescription": "Deep-seated luxury sectional in pearl grey suede with segmented headrests and gold block pedestals.",
    "description": "Clean lines and immense comfort define the Sovereign sectional. Styled with segmented lumbar support cushions, low-profile gold block feet, and deep seat pans ideal for lounging and movie nights.",
    "images": [
      "/images/real_work/sofa-executive-grey-l.jpg"
    ],
    "colors": [
      "Pearl Grey Suede",
      "Slate Navy",
      "Sandstone Beige"
    ],
    "price": "\u20b958,500",
    "rating": 4.9,
    "reviewsCount": 34,
    "specifications": {
      "Dimensions": "10 ft x 6 ft L-Sectional",
      "Foam": "40D Dual-Layer Cushioning with Sinuous Spring Core",
      "Fabric": "Heavy-GSM Breathable Suede Fabric",
      "Base": "Brushed Gold Block Pedestals"
    },
    "features": [
      "Segmented ergonomic backrest cushions with neck rolls",
      "Ultra-wide seat depth for effortless lounging",
      "Heavy-duty serpentine steel spring suspension",
      "High abrasion-tested suede for long life"
    ],
    "featured": true
  },
  {
    "id": "royal-navy-pinchpleat-drapes",
    "name": "Royal Navy & Cream Double-Layer Pinch-Pleat Drapery",
    "category": "curtains",
    "subcategory": "Pleated Velvet Curtains",
    "shortDescription": "Heavy textured navy jacquard blackout curtains with satin tiebacks and soft linen inner sheers.",
    "description": "Elevate your bedroom or living room windows with hotel-grade luxury. Features a dual-track system pairing rich navy jacquard blackout drapes with delicate white linen inner sheers, finished with tailored cream satin tiebacks.",
    "images": [
      "/images/real_work/curtains-navy-pinchpleat.jpg"
    ],
    "colors": [
      "Navy Jacquard + Sheer",
      "Emerald Green + Sheer",
      "Champagne Gold + Sheer"
    ],
    "price": "From \u20b91,450 / panel",
    "rating": 5.0,
    "reviewsCount": 42,
    "specifications": {
      "Pleat": "Triple French Pinch Pleat",
      "Material": "Textured Heavy Jacquard + Belgian Linen Sheer",
      "Light Blocking": "100% Blackout (Outer Layer)",
      "Track": "Smooth Gliding Double Track"
    },
    "features": [
      "Double layer for versatile daytime privacy and nighttime blackout",
      "Custom stitched to exact ceiling-to-floor measurements",
      "Pre-installed high quality drapery hooks",
      "Thermal barrier reduces AC cooling load"
    ],
    "featured": true
  },
  {
    "id": "champagne-metallic-pelmet-drapes",
    "name": "Champagne Metallic Drapes with Custom Padded Pelmet",
    "category": "curtains",
    "subcategory": "Wave-Fold Sheers",
    "shortDescription": "Custom fluted fabric pelmet valance box with shimmering champagne blackout drapes and ripple sheers.",
    "description": "Conceal ugly curtain rods and ceiling tracks behind a beautifully upholstered fabric pelmet box. Styled with vertical channel-stitched champagne fabric matching the rich blackout side drapery and ripple-fold linen sheers.",
    "images": [
      "/images/real_work/curtains-champagne-pelmet.jpg"
    ],
    "colors": [
      "Champagne Gold",
      "Warm Silver Grey",
      "Almond Cream"
    ],
    "price": "From \u20b91,650 / panel",
    "rating": 5.0,
    "reviewsCount": 29,
    "specifications": {
      "Pelmet": "Padded Wood & Fabric Valance Box",
      "Drapery": "High-Shine Metallic Weave Blackout",
      "Inner Layer": "Wave-Fold Translucent Sheer",
      "Installation": "Concealed Wall/Ceiling Brackets"
    },
    "features": [
      "Architectural upholstered pelmet completely hides curtain tracks",
      "Eliminates light bleed from top of the window",
      "Custom fabric matched to your interior color scheme",
      "Available in manual wand or motorized configurations"
    ],
    "featured": true
  },
  {
    "id": "bespoke-illuminated-halo-wall",
    "name": "Bespoke Backlit Halo Feature Wall & Designer Headboard",
    "category": "interiors",
    "subcategory": "Full Room Styling",
    "shortDescription": "Circular botanical accent wall medallion with 360-degree LED halo glow and leatherette 3-panel headboard.",
    "description": "Transform your bedroom into a luxury boutique hotel sanctuary. Features a monumental circular acoustic wall element covered in designer floral textile, enveloped in seamless 3000K warm LED backlight, anchored by a caramel leatherette segmented headboard.",
    "images": [
      "/images/real_work/interior-bedroom-illuminated-halo.jpg"
    ],
    "colors": [
      "Floral Tapestry with Warm Gold LED",
      "Geometric Charcoal",
      "Textured Cream"
    ],
    "price": "Turnkey Project Quote",
    "rating": 5.0,
    "reviewsCount": 31,
    "specifications": {
      "Medallion": "5.5 ft Diameter Circular Timber Frame",
      "Lighting": "CRI 90+ Dimmable Concealed LED Halo Strip",
      "Headboard": "3-Panel Padded Caramel Leatherette",
      "Bed Frame": "Reinforced Platform Frame with Storage"
    },
    "features": [
      "Stunning ambient glow eliminates the need for harsh overhead lighting",
      "Custom acoustic dampening reduces bedroom echo",
      "Crafted and fitted on-site by CozyCorner master carpenters",
      "Full bedroom furniture coordination available"
    ],
    "featured": true
  },
  {
    "id": "master-orthopedic-bed-suite",
    "name": "Master Orthopedic Suite with Fluted Mirror Wall & Bedding",
    "category": "mattresses",
    "subcategory": "7-Zone Orthopedic Latex",
    "shortDescription": "Deep quilted 7-zone orthopedic mattress, leather cushioned headboard, and fluted dressing mirror with LED backlight.",
    "description": "A comprehensive turnkey bedroom experience. Includes a custom-built 7-zone orthopedic mattress with cooling bamboo quilt, paired with rich caramel headboard, fluted oak dressing mirror wall with concealed ambient backlight, and blackout drapes.",
    "images": [
      "/images/real_work/mattress-luxury-master-suite.jpg"
    ],
    "colors": [
      "Pristine Quilted Bamboo",
      "Caramel Leather Headboard"
    ],
    "price": "\u20b934,500",
    "rating": 5.0,
    "reviewsCount": 46,
    "specifications": {
      "Mattress Core": "Zero-Disturbance Pocket Spring + 3-inch Natural Latex",
      "Height": "10 inches Deep Euro-Top",
      "Mirror": "Full-Length Beveled Mirror on Fluted Oak Backing",
      "Wall Paneling": "Warm LED Concealed Cove"
    },
    "features": [
      "Spinal alignment orthopedic certification",
      "Zero partner motion transfer for uninterrupted sleep",
      "Integrated dressing mirror with luxury hotel-style backlighting",
      "10-Year manufacturer replacement warranty on mattress core"
    ],
    "featured": true
  },
  {
    "id": "botanical-tv-media-wall",
    "name": "Botanical Living TV Wall, Fluted Oak Console & Recliner",
    "category": "interiors",
    "subcategory": "Custom Media Consoles",
    "shortDescription": "Artistic botanical accent wallpaper, floating fluted oak TV credenza, sage leather recliner, and glass bar unit.",
    "description": "A complete turnkey interior transformation. Highlights include an artistic botanical nature backdrop behind the TV screen, custom-crafted fluted oak wood entertainment credenza, illuminated glass bar crockery cabinets, Italian marble dining table, and ergonomic swivel recliner.",
    "images": [
      "/images/real_work/interior-tv-entertainment-wall.jpg",
      "/images/real_work/interior-living-dining-view.jpg"
    ],
    "colors": [
      "Natural Warm Oak + Sage Green Leather",
      "Smoked Walnut + Cognac Leather"
    ],
    "price": "Turnkey Consultation",
    "rating": 5.0,
    "reviewsCount": 28,
    "specifications": {
      "Media Console": "Custom 7 ft Fluted Oak Wood Credenza",
      "TV Backing": "Imported Seamless Botanical Accent Wallpaper",
      "Storage": "Concealed Soft-Close Cable Management Drawers",
      "Crockery": "Tinted Toughened Glass with Profile Warm LED Lights"
    },
    "features": [
      "Completely conceals all unsightly TV cords, set-top boxes, and wiring",
      "Includes dining area, entertainment unit, and lounge seating coordination",
      "Crafted with marine-grade waterproof ply and natural wood veneers",
      "3D architectural preview before project execution"
    ],
    "featured": true
  },
  {
    "id": "grand-living-hall-drapery-interiors",
    "name": "Grand Hall Triple-Window Drapery & Medallion Wall",
    "category": "interiors",
    "subcategory": "Full Room Styling",
    "shortDescription": "Triple window custom pelmet drapery styling paired with circular teak wall medallion and LED shelf.",
    "description": "Turnkey window and architectural wall dressing for expansive living rooms and villas. Coordinates three large window bays with custom padded pelmet boxes, translucent sheer linen drapes, and an illuminated teak circle feature wall.",
    "images": [
      "/images/real_work/interior-living-hall-drapery.jpg"
    ],
    "colors": [
      "Champagne Linen & Teak Wood",
      "Silver Grey & Walnut"
    ],
    "price": "Bespoke Consultation",
    "rating": 4.9,
    "reviewsCount": 22,
    "specifications": {
      "Scope": "3 Complete Window Pelmet Sets + Architectural Wood Medallion",
      "Lighting": "Integrated Concealed LED Strip with Diffuser",
      "Fabric": "Textured Heavy Jacquard + Belgian Sheer"
    },
    "features": [
      "Cohesive multi-window design for open-concept halls",
      "Custom fabricated on-site to ensure millimeter-accurate fit",
      "Dimmable architectural lighting accent",
      "Comprehensive site survey and installation included"
    ],
    "featured": true
  },

  {
    id: "royal-wave-curtains",
    name: "Royal Wave-Fold Sheer & Motorized Blackout Drapes",
    category: "curtains",
    subcategory: "Wave-Fold Sheers",
    shortDescription:
      "Floor-to-ceiling sheer linen paired with 100% thermal blackout drapery on smart motorized silent tracks.",
    description:
      "Transform your windows into architectural masterpieces. Our Royal Wave-Fold system combines airy, light-filtering Belgian sheer linen with high-insulation blackout backing. Powered by whisper-quiet motorized tracks compatible with smart home apps and remote control. Custom stitched to your exact ceiling height.",
    images: ["/images/curtains/curtains-01.jpg"],
    colors: ["Warm Champagne Sheer", "Alabaster White", "Smoked Grey", "Deep Charcoal"],
    price: "From ₹1,250 / panel",
    rating: 5.0,
    reviewsCount: 62,
    specifications: {
      Style: "S-Fold / Ripple Wave-Fold",
      Fabric: "European Sheer Linen + Thermal Blackout Layer",
      Operation: "Manual Wand or Smart Motorized Remote",
      Opacity: "Dual-Layer (100% Blackout + 40% Daytime Diffused Light)",
      Hardware: "Heavy-Duty Concealed Ceiling Recessed Track",
    },
    features: [
      "Architectural uniform S-wave pleats that never lose shape",
      "100% total room darkening & thermal heat insulation",
      "Smartphone & remote-controlled motorized integration",
      "Free in-home laser measurement & fabric sample consultation",
      "Dust-resistant & machine-washable fabrics",
    ],
    featured: true,
  },
  {
    id: "grand-orthopedic-mattress",
    name: "Grand Orthopedic 7-Zone Latex & Pocket Spring Mattress",
    category: "mattresses",
    subcategory: "7-Zone Orthopedic Latex",
    shortDescription:
      "Euro-top master mattress with natural organic latex, pocket springs, and cooling bamboo fabric.",
    description:
      "Engineered for restorative deep sleep. Combines individually encased carbon-steel pocket springs for zero partner disturbance with a 3-inch 100% natural organic Pin-core latex pillow top. Ergonomically divided into 7 distinct firmness zones to align your spine and relieve pressure points.",
    images: ["/images/mattresses/mattress-01.jpg"],
    colors: ["Quilted Organic Bamboo Cream"],
    price: "From ₹28,900",
    rating: 5.0,
    reviewsCount: 47,
    specifications: {
      Thickness: "10-inch / 12-inch Euro Top",
      Comfort: "Medium-Firm Orthopedic Spine Support",
      Core: "7-Zone Individually Pocketed Springs",
      ComfortLayer: "100% Certified Natural Latex + High-Resilience Foam",
      Cover: "Hypoallergenic Quilted Bamboo Microfiber",
    },
    features: [
      "Zero partner disturbance pocket spring core",
      "Natural latex breathable ventilation (anti-dust mite)",
      "Doctor-recommended spinal alignment zoning",
      "10-Year Sag-Free Replacement Warranty",
      "Available in King, Queen, and custom dimensions",
    ],
    featured: true,
  },
  {
    id: "fluted-acoustic-paneling",
    name: "Architectural Fluted Wall Paneling & Master Interior",
    category: "interiors",
    subcategory: "Fluted Wall Paneling",
    shortDescription:
      "Bespoke natural oak acoustic fluted wall cladding with concealed warm ambient LED lighting.",
    description:
      "Elevate your living room, media wall, or master bedroom with architectural fluted wood paneling. Crafted from precision-milled European white oak on acoustic felt backing to eliminate room echo while adding rich organic warmth. Includes custom floating credenzas and recessed dimmable warm LED channel lighting.",
    images: ["/images/interiors/interior-01.jpg"],
    colors: ["Natural European Oak", "Smoked Walnut", "Charcoal Ash", "Warm Teak"],
    price: "From ₹350 / sq ft",
    rating: 5.0,
    reviewsCount: 39,
    specifications: {
      Material: "Natural Oak / Walnut Veneer on Acoustic Substrate",
      Profile: "25mm Precision Concave & Convex Flutes",
      Lighting: "Concealed 3000K Warm Dimmable COB LED Strips",
      Application: "TV Backdrops, Master Bed Walls, Foyer Cladding",
      Installation: "Precision Aluminum Cleat Mounting",
    },
    features: [
      "Superior NRC 0.85 acoustic sound dampening",
      "Seamless invisible interlocking joint system",
      "Integrated concealed warm ambient channel lighting",
      "Custom coordinated floating TV consoles & bedside tables",
      "Turnkey on-site installation by master carpenters",
    ],
    featured: true,
  },
  {
    id: "milano-curved-boucle",
    name: "Milano Sculptural Curved Bouclé Sectional",
    category: "sofas",
    subcategory: "Corner Sofas",
    shortDescription:
      "Organic fluid curvature upholstered in tactile European cream bouclé with 45D ultra-resilience core.",
    description:
      "An architectural showpiece designed for modern sanctuaries. The Milano features sweeping organic curves hand-wrapped in tactile European cream bouclé. Supported by an engineered 45D high-resilience foam core and reinforced kiln-dried hardwood skeleton, this piece delivers cloud-like comfort without structural compromise.",
    images: ["/images/sofas/sofa-milano.jpg"],
    colors: ["Warm Ivory Bouclé", "Smoked Oat", "Alabaster White"],
    price: "₹68,500",
    rating: 5.0,
    reviewsCount: 34,
    specifications: {
      Seating: "5 to 6 Seater Curved Suite",
      "Frame Material": "Kiln-Dried European Beechwood",
      Upholstery: "Heavyweight Textured Bouclé (60k Martindale)",
      "Cushion Fill": "45D High-Resilience Virgin Core + Dacron Wrap",
      Legs: "Concealed Floor Glides",
    },
    features: [
      "Sweeping architectural organic curvature",
      "45D sag-free high-resilience foam foundation",
      "Ultra-tactile textured European bouclé weave",
      "Hand-tailored seamless joint upholstery",
      "10-Year structural frame and foam warranty",
    ],
    featured: true,
  },
  {
    id: "heritage-chesterfield",
    name: "Heritage Chesterfield Cognac Leather Lounge",
    category: "sofas",
    subcategory: "3 Seater Sofa",
    shortDescription:
      "Deep hand-tufted diamond quilting in antique cognac saddle leather with solid brass studs.",
    description:
      "The definitive symbol of refined craftsmanship. Meticulously handcrafted from top-grain pull-up leather that matures gracefully with age. Featuring hand-tied deep diamond button tufting, antiqued brass nailhead accents, and dual-density memory foam core for restorative seating.",
    images: ["/images/sofas/sofa-chesterfield.jpg"],
    colors: ["Cognac Saddle", "British Racing Tan", "Deep Espresso"],
    price: "₹59,000",
    rating: 4.9,
    reviewsCount: 41,
    specifications: {
      Seating: "3 Seater Grand Lounge",
      "Frame Material": "Seasoned Solid Teakwood",
      Upholstery: "100% Genuine Top-Grain Cognac Leather",
      "Cushion Fill": "Pocket Spring + 40D Orthopedic HR Foam",
      Legs: "Hand-Turned Dark Walnut with Castors",
    },
    features: [
      "Traditional hand-tufted deep diamond quilting",
      "Antiqued solid brass nailhead trim along arm scrolls",
      "Supple pull-up leather with authentic patina development",
      "Heavy-duty pocket-sprung comfort core",
      "Individual serial numbered showroom certification",
    ],
    featured: true,
  },
  {
    id: "cloud-modular-deep",
    name: "The Cloud Modular Deep-Seat Linen Suite",
    category: "sofas",
    subcategory: "Sectional Sets",
    shortDescription:
      "Oversized 42-inch deep seating with dual-layer goose down and 38D plush core in Belgian linen.",
    description:
      "Designed for the ultimate relaxation experience. Featuring generous 42-inch deep seating platforms layered with hypoallergenic micro-feather down over a 38D core. Wrapped in removable, pre-washed Belgian natural linen slipcovers for breezy sophistication.",
    images: ["/images/sofas/sofa-cloud.jpg"],
    colors: ["Natural Oatmeal", "Sand Drift", "Washed Charcoal"],
    price: "₹62,000",
    rating: 5.0,
    reviewsCount: 56,
    specifications: {
      Seating: "Modular 4-Piece Configurable Suite",
      "Frame Material": "Engineered Marine-Grade Plywood + Hardwood",
      Upholstery: "100% Organic Pure Belgian Linen",
      "Cushion Fill": "Feather-Down Blend + 38D Cloud Core",
      Legs: "Low-Profile Hidden Recessed Oak",
    },
    features: [
      "Ultra-deep 42-inch lounging footprint",
      "Feather-down layered cushions for genuine sinking comfort",
      "Completely removable, machine-washable slipcovers",
      "Interchangeable modular layout (corner, chaise, or straight)",
      "Zero-formaldehyde certified non-toxic padding",
    ],
    featured: true,
  },
  {
    id: "premium-3-seater",
    name: "Premium 3-Seater Sofa",
    category: "sofas",
    subcategory: "3 Seater Sofa",
    shortDescription:
      "Modern 3-seater sofa with comfortable cushioning and premium upholstery.",
    description:
      "Experience ultimate comfort with our Premium 3-Seater Sofa. Crafted with high-density foam cushioning and wrapped in premium fabric, this sofa is designed to elevate your living room. The sturdy hardwood frame ensures long-lasting durability, while the contemporary design complements any interior style.",
    images: ["/images/sofas/sofa-01.jpg"],
    colors: ["Beige", "Brown", "Grey", "Cream"],
    price: "₹24,500",
    rating: 4.9,
    reviewsCount: 48,
    specifications: {
      Seating: "3 Seater",
      "Frame Material": "Hardwood",
      Upholstery: "Premium Fabric / Leather Option Available",
      "Cushion Fill": "High-Density Foam",
      Legs: "Wooden / Metal",
    },
    features: [
      "High-density foam cushions for superior comfort",
      "Durable hardwood frame",
      "Removable and washable cushion covers",
      "Available in multiple fabric and colour options",
      "Suitable for home and office use",
    ],
    featured: true,
  },
  {
    id: "luxury-5-seater",
    name: "Luxury 5-Seater Sofa",
    category: "sofas",
    subcategory: "5 Seater Sofa",
    shortDescription:
      "Spacious 5-seater sofa perfect for large living rooms and families.",
    description:
      "The Luxury 5-Seater Sofa is the centrepiece your living room deserves. Generously sized to seat the whole family, it combines elegant design with exceptional comfort. The deep-seated cushions and wide armrests make it ideal for relaxing evenings at home.",
    images: ["/images/sofas/sofa-02.jpg"],
    colors: ["Dark Brown", "Light Grey", "Cream", "Charcoal"],
    price: "₹48,900",
    rating: 5.0,
    reviewsCount: 36,
    specifications: {
      Seating: "5 Seater",
      "Frame Material": "Solid Wood",
      Upholstery: "Premium Velvet / Fabric",
      "Cushion Fill": "High-Resilience Foam",
      Legs: "Solid Wooden",
    },
    features: [
      "Extra-deep seating for maximum comfort",
      "Elegant tufted backrest design",
      "Strong solid wood frame",
      "Available in premium fabric and velvet",
      "Ideal for large family living rooms",
    ],
    featured: true,
  },
  {
    id: "corner-sectional-sofa",
    name: "Corner Sectional Sofa",
    category: "sofas",
    subcategory: "Corner Sofas",
    shortDescription:
      "L-shaped corner sofa that maximises your living space and comfort.",
    description:
      "Make the most of your living space with our Corner Sectional Sofa. The L-shaped design fits perfectly into corners, providing ample seating without taking up excessive floor space. Plush cushioning and elegant upholstery make it a statement piece in any room.",
    images: ["/images/sofas/sofa-03.jpg"],
    colors: ["Grey", "Beige", "Cream", "Navy Blue"],
    price: "₹54,000",
    rating: 4.9,
    reviewsCount: 52,
    specifications: {
      Type: "L-Shaped / Corner",
      "Frame Material": "Hardwood",
      Upholstery: "Fabric / Leatherette",
      "Cushion Fill": "Premium Foam",
    },
    features: [
      "Space-efficient L-shaped design",
      "Modular configuration options",
      "Premium foam cushioning",
      "Sturdy wooden frame",
      "Easy to assemble",
    ],
    featured: true,
  },
  {
    id: "classic-sofa-set-3-1-1",
    name: "Classic Sofa Set (3+1+1)",
    category: "sofa-sets",
    subcategory: "3+1+1 Sofa Set",
    shortDescription:
      "Traditional 3+1+1 sofa set with coordinated design for a complete living room look.",
    description:
      "Our Classic Sofa Set includes a 3-seater sofa and two single-seater chairs, providing a complete and coordinated living room solution. The matching design ensures a cohesive look while offering flexible seating arrangements for guests and family.",
    images: ["/images/sofa-sets/set-01.jpg"],
    colors: ["Beige", "Brown", "Red", "Grey"],
    price: "₹42,000",
    rating: 4.8,
    reviewsCount: 29,
    specifications: {
      Configuration: "3 Seater + 2 Single Chairs",
      "Frame Material": "Solid Wood",
      Upholstery: "Premium Fabric",
      "Cushion Fill": "High-Density Foam",
    },
    features: [
      "Complete matching set for a coordinated look",
      "Flexible seating arrangement",
      "Includes two single-seater armchairs",
      "Comfortable high-density foam",
      "Elegant carved wooden legs",
    ],
    featured: true,
  },
  {
    id: "sofa-cum-bed",
    name: "Sofa Cum Bed",
    category: "sofa-beds",
    subcategory: "Sofa Cum Bed",
    shortDescription:
      "Versatile sofa that converts into a comfortable bed — perfect for guest rooms.",
    description:
      "Our Sofa Cum Bed is the perfect dual-purpose furniture for compact homes or guest rooms. By day, it serves as a stylish and comfortable sofa. By night, it effortlessly converts into a full-sized bed. The conversion mechanism is smooth and easy to operate.",
    images: ["/images/sofa-beds/sofa-bed-01.jpg"],
    colors: ["Grey", "Beige", "Brown", "Blue"],
    price: "₹19,800",
    rating: 4.9,
    reviewsCount: 64,
    specifications: {
      Function: "Sofa + Bed",
      Mechanism: "Fold-out / Pull-out",
      "Frame Material": "Metal + Wood",
      Upholstery: "Durable Fabric",
      "Cushion Fill": "High-Resilience Foam",
    },
    features: [
      "Converts easily between sofa and bed",
      "Smooth, sturdy conversion mechanism",
      "Comfortable sleeping surface",
      "Space-saving design",
      "Ideal for guest rooms and small apartments",
    ],
    featured: true,
  },
  {
    id: "furniture-foam-sheet",
    name: "Premium Furniture Foam",
    category: "foam",
    subcategory: "Furniture Foam",
    shortDescription:
      "High-density furniture foam available in custom sizes and densities.",
    description:
      "Our Premium Furniture Foam is the foundation of comfortable, long-lasting upholstery. Available in a range of densities and thicknesses to suit different applications — from sofa seats to chair backs. Custom cutting available to your exact specifications.",
    images: ["/images/foam/foam-01.jpg"],
    colors: ["28D Yellow", "32D Blue", "40D Green"],
    price: "From ₹850 / sheet",
    rating: 4.9,
    reviewsCount: 110,
    specifications: {
      Type: "Polyurethane Foam",
      Density: "Available in 28D, 32D, 36D, 40D",
      Thickness: "Custom sizes available",
      Application: "Sofa, Chair, Mattress",
    },
    features: [
      "Multiple density options for different comfort levels",
      "Custom cutting to your exact size",
      "Long-lasting and resilient",
      "Suitable for furniture, mattresses, and cushions",
      "Bulk orders available",
    ],
    featured: false,
  },
  {
    id: "mattress-foam",
    name: "Mattress Foam",
    category: "foam",
    subcategory: "Mattress Foam",
    shortDescription:
      "Comfortable and durable mattress foam available in multiple sizes.",
    description:
      "Our Mattress Foam is engineered for a restful, supportive sleep experience. Available in single, double, queen, and king sizes. Multiple density options ensure the right balance of support and comfort. Custom sizes available on request.",
    images: ["/images/foam/foam-02.jpg"],
    colors: ["Standard White", "Gel Blue Core"],
    price: "From ₹4,500",
    rating: 4.8,
    reviewsCount: 42,
    specifications: {
      Sizes: "Single, Double, Queen, King",
      Density: "28D to 40D available",
      Thickness: "4 inch, 5 inch, 6 inch",
      Application: "Mattress, Sleeping Surface",
    },
    features: [
      "Optimal sleep surface support",
      "Available in multiple standard sizes",
      "Custom sizes on request",
      "Breathable and durable",
      "Wholesale and retail available",
    ],
    featured: false,
  },
  {
    id: "custom-sofa-design",
    name: "Custom Sofa Design",
    category: "custom",
    subcategory: "Custom Sofas",
    shortDescription:
      "Design your perfect sofa — choose size, shape, fabric, colour, and style.",
    description:
      "Can't find exactly what you're looking for? Our Custom Sofa Design service lets you create your dream sofa. Choose your dimensions, shape, cushion type, upholstery fabric, colour, and leg style. Our craftsmen will build it to your exact specifications.",
    images: ["/images/custom/custom-01.jpg"],
    colors: ["500+ Fabrics & Leathers"],
    price: "Custom Estimate",
    rating: 5.0,
    reviewsCount: 88,
    specifications: {
      Size: "As per requirement",
      Fabric: "Customer's choice",
      Style: "Contemporary, Classic, Modern, Traditional",
      "Lead Time": "Contact us for timeline",
    },
    features: [
      "Fully customised to your requirements",
      "Wide choice of fabrics and colours",
      "Any size or shape possible",
      "Professional consultation available",
      "Home delivery and installation",
    ],
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getProductsByCategory(categoryId) {
  if (categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}
