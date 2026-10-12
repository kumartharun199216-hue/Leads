# Frontend Development Specification
## Business 11: Daily Needs Marts & Superettes
### Project: Neighborhood Mini-Mart Fast Order App

---

## 1. Executive Technical Overview

- **Target Business Model:** Neighborhood Mini-Marts, Superettes, Self-Service Convenience Stores, Express FMCG Marts, Daily Needs Superstores, Apartment Complex Convenience Stores.
- **Frontend Architecture:** Mobile-First Single Page Application (SPA) / Progressive Web App (PWA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for high-velocity FMCG product grids, quick-scan visual category icons, fast search dropdowns, and fluid offcanvas cart drawers.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `globals.css`) utilizing CSS Custom Properties for fresh superette emerald green, high-energy impulse coral/orange, crisp ice-blue (chilled dairy & beverages), clean pantry white cards, and high-contrast slate typography.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Offcanvas/Modal/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide independent mini-mart and superette owners with an agile, high-conversion digital fast-order app that directly competes with quick-commerce giants (Blinkit, Zepto, Swiggy Instamart). The application showcases how modern web technology empowers local convenience stores to digitize 600+ packaged FMCG SKUs (Dairy, Fresh Milk, Cold Beverages, Ice Creams, Chocolates, Instant Noodles, Biscuits, Chips, Personal Care, Household Cleaners), featuring an instant autocomplete product search, quick brand filters, inline quantity steppers (`- 1 +`), a **Sticky Floating Cart**, a **1-Click WhatsApp Order Compiler**, and a **Live Order History & Receipt Logger** (`MART-2026-XXXX`).

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial mini-mart and superette operational challenges into specific, interactive UI features:

