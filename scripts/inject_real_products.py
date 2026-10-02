import json

real_products = [
  {
    "id": "grand-horizon-u-sectional",
    "name": "The Grand Horizon U-Shape Sectional & Cocktail Ottoman",
    "category": "sofas",
    "subcategory": "Sectional Sets",
    "shortDescription": "Expansive U-shaped statement sectional in slate velvet with vertical fluted channels and gold stiletto legs.",
    "description": "Designed for grand living rooms, the Grand Horizon U-Shape Sectional offers generous seating for the entire family. Features precision vertical fluted channels across the entire backrest, dual chaise lounging wings, mirror-finish electroplated gold stiletto legs, and a matching custom upholstered cocktail ottoman.",
    "images": ["/images/real_work/sofa-u-sectional-slate.jpg"],
    "colors": ["Smoke Slate Velvet", "Charcoal Grey", "Champagne Gold", "Royal Navy"],
    "price": "₹78,500",
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
    "featured": True
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
    "colors": ["Almond Cream Leather", "Camel Tan", "Mocha Brown", "Onyx Black"],
    "price": "₹94,000",
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
    "featured": True
  },
  {
    "id": "royal-fluted-ivory-sectional",
    "name": "Royal Fluted Ivory L-Sectional & Velvet Coffee Table",
    "category": "sofas",
    "subcategory": "Curved Sectionals",
    "shortDescription": "Ivory velvet corner sectional with signature vertical fluted channels and gold diamond crest accents.",
    "description": "An exquisite blend of classical art-deco glamour and modern comfort. Features tailored vertical channel tufting, diamond gold crest emblems on the side armrests, slender gold stiletto feet, and a custom matching velvet coffee table with glass top.",
    "images": ["/images/real_work/sofa-fluted-ivory-l.jpg"],
    "colors": ["Ivory Cream Velvet", "Dusty Rose", "Sage Green", "Royal Blue"],
    "price": "₹56,000",
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
    "featured": True
  },
  {
    "id": "sovereign-grey-suede-sectional",
    "name": "Sovereign Pearl Grey Suede Modular L-Sectional",
    "category": "sofas",
    "subcategory": "Sectional Sets",
    "shortDescription": "Deep-seated luxury sectional in pearl grey suede with segmented headrests and gold block pedestals.",
    "description": "Clean lines and immense comfort define the Sovereign sectional. Styled with segmented lumbar support cushions, low-profile gold block feet, and deep seat pans ideal for lounging and movie nights.",
    "images": ["/images/real_work/sofa-executive-grey-l.jpg"],
    "colors": ["Pearl Grey Suede", "Slate Navy", "Sandstone Beige"],
    "price": "₹58,500",
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
    "featured": True
  },
  {
    "id": "royal-navy-pinchpleat-drapes",
    "name": "Royal Navy & Cream Double-Layer Pinch-Pleat Drapery",
    "category": "curtains",
    "subcategory": "Pleated Velvet Curtains",
    "shortDescription": "Heavy textured navy jacquard blackout curtains with satin tiebacks and soft linen inner sheers.",
    "description": "Elevate your bedroom or living room windows with hotel-grade luxury. Features a dual-track system pairing rich navy jacquard blackout drapes with delicate white linen inner sheers, finished with tailored cream satin tiebacks.",
    "images": ["/images/real_work/curtains-navy-pinchpleat.jpg"],
    "colors": ["Navy Jacquard + Sheer", "Emerald Green + Sheer", "Champagne Gold + Sheer"],
    "price": "From ₹1,450 / panel",
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
    "featured": True
  },
  {
    "id": "champagne-metallic-pelmet-drapes",
    "name": "Champagne Metallic Drapes with Custom Padded Pelmet",
    "category": "curtains",
    "subcategory": "Wave-Fold Sheers",
    "shortDescription": "Custom fluted fabric pelmet valance box with shimmering champagne blackout drapes and ripple sheers.",
    "description": "Conceal ugly curtain rods and ceiling tracks behind a beautifully upholstered fabric pelmet box. Styled with vertical channel-stitched champagne fabric matching the rich blackout side drapery and ripple-fold linen sheers.",
    "images": ["/images/real_work/curtains-champagne-pelmet.jpg"],
    "colors": ["Champagne Gold", "Warm Silver Grey", "Almond Cream"],
    "price": "From ₹1,650 / panel",
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
    "featured": True
  },
  {
    "id": "bespoke-illuminated-halo-wall",
    "name": "Bespoke Backlit Halo Feature Wall & Designer Headboard",
    "category": "interiors",
    "subcategory": "Full Room Styling",
    "shortDescription": "Circular botanical accent wall medallion with 360-degree LED halo glow and leatherette 3-panel headboard.",
    "description": "Transform your bedroom into a luxury boutique hotel sanctuary. Features a monumental circular acoustic wall element covered in designer floral textile, enveloped in seamless 3000K warm LED backlight, anchored by a caramel leatherette segmented headboard.",
    "images": ["/images/real_work/interior-bedroom-illuminated-halo.jpg"],
    "colors": ["Floral Tapestry with Warm Gold LED", "Geometric Charcoal", "Textured Cream"],
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
    "featured": True
  },
  {
    "id": "master-orthopedic-bed-suite",
    "name": "Master Orthopedic Suite with Fluted Mirror Wall & Bedding",
    "category": "mattresses",
    "subcategory": "7-Zone Orthopedic Latex",
    "shortDescription": "Deep quilted 7-zone orthopedic mattress, leather cushioned headboard, and fluted dressing mirror with LED backlight.",
    "description": "A comprehensive turnkey bedroom experience. Includes a custom-built 7-zone orthopedic mattress with cooling bamboo quilt, paired with rich caramel headboard, fluted oak dressing mirror wall with concealed ambient backlight, and blackout drapes.",
    "images": ["/images/real_work/mattress-luxury-master-suite.jpg"],
    "colors": ["Pristine Quilted Bamboo", "Caramel Leather Headboard"],
    "price": "₹34,500",
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
    "featured": True
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
    "colors": ["Natural Warm Oak + Sage Green Leather", "Smoked Walnut + Cognac Leather"],
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
    "featured": True
  },
  {
    "id": "grand-living-hall-drapery-interiors",
    "name": "Grand Hall Triple-Window Drapery & Medallion Wall",
    "category": "interiors",
    "subcategory": "Full Room Styling",
    "shortDescription": "Triple window custom pelmet drapery styling paired with circular teak wall medallion and LED shelf.",
    "description": "Turnkey window and architectural wall dressing for expansive living rooms and villas. Coordinates three large window bays with custom padded pelmet boxes, translucent sheer linen drapes, and an illuminated teak circle feature wall.",
    "images": ["/images/real_work/interior-living-hall-drapery.jpg"],
    "colors": ["Champagne Linen & Teak Wood", "Silver Grey & Walnut"],
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
    "featured": True
  }
]

# Read products.js
pfile = r'c:\Users\mites\.gemini\antigravity-ide\scratch\sofa-showroom\src\data\products.js'
with open(pfile, 'r', encoding='utf-8') as f:
    text = f.read()

# Insert before 'export const products = ['
split_marker = 'export const products = ['
idx = text.find(split_marker)
if idx != -1:
    header = text[:idx + len(split_marker)]
    rest = text[idx + len(split_marker):]
    
    # Format real_products as JS objects
    real_js = json.dumps(real_products, indent=2)
    # remove outermost [ and ]
    real_js_inner = real_js.strip()[1:-1].strip() + ',\n'
    
    new_text = header + '\n' + real_js_inner + rest
    with open(pfile, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Updated products.js successfully!')
else:
    print('Marker not found!')