| Superette Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High-Margin Impulse & Snacking Sales Lost to Dark Stores** | Customers default to delivery apps for quick cravings (late-night cold drinks, chips, ice creams) because local marts lack digital storefronts. | **Hyperlocal 15–20 Minute Delivery Guarantee Banner** and high-prominence **"Cold Drinks, Ice Creams & Munchies" Express Aisles** with 1-click ordering. |
| **Friction in Finding Specific Packaged FMCG Brands** | Customers get overwhelmed scrolling through hundreds of products to find a specific biscuit (e.g., Hide & Seek vs Good Day) or drink. | **Real-Time Autocomplete Search Engine** and **Brand Slider (Amul, Britannia, Cadbury, Coke, Lay's, Maggi)** with instant category filtering. |
| **High Abandonment Due to Mandatory Logins & App Downloads** | Customers refuse to download a heavy mobile app or register OTP passwords just to order milk and bread. | **Zero-Friction Web PWA Architecture (< 120KB initial load)** with instantaneous guest ordering directly via WhatsApp without signup hurdles. |
| **Inaccurate Cash Counter Re-Typing & WhatsApp Slips** | Shopkeepers waste precious counter time manually reading messy customer WhatsApp text messages and typing them into billing computers. | **Structured 1-Click WhatsApp Message Compiler & Digital Receipt Logger** outputting an itemized, priced order slip with exact SKU quantities and totals. |
| **Stock Uncertainty & "Warm Beverage" Customer Complaints** | Customers hesitate to order cold drinks and dairy unless guaranteed that items are chilled and in stock. | **Live Cold Chain & Stock Badges** (`🧊 100% Chilled Guarantee`, `✓ In Stock - 8 Left`) displayed directly on product cards. |

---

## 3. Design System & Visual Tokens

The user interface must feel vibrant, energetic, hygienic, modern, and lightning-fast. **Avoid dull corporatized greys or slow transitions.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Fresh Superette Emerald */
  --color-primary-950: #022c22;
  --color-primary-900: #064e3b;
  --color-primary-800: #065f46;
  --color-primary-700: #047857;
  --color-primary-600: #059669; /* Dominant Mart Emerald */
  --color-primary-500: #10b981;
  --color-primary-200: #a7f3d0;
  --color-primary-100: #d1fae5;
  --color-primary-50:  #ecfdf5;

  /* Brand Secondary: Impulse Coral / Snack Orange */
  --color-accent-700:  #c2410c;
  --color-accent-600:  #ea580c;
  --color-accent-500:  #f97316; /* Energy Coral */
  --color-accent-200:  #fed7aa;
  --color-accent-100:  #ffedd5;
  --color-accent-50:   #fff7ed;

  /* Chilled Beverage & Dairy Ice Blue */
  --color-cold-700:    #0369a1;
  --color-cold-600:    #0284c7;
  --color-cold-500:    #0ea5e9;
  --color-cold-100:    #e0f2fe;
  --color-cold-50:     #f0f9ff;

  /* WhatsApp Direct Ordering */
  --color-whatsapp:    #25d366;
  --color-whatsapp-dark:#128c7e;

  /* Surface, Slate & Neutral Scale */
  --color-surface-bg:   #f8fafc; /* Crisp Supermarket White */
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Savings & Promotion Badges */
  --color-offer-badge:  #e11d48; /* Crimson discount tag */
  --color-chilled-badge:#0284c7; /* Ice blue tag */

  /* Elevation & Shadows */
  --card-shadow:        0 2px 8px -1px rgba(15, 23, 42, 0.06), 0 1px 4px -1px rgba(15, 23, 42, 0.04);
  --card-shadow-hover:  0 12px 20px -3px rgba(5, 150, 105, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  --bottom-bar-shadow:  0 -4px 20px rgba(15, 23, 42, 0.12);

  /* Radius Tokens */
  --radius-sm:          6px;
  --radius-md:          12px;
  --radius-lg:          18px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold). Modern, punchy, and supermarket-crisp.
- **Body & Product Descriptions:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High clarity on small mobile displays.
- **Pricing, SKU Quantities & Timer:** Monospaced tabular numerals (`font-variant-numeric: tabular-nums; font-weight: 700`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Packaged FMCG products, dairy pouches, cold beverage cans, biscuit rolls, mart storefront)
│   └── icons/  (ShoppingBag, Zap, Search, Clock, ShieldCheck, Heart, WhatsApp, Phone, Sliders, RefreshCw)
├── components/
├── common/
│   ├── Navbar.jsx (Bootstrap container-fluid + Locality picker + Instant Cart counter)
│   ├── ExpressDeliveryBanner.jsx (15-20 min delivery ticker + Free delivery threshold)
│   ├── SearchAutocomplete.jsx (Real-time product & brand search with thumbnail previews)
│   ├── Footer.jsx (Store location, delivery zones, opening hours, contact details)
│   └── WhatsAppFloatButton.jsx
├── home/
│   ├── HeroPromoSlider.jsx (Flash deals: Cold beverages, snacking combos, breakfast essentials)
│   ├── SuperetteMetricsBar.jsx (15-20 min delivery, 650+ SKUs, chilled guarantee counters)
│   ├── ProblemComparisonGrid.jsx (Counter Queue Chaos vs FreshChoice Mini-Mart App)
│   ├── BrandSlider.jsx (Amul, Britannia, Cadbury, Coca-Cola, Lay's, Maggi logo chips)
│   ├── CuratedAislesSection.jsx (Quick-order combos: Evening Tea & Snacks, Late-Night Munchies)
│   ├── TestimonialsGrid.jsx (Apartment residents & verified Google reviews)
│   └── FaqAccordion.jsx (Bootstrap accordion component)
├── catalog/
│   ├── CategoryPillsBar.jsx (Horizontal scrollable category tabs with active count)
│   ├── ProductGrid.jsx (2-Column high-density mobile grid)
│   ├── ProductCard.jsx (Image, discount badge, chilled indicator, inline - 1 + stepper)
│   └── QuickViewModal.jsx (Detailed nutritional info, ingredients, pack sizes)
├── cart/
│   ├── StickyCartBottomBar.jsx (Persistent mobile bottom bar showing item count & bill total)
│   ├── CartOffcanvasDrawer.jsx (Bootstrap offcanvas order drawer)
│   ├── CartItemRow.jsx (Pack size, unit price, inline quantity stepper, delete)
│   ├── CheckoutAddressForm.jsx (Apartment/House No, Floor, Street, Phone)
│   └── WhatsAppOrderCompiler.jsx (Formats order into WhatsApp URL-encoded text)
├── orders/
│   ├── OrderReceiptModal.jsx (Simulated printed supermarket receipt: MART-2026-XXXX)
│   └── LiveOrderTrackerDrawer.jsx (Simulated order stages: Order Received ➔ Packed ➔ Out for Delivery)
├── context/
│   ├── CartContext.jsx (Manages cart state, quantities, discounts, minimum order validation)
│   └── ProductContext.jsx (Manages FMCG product catalog, search queries, active category filters)
├── data/
│   ├── mockCategories.js
│   ├── mockProducts.js
│   ├── mockBrands.js
│   ├── mockOrders.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Cart bounce, search dropdown slide, badge pop)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Mobile-First Header & Express Delivery Banner
- **Top Express Delivery Banner:**
  - Background: `var(--color-primary-700)`. Text: `#ffffff`.
  - Content: `"⚡ 15–20 MINUTE EXPRESS DELIVERY • Free Delivery on Orders above ₹199 • Store Open till 11:30 PM"`.
  - Icon: Lightning bolt icon with pulsating animation.
- **Main Header Bar:**
  - Glassmorphic clean white surface (`background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px)`).
  - **Left Element:** Modern Superette Logo (Shopping basket with fresh leaf motif), Brand Name (**"FreshChoice Daily Needs Mart & Superette"**), and Sub-text with neighborhood locality: `"📍 Collectorate Road, Near RTC Bus Stand, Kadapa"`.
  - **Right Elements:**
    - Live Delivery Status Chip: `"🟢 Delivering Now • 18 mins"`.
    - Order History Button (`Receipt icon: "My Orders"`).
    - Floating Cart Pill with emerald badge (`🛒 4 Items • ₹342`).
- **Interactive Autocomplete Search Bar (Pinned Below Header):**
  - Search Input: `"Search 650+ Daily Needs (e.g., Amul Milk, Thums Up, Maggi, Lays, Butter, Bread)..."`.
  - **Real-Time Autocomplete Dropdown:**
    - Triggers after 1 character.
    - Displays thumbnail image, brand name, pack weight, price, and a direct `"+ ADD"` button right inside the search results.

---

### 5.2 Section 1: Hero Promotional Slider & Flash Offers
- **Layout:** High-velocity responsive mobile banner carousel.
- **Slide 1 - Beat the Heat Chilled Beverages & Ice Creams:**
  - Headline: *"100% Chilled Cold Drinks & Premium Ice Creams Delivered in 15 Minutes!"*.
  - Subhead: *"Coke, Thums Up, Amul Ice Creams, Red Bull, Cold Coffee — Kept in deep freezers till dispatch."*
  - Badge: `🧊 Chilled Guarantee • Save up to 15%`.
- **Slide 2 - Evening Snacks & Chai-Time Combos:**
  - Headline: *"Tea-Time Essentials at Wholesale Prices"*.
  - Subhead: *"Parle-G, Good Day, Maggi, Kurkure, Lays & Haldiram's Namkeen — Bundle offers available."*
  - Badge: `🍪 Buy 2 Get 5% Off`.
- **Slide 3 - Daily Fresh Morning Essentials:**
  - Headline: *"Fresh Milk, Curd, Bread & Eggs at Your Doorstep by 6:30 AM"*.
  - Subhead: *"Heritage, Amul, Modern Bread, Farm Fresh Eggs. Pre-order before 11:00 PM."*

---

### 5.3 Section 2: Superette Operational Metrics Strip
A modern mint and emerald horizontal metrics strip built with Bootstrap row/col:
1. `15–20 Mins` Average Doorstep Delivery Time
2. `650+` Popular Packaged FMCG Brands & SKUs in Stock
3. `100% Chilled` Cold Storage & Deep Freezer Guarantee
4. `₹0 Delivery` Free Express Delivery on Orders Above ₹199

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Counter Queue vs. FreshChoice Mini-Mart App"
A comparative problem-solver interactive matrix showcasing why shoppers choose the app:

| Traditional Counter Hassle | The FreshChoice Mini-Mart App | Interactive Demo Component |
| :--- | :--- | :--- |
| Waiting in long billing queues at the cash counter during peak evening hours | Browse 650+ items and order from home in 60 seconds with instant WhatsApp dispatch | Fast FMCG Catalog Grid |
| Forgetting to buy essential items until you reach home | Curated Aisles (Tea Time, Late Night Snacks, Breakfast) reminding you of daily essentials | Curated Aisles & Combos |
| Cold drinks and ice creams melt or get warm during traditional delivery | Chilled insulated packaging ensuring cold drinks and ice creams arrive frozen | Cold Chain Assurance Badges |
| Complicated checkout forms asking for credit card numbers and passwords | 1-Click WhatsApp Order with Cash on Delivery or PhonePe/GPay on delivery | 1-Click WhatsApp Compiler |

---

### 5.5 Section 4: Fast FMCG Category Navigation & 2-Column Mobile Catalog
The heart of the fast-ordering experience:
- **Category Filter Tabs (Horizontal Touch-Swipe Bar):**
  `All FMCG (18)` | `Dairy, Milk & Curd` | `Cold Drinks & Juices` | `Chips & Munchies` | `Instant Noodles & Pasta` | `Biscuits & Bakery` | `Chocolates & Sweets` | `Personal Hygiene` | `Home & Kitchen Cleaners`
- **2-Column Mobile Card Layout (`col-6 col-md-4 col-lg-3`):**
  Each product card features:
  1. Crisp, high-contrast packaged SKU visual.
  2. Badge in top corner (e.g., `Save ₹10`, `🧊 Chilled`, `Bestseller`).
  3. Brand Name (e.g., `Amul`, `Nestle`, `Coca-Cola`, `Lay's`).
  4. Product Title & Pack Size (e.g., *"Thums Up Charged (750ml Pet Bottle)"*).
  5. Price Display: Current price in bold (`₹42`) with crossed-out MRP (`₹45`).
  6. **Interactive Quantity Stepper (`- 1 +`):**
     - Default state: Emerald `"+ ADD"` button.
     - Active state: Transforms into an inline green stepper (`- [ Qty ] +`) with dynamic instant cart recalculation.
- **8 Core Featured Mini-Mart SKUs (Realistic Demo Catalog):**
  1. **Amul Taaza Homogenised Toned Milk (500ml Pouch):** Fresh daily pasteurized milk. `₹28` (MRP: `₹29`).
  2. **Thums Up Charged Strong Taste (750ml Chilled Bottle):** Kept in sub-zero cooler. `₹40` (MRP: `₹45`).
  3. **Lay's India's Magic Masala Potato Chips (50g):** Classic spicy ridges chips. `₹20` (MRP: `₹20`).
  4. **Maggi 2-Minute Masala Instant Noodles (4-Pack, 280g):** India's favorite snack. `₹56` (MRP: `₹60`).
  5. **Britannia Good Day Cashew & Butter Cookies (200g):** Rich crunchy cookies. `₹38` (MRP: `₹45`).
  6. **Cadbury Dairy Milk Silk Chocolate Bar (60g):** Melt-in-mouth smooth milk chocolate. `₹80` (MRP: `₹85`).
  7. **Kwality Wall's Cornetto Double Chocolate Cone (105ml):** Crispy wafer cone with Belgian chocolate. `₹50` (MRP: `₹55`).
  8. **Vim Dishwash Gel Lemon (250ml Bottle):** Powerful grease cutting formulation. `₹58` (MRP: `₹65`).

---

### 5.6 Section 5: Brand Showcase & Curated Aisles
- **Brand Logo Strip:**
  Interactive logo chips for instant brand filtering: `Amul` | `Britannia` | `Nestle` | `Coca-Cola` | `Lay's` | `Parle` | `Cadbury` | `HUL`.
- **Curated Aisles (Quick Combo Packs):**
  1. **Evening Chai Combo:** Britannia Good Day (200g) + Wagh Bakri Tea (250g) + Sugar (1kg) = `₹199` (Save ₹25).
  2. **Midnight Binge Box:** 2x Maggi (4-Pack) + 2x Thums Up (750ml) + 2x Lay's Magic Masala = `₹245` (Save ₹35).

---

### 5.7 Section 6: Sticky Floating Cart & 1-Click WhatsApp Order Compiler
- **Sticky Bottom Action Bar on Mobile:**
  - Persistently visible at the bottom of the viewport whenever `cart.itemsCount > 0`.
  - Left: Item count and total bill: `4 Items | ₹342` (with a small `"⚡ 15-Min Delivery"` tag).
  - Right: High-contrast emerald button: `"View Cart & Order ➔"`.
- **Bootstrap Offcanvas Cart Drawer:**
  - Slides up from the bottom on mobile (or from the right on desktop).
  - **Cart Line Items:** Thumbnail, title, pack size, unit price, inline stepper (`- [ Qty ] +`), and delete icon.
  - **Bill Summary Card:**
    - Items Subtotal: `₹342`
    - Express Delivery Fee: `FREE` (Orders above ₹199)
    - Total Amount Payable: `₹342`
    - *Savings Banner:* `"🎉 You saved ₹38 on this order compared to MRP!"`
  - **Customer Delivery Details Form:**
    - Full Name (e.g., `P. Sandeep Kumar`).
    - Contact Phone / WhatsApp Number.
    - Delivery Address (House / Flat No, Apartment Name, Street, Landmark e.g., `Flat 402, Green Meadows Apts, Near Aravinda School`).
    - Payment Mode: `Cash on Delivery (COD)`, `UPI on Delivery (Scan QR)`, `PhonePe / GPay`.
  - **Primary Action: "1-Click Order via WhatsApp":**
    - Clicking compiles all items into an orderly structured WhatsApp message and opens `https://wa.me/919848044992?text=...`.
    - **Compiled WhatsApp Message Format:**
      ```
      🛒 *NEW ORDER - FRESHCHOICE MINI-MART & SUPERETTE*
      Order ID: #MART-9241
      Time: 05-Oct-2026, 04:30 PM

      👤 *Customer:* P. Sandeep Kumar
      📞 *Phone:* +91 98480 66551
      📍 *Delivery Address:* Flat 402, Green Meadows Apts, Near Aravinda School
      💳 *Payment Method:* UPI on Delivery (Scan QR)

      📦 *Order Items:*
      1. Amul Taaza Toned Milk (500ml) x 2 = ₹56
      2. Thums Up Chilled (750ml) x 2 = ₹80
      3. Maggi 2-Min Noodles 4-Pack (280g) x 1 = ₹56
      4. Cadbury Dairy Milk Silk (60g) x 1 = ₹80
      5. Lay's Magic Masala (50g) x 2 = ₹40
      6. Kwality Wall's Cornetto (105ml) x 1 = ₹50

      -----------------------------------
      💰 *Total Amount:* ₹362
      🚚 *Delivery:* FREE (15-20 Min Express)
      🧊 *Cold Storage Note:* Chilled beverages packed cold.

      Please confirm and dispatch right away! 🙏
      ```

---

### 5.8 Section 7: Live Order History & Receipt Logger (`MART-2026-XXXX`)
- Allows the customer or store manager to view recent orders saved in client `localStorage`.
- Displays an interactive **Supermarket Thermal Receipt Simulator**:
  - Store Header: `FRESHCHOICE DAILY NEEDS MART • TAX INVOICE`.
  - Order Token: `#MART-9241`.
  - Itemized table with quantities, prices, and GST breakup.
  - Button to `"Print Receipt"` or `"Re-Order Same Basket with 1-Click"`.

---

### 5.9 Section 8: Simulated Barcode / Quick SKU Scanner Preview
- A progressive retail demo widget simulating an in-store price checker:
  - Button: `"📷 Scan Barcode at Store"`.
  - Simulates camera scanning a barcode (e.g., `8901030383792` - Maggi Noodles).
  - Instantly pops up the product card with discount price and `"Add to Cart"` action.

---

### 5.10 Section 9: Customer Reviews & Apartment Community Trust
- **Header:** `"Loved by Over 3,200 Residents Across 18 Apartment Complexes"`.
- 3 Verified Local Customer Reviews:
  - *"Whenever guests arrive unexpectedly, I order cold drinks and namkeen on FreshChoice. The boy delivers chilled bottles within 15 minutes. Super convenient!"* — V. Sravani, Green Meadows Apts.
  - *"Much faster than Blinkit or Swiggy because the store is right in our neighborhood. No surge pricing, no rotten packets, and milk is always fresh."* — M. Rajesh, NGO Colony.
- Trust Highlights: `100% Genuine Branded FMCG` | `Strict Expiry Date Checks` | `Insulated Chilled Delivery Bags`.

---

### 5.11 Section 10: Comprehensive Mini-Mart FAQs Accordion
Interactive Bootstrap accordion answering convenience shopping questions:
1. *What is the minimum order value for free 15-minute express delivery?*
2. *Are cold drinks, juices, and ice creams guaranteed to arrive chilled?*
3. *What delivery hours does FreshChoice Mini-Mart operate?*
4. *Can I pay via PhonePe, Google Pay, or Paytm when the delivery boy arrives?*
5. *Can I order fresh daily milk and bread early in the morning?*
6. *What if an ordered item is out of stock or needs a brand replacement?*

---

### 5.12 Section 11: Store Location, Express Delivery Zones & Contact Footer
- **Delivery Radius Map:**
  - Visual circle showing 2.5 km express delivery radius covering local residential colonies and apartment clusters.
- Store Operational Timings: `Open 7 Days: 6:30 AM to 11:30 PM`.
- Direct Store WhatsApp order link, phone dialer (`+91 98480 44992`), and physical store address.
- Developer Prototype Notice: Fictional demonstration portal built with modern web technologies.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockCategories.js`
```javascript
export const mockCategories = [
  { id: "all", name: "All FMCG", icon: "ShoppingBag", count: 18 },
  { id: "dairy", name: "Dairy & Fresh Milk", icon: "Droplet", count: 6 },
  { id: "cold-drinks", name: "Cold Drinks & Juices", icon: "Coffee", count: 8 },
  { id: "snacks", name: "Chips & Munchies", icon: "Zap", count: 12 },
  { id: "instant-food", name: "Instant Noodles & Pasta", icon: "Flame", count: 6 },
  { id: "biscuits", name: "Biscuits & Bakery", icon: "Cookie", count: 8 },
  { id: "chocolates", name: "Chocolates & Ice Creams", icon: "Heart", count: 8 },
  { id: "home-care", name: "Cleaning & Hygiene", icon: "Shield", count: 6 }
];
```

### 6.2 `mockProducts.js`
```javascript
export const mockProducts = [
  {
    id: "fmcg-milk-amul-500",
    name: "Amul Taaza Homogenised Toned Milk",
    brand: "Amul",
    category: "dairy",
    packSize: "500 ml Pouch",
    price: 28,
    mrp: 29,
    badge: "Daily Fresh",
    image: "/assets/images/products/amul-milk.jpg",
    chilled: true,
    inStock: true,
    stockCount: 24,
    featured: true
  },
  {
    id: "fmcg-drink-thumsup-750",
    name: "Thums Up Charged Strong Taste (Chilled)",
    brand: "Coca-Cola",
    category: "cold-drinks",
    packSize: "750 ml Pet Bottle",
    price: 40,
    mrp: 45,
    badge: "🧊 Chilled",
    image: "/assets/images/products/thumsup-750.jpg",
    chilled: true,
    inStock: true,
    stockCount: 18,
    featured: true
  },
  {
    id: "fmcg-chips-lays-magic",
    name: "Lay's India's Magic Masala Potato Chips",
    brand: "Lay's",
    category: "snacks",
    packSize: "50 g Pack",
    price: 20,
    mrp: 20,
    badge: "Bestseller",
    image: "/assets/images/products/lays-magic.jpg",
    chilled: false,
    inStock: true,
    stockCount: 30,
    featured: true
  },
  {
    id: "fmcg-noodle-maggi-4p",
    name: "Maggi 2-Minute Masala Noodles (4-Pack)",
    brand: "Nestle",
    category: "instant-food",
    packSize: "280 g (4 in 1)",
    price: 56,
    mrp: 60,
    badge: "Save ₹4",
    image: "/assets/images/products/maggi-4pack.jpg",
    chilled: false,
    inStock: true,
    stockCount: 15,
    featured: true
  },
  {
    id: "fmcg-biscuit-goodday-200",
    name: "Britannia Good Day Cashew Cookies",
    brand: "Britannia",
    category: "biscuits",
    packSize: "200 g Roll",
    price: 38,
    mrp: 45,
    badge: "Tea-Time Favorite",
    image: "/assets/images/products/goodday-cashew.jpg",
    chilled: false,
    inStock: true,
    stockCount: 22,
    featured: true
  },
  {
    id: "fmcg-choc-silk-60",
    name: "Cadbury Dairy Milk Silk Chocolate Bar",
    brand: "Cadbury",
    category: "chocolates",
    packSize: "60 g Bar",
    price: 80,
    mrp: 85,
    badge: "Pure Indulgence",
    image: "/assets/images/products/cadbury-silk.jpg",
    chilled: true,
    inStock: true,
    stockCount: 12,
    featured: true
  },
  {
    id: "fmcg-ice-cornetto-105",
    name: "Kwality Wall's Cornetto Double Chocolate Cone",
    brand: "Kwality Wall's",
    category: "chocolates",
    packSize: "105 ml Cone",
    price: 50,
    mrp: 55,
    badge: "🧊 Frozen Deep Freezer",
    image: "/assets/images/products/cornetto-choco.jpg",
    chilled: true,
    inStock: true,
    stockCount: 14,
    featured: true
  },
  {
    id: "fmcg-clean-vim-250",
    name: "Vim Dishwash Liquid Gel with Lemon",
    brand: "Vim",
    category: "home-care",
    packSize: "250 ml Bottle",
    price: 58,
    mrp: 65,
    badge: "Kitchen Care",
    image: "/assets/images/products/vim-gel.jpg",
    chilled: false,
    inStock: true,
    stockCount: 20,
    featured: false
  }
];
```

### 6.3 `mockBrands.js`
```javascript
export const mockBrands = [
  { id: "amul", name: "Amul", logo: "/assets/images/brands/amul.png" },
  { id: "britannia", name: "Britannia", logo: "/assets/images/brands/britannia.png" },
  { id: "nestle", name: "Nestle", logo: "/assets/images/brands/nestle.png" },
  { id: "coke", name: "Coca-Cola", logo: "/assets/images/brands/coca-cola.png" },
  { id: "lays", name: "Lay's", logo: "/assets/images/brands/lays.png" },
  { id: "cadbury", name: "Cadbury", logo: "/assets/images/brands/cadbury.png" },
  { id: "parle", name: "Parle", logo: "/assets/images/brands/parle.png" }
];
```

### 6.4 `mockOrders.js`
```javascript
export const mockOrders = [
  {
    orderId: "MART-9241",
    timestamp: "05-Oct-2026, 04:30 PM",
    customerName: "P. Sandeep Kumar",
    phone: "9848066551",
    address: "Flat 402, Green Meadows Apts",
    items: [
      { name: "Amul Taaza Milk (500ml)", qty: 2, price: 56 },
      { name: "Thums Up Chilled (750ml)", qty: 2, price: 80 },
      { name: "Maggi 2-Min Noodles (4-Pack)", qty: 1, price: 56 },
      { name: "Cadbury Dairy Milk Silk (60g)", qty: 1, price: 80 }
    ],
    subtotal: 272,
    deliveryFee: 0,
    total: 272,
    paymentMode: "UPI on Delivery",
    status: "Delivered"
  }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Fast Autocomplete Dropdown Animation:**
   - Dropdown slides down instantly with a subtle fade: `opacity: 0, transform: translateY(-8px)` to `opacity: 1, transform: translateY(0)` in `0.15s`.
2. **Interactive Stepper Bounce:**
   - On clicking `"+ ADD"`, button morphs into `- [ 1 ] +` with a spring scale bounce (`scale: 1.06` to `1.0`).
3. **Cart Floating Pill Elevation:**
   - Bottom floating cart bar features a gentle pulse glow when an item is added, drawing immediate eye focus to the total and delivery status.
4. **Thermal Receipt Simulator Print Effect:**
   - Modal displays receipt sliding out with a simulated paper receipt feed animation (`transform: translateY(-20px)` to `translateY(0)`).
5. **Cold Chain Badge Shimmer:**
   - Chilled badges (`🧊 Chilled`) feature a gentle icy blue gradient shimmer keyframe to highlight deep freeze storage.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 92% of mini-mart snacking and grocery orders occur on mobile screens:
- **High-Density 2-Column Mobile Grid:**
  Cards render 2-per-row (`col-6`) with compact padding (`p-2`) ensuring maximum product exposure without excessive vertical scrolling.
- **Large Touch Targets:**
  All buttons, inline stepper plus/minus controls, and category swipe pills must have a minimum interactive tap target of `48px x 48px`.
- **Horizontal Swipeable Category & Brand Bars:**
  Both category pills and brand chips must support effortless touch-swipe with CSS scroll-snap (`scroll-snap-type: x mandatory`).
- **Safe Area Insets:**
  Sticky bottom cart bar must include `padding-bottom: env(safe-area-inset-bottom, 12px)` for seamless iPhone and Android gesture navigation.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for superette emerald, impulse coral, and chilled ice-blue in `globals.css`.
- [ ] Implement Top Express Delivery Banner (`15-20 Min Express Delivery • Free on ₹199+`) and Header with locality selector.
- [ ] Build Real-Time Autocomplete Search Bar with instant product and brand dropdown suggestions.
- [ ] Build Hero Promotional Slider showcasing flash beverage deals, tea-time combos, and chilled essentials.
- [ ] Build Horizontal Category Swipe Bar and High-Density 2-Column Mobile Product Grid (`ProductCard.jsx`).
- [ ] Implement Inline Quantity Stepper (`- 1 +`) with live React state updates.
- [ ] Build Brand Logo Slider (Amul, Britannia, Nestle, Coke, Lay's, Cadbury) with 1-click brand filtering.
- [ ] Build Sticky Mobile Bottom Cart Bar showing item count, bill total, and "View Cart" CTA.
- [ ] Build Bootstrap Offcanvas Cart Drawer with bill summary and customer address form.
- [ ] Implement 1-Click WhatsApp Order Compiler formatting structured message and opening `wa.me` URL.
- [ ] Build Order History & Thermal Receipt Simulator (`MART-2026-XXXX`).
- [ ] Build Simulated Barcode / SKU Quick Scanner preview widget.
- [ ] Implement FAQ Accordion and Footer with express delivery zones map and shop timings.
- [ ] Validate responsive layouts on Mobile (360px - 412px Android), Tablet (768px), and Desktop (1280px+).
