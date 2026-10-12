import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx_helpers import (
    set_cell_background, set_cell_margins, add_header_banner,
    add_styled_heading, add_callout, add_styled_table, add_code_box, add_bullet
)

doc = docx.Document()

# Set standard 1-inch margins
for section in doc.sections:
    section.top_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.right_margin = Inches(1)

# Header Banner
add_header_banner(
    doc,
    title="KIRANA & RETAIL STORE WEB APPLICATION",
    subtitle="Developer Blueprint: Mobile Storefront, 1-Click WhatsApp Ordering & Digital Khata Ledger",
    target_info="Target Leads: Kirana & General Stores, Provisions Merchants, Daily Needs Marts | 200 Leads Pipeline"
)

add_callout(
    doc,
    title="DEMO PROTOTYPE DIRECTIVE",
    text="This specification details how to build a mobile-first Progressive Web App (PWA) tailored for neighborhood grocery stores. For client demonstrations, all grocery inventory, prices in INR (₹), and customer credit khata records are powered by realistic dummy data. No external payment gateway setup is required for the demo."
)

# 1. Executive Summary & Purpose
add_styled_heading(doc, "1. Executive Summary & Demo Objective", level=1)
p = doc.add_paragraph()
p.add_run(
    "Local Kirana and general store owners across Andhra Pradesh (Machilipatnam, Gudivada, Bhimavaram, Kadapa) are facing two existential threats: "
    "(1) Loyal neighborhood customers switching to quick-commerce delivery apps like Blinkit, Zepto, and JioMart, and "
    "(2) Manual paper notebooks ('bahi-khata') where customer credit is forgotten or disputed. "
    "Your objective is to build a fast, mobile-friendly web application that allows store owners to offer their own 30-minute WhatsApp delivery service "
    "and a digital credit ledger with automated payment reminders."
)

# 2. Frontend Architecture & UI Breakdown
add_styled_heading(doc, "2. Frontend Architecture & Page-by-Page UI Breakdown", level=1)
p2 = doc.add_paragraph()
p2.add_run("The frontend must be designed mobile-first (optimized for smartphones). It consists of 3 essential views:")

add_styled_heading(doc, "2.1 Page 1: Mobile Grocery Storefront ('/')", level=2)
add_bullet(doc, "Top Delivery Header Banner", "Branded store header (e.g. 'Sri Lakshmi Kirana & General Stores'), neighborhood location ('Machilipatnam'), and high-visibility delivery badge: '⚡ Free 30-min Delivery within 3 km on orders above ₹300'.")
add_bullet(doc, "Category Navigation Chips", "Horizontally scrollable pill bar: ['All', 'Rice & Grains', 'Dals & Pulses', 'Edible Oils', 'Spices & Masalas', 'Daily Essentials']. Tapping a category instantly filters the product grid without page reload.")
add_bullet(doc, "Product Cards Grid", "Clean 2-column mobile grid showing product image, brand/item name, pack size ('25 kg Bag', '1 Litre', '500 g'), Store Price in bold bold green ('₹1,450') alongside strikethrough MRP ('₹1,600') and 'Save ₹150' badge.")
add_bullet(doc, "Cart Interaction", "Each card has a green ['+ ADD'] button. When clicked, it transforms into an inline quantity incrementer ['- [ 1 ] +'].")
add_bullet(doc, "Sticky Bottom Cart Bar", "A floating bottom bar appearing as soon as items > 0, displaying: '🛒 3 Items | ₹1,740' and a bright green ['View Cart / Order'] button.")

add_styled_heading(doc, "2.2 Page 2: Slide-Out Cart & Checkout Modal ('/cart')", level=2)
p_cart = doc.add_paragraph()
p_cart.add_run("The checkout must require zero login friction. Keep the fields minimal:")

cart_components = [
    ["Itemized Order Review", "Lists all cart items with thumbnail, unit price, quantity incrementer, and item subtotal."],
    ["Delivery Mode Selector", "Tab toggle between '🚚 Home Delivery' (shows Address & Landmark text area) and '🏪 Self Pickup' (no address needed)."],
    ["Customer Contact Inputs", "Customer Full Name and Mobile Number (+91) required for delivery coordination."],
    ["Payment Preference", "Radio selection: '💵 Cash on Delivery (COD)' or '📲 UPI on Delivery (GooglePay / PhonePe / QR)'."],
    ["1-Click WhatsApp Order Button", "Large prominent green button with WhatsApp icon: ['📲 Place Order on WhatsApp']. Tapping this compiles the cart and opens WhatsApp directly to the store merchant's phone."]
]
add_styled_table(doc, ["Cart / Checkout Element", "Component Behavior & User Flow"], cart_components, [2.2, 4.3])

add_styled_heading(doc, "2.3 Page 3: Merchant Back-Office & Digital Khata ('/merchant')", level=2)
p_m = doc.add_paragraph()
p_m.add_run("This back-office screen proves to the merchant how easy it is to manage inventory and credit:")
add_bullet(doc, "Quick Price & Stock Toggler", "List of top 10 volatile items (Freedom Sunflower Oil, Sona Masoori Rice, Toor Dal). Merchant can toggle an item 'Out of Stock' with 1 tap or edit today's store price in 5 seconds.")
add_bullet(doc, "Digital Khata (Customer Credit Ledger)", "Displays 'Total Market Credit Due: ₹48,250'. Searchable list of neighborhood credit customers with Name, Phone, Outstanding Balance, and Last Payment Date.")
add_bullet(doc, "Overdue Status Badges", "Color-coded pills: Green (< 15 days), Amber (15-30 days), Red Alert (> 30 days overdue).")
add_bullet(doc, "WhatsApp Payment Reminder Trigger", "Each customer row has a 1-click button: ['📲 Send Reminder']. Tapping opens WhatsApp with pre-filled payment request and UPI ID.")
add_bullet(doc, "Record Payment Modal", "Quick modal allowing merchant to enter amount paid (e.g. ₹1,000 via Cash/UPI), instantly deducting from the balance.")

# 3. Backend Requirements & API Specification
add_styled_heading(doc, "3. Backend Architecture & Mock API Specification", level=1)
p_be = doc.add_paragraph()
p_be.add_run(
    "For the demo application, all endpoints can run in Next.js API Routes, Express.js, or in-memory React state with localStorage persistence. "
    "Here is the API contract for the developer:"
)

api_endpoints = [
    ["GET", "/api/kirana/store", "Returns store branding, WhatsApp number, address, and delivery policy."],
    ["GET", "/api/kirana/products?category=...", "Returns product array with price, MRP, unit, and in-stock boolean."],
    ["PATCH", "/api/kirana/products/:id", "Payload: { price, inStock }. Updates product price or stock status from merchant portal."],
    ["POST", "/api/kirana/orders", "Payload: { customerName, phone, address, items, total, paymentMode }. Logs order to state and returns Order ID."],
    ["GET", "/api/kirana/khata", "Returns array of credit customers, balances, and transaction history."],
    ["POST", "/api/kirana/khata/:id/payment", "Payload: { amount, paymentMode }. Deducts amount from customer balance and creates receipt."]
]
add_styled_table(doc, ["Method", "Endpoint Route", "Purpose & Behavior"], api_endpoints, [1.0, 2.5, 3.0])

# 4. WhatsApp Order Message Engine
add_styled_heading(doc, "4. WhatsApp Order Message Generation Engine", level=1)
p_wa = doc.add_paragraph()
p_wa.add_run(
    "The core secret of this application is turning WhatsApp into the checkout terminal. "
    "When the customer taps 'Place Order on WhatsApp', this TypeScript utility compiles the message and deep-links to WhatsApp:"
)

wa_code = """// utils/whatsappOrder.ts
export interface CartItem {
  id: string;
  name: string;
  unit: string;
  price: number;
  qty: number;
}

export function generateWhatsAppOrderUrl(
  storePhone: string,
  storeName: string,
  customerName: string,
  customerPhone: string,
  deliveryType: 'Home Delivery' | 'Self Pickup',
  deliveryAddress: string,
  paymentMode: string,
  items: CartItem[]
): string {
  const total = items.reduce((acc, it) => acc + it.price * it.qty, 0);

  let msg = `🛒 *NEW GROCERY ORDER - ${storeName.toUpperCase()}*\\n`;
  msg += `──────────────────────────\\n`;
  msg += `👤 *Customer*: ${customerName} (${customerPhone})\\n`;
  msg += `🚚 *Mode*: ${deliveryType}\\n`;
  if (deliveryType === 'Home Delivery') {
    msg += `📍 *Delivery Address*: ${deliveryAddress}\\n`;
  }
  msg += `💵 *Payment*: ${paymentMode}\\n`;
  msg += `──────────────────────────\\n`;
  msg += `*ORDER ITEMS*:\\n`;

  items.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    msg += `${index + 1}. *${item.name}* (${item.unit}) x ${item.qty} = ₹${itemTotal}\\n`;
  });

  msg += `──────────────────────────\\n`;
  msg += `💰 *TOTAL AMOUNT*: *₹${total}*\\n`;
  msg += `──────────────────────────\\n`;
  msg += `Please confirm my order and approximate delivery time. Thank you!`;

  const cleanPhone = storePhone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
}"""
add_code_box(doc, wa_code, "TypeScript: WhatsApp Order URL Generator")

# 5. Database Schema & Data Models
add_styled_heading(doc, "5. Relational Database Schema (SQL DDL)", level=1)
p_sql = doc.add_paragraph()
p_sql.add_run("Use this relational schema for SQLite, PostgreSQL, or local state data modeling:")

sql_code = """-- Store Settings
CREATE TABLE stores (
    store_id TEXT PRIMARY KEY,
    store_name TEXT NOT NULL,
    proprietor_name TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    free_delivery_min_inr REAL DEFAULT 300.0,
    upi_id TEXT NOT NULL
);

-- Product Catalog
CREATE TABLE products (
    product_id TEXT PRIMARY KEY,
    store_id TEXT REFERENCES stores(store_id),
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    unit TEXT NOT NULL,
    price_inr REAL NOT NULL,
    mrp_inr REAL NOT NULL,
    is_in_stock INTEGER DEFAULT 1,
    image_url TEXT
);

-- Khata Customers (Credit Ledger)
CREATE TABLE khata_customers (
    customer_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT,
    balance_due_inr REAL DEFAULT 0.0,
    last_payment_date TEXT,
    days_overdue INTEGER DEFAULT 0
);

-- Khata Transactions
CREATE TABLE khata_transactions (
    txn_id TEXT PRIMARY KEY,
    customer_id TEXT REFERENCES khata_customers(customer_id),
    txn_type TEXT NOT NULL, -- 'CREDIT' or 'PAYMENT'
    amount_inr REAL NOT NULL,
    payment_mode TEXT,      -- 'CASH', 'UPI'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"""
add_code_box(doc, sql_code, "SQL Schema for Kirana & Retail App")

# 6. Complete Dummy Data Fixture
add_styled_heading(doc, "6. Ready-to-Use Dummy Data Fixture (JSON)", level=1)
p_fix = doc.add_paragraph()
p_fix.add_run("Copy this exact JSON into `src/data/kirana-mock.json` to immediately populate products and khata records:")

json_fixture = """{
  "store": {
    "name": "Sri Lakshmi Kirana & General Stores",
    "owner": "G. Lakshmi Narayana",
    "whatsapp_phone": "919440123101",
    "city": "Machilipatnam",
    "district": "Krishna District",
    "address": "Opposite Clock Tower, Main Bazaar, Machilipatnam",
    "delivery_note": "⚡ Free 30-min Delivery within 3 km on orders above ₹300",
    "upi_id": "9440123101@ybl"
  },
  "categories": ["All", "Rice & Grains", "Dals & Pulses", "Edible Oils", "Spices & Masalas", "Daily Essentials"],
  "products": [
    {
      "id": "prod-01",
      "name": "Kurnool Sona Masoori Rice (Old Harvest)",
      "category": "Rice & Grains",
      "unit": "25 kg Bag",
      "price": 1450,
      "mrp": 1600,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400"
    },
    {
      "id": "prod-02",
      "name": "Premium Guntur Teja Red Chilli Powder",
      "category": "Spices & Masalas",
      "unit": "500 g",
      "price": 190,
      "mrp": 220,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400"
    },
    {
      "id": "prod-03",
      "name": "Freedom Refined Sunflower Oil",
      "category": "Edible Oils",
      "unit": "1 Litre Pouch",
      "price": 125,
      "mrp": 140,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400"
    },
    {
      "id": "prod-04",
      "name": "Unpolished Desi Toor Dal (Kandi Pappu)",
      "category": "Dals & Pulses",
      "unit": "1 kg",
      "price": 165,
      "mrp": 185,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
    },
    {
      "id": "prod-05",
      "name": "Aashirvaad Shudh Chakki Atta",
      "category": "Rice & Grains",
      "unit": "5 kg Bag",
      "price": 260,
      "mrp": 290,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
    },
    {
      "id": "prod-06",
      "name": "Pure Vijaya Cow Ghee",
      "category": "Edible Oils",
      "unit": "500 ml Tin",
      "price": 380,
      "mrp": 410,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400"
    },
    {
      "id": "prod-07",
      "name": "Tata Iodized Salt",
      "category": "Daily Essentials",
      "unit": "1 kg Packet",
      "price": 28,
      "mrp": 30,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400"
    },
    {
      "id": "prod-08",
      "name": "Bru Instant Coffee Jar",
      "category": "Daily Essentials",
      "unit": "100 g Glass Jar",
      "price": 185,
      "mrp": 210,
      "in_stock": true,
      "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400"
    }
  ],
  "khata_customers": [
    {
      "id": "kht-01",
      "name": "V. Kameswara Rao",
      "phone": "+91 94404 89787",
      "address": "Brahmin Street, Near Temple",
      "balance_due": 1850,
      "last_payment_date": "2026-09-18",
      "days_overdue": 14
    },
    {
      "id": "kht-02",
      "name": "M. Anjaneya Prasad",
      "phone": "+91 98480 78676",
      "address": "Opposite Rythu Bazaar",
      "balance_due": 620,
      "last_payment_date": "2026-09-28",
      "days_overdue": 4
    },
    {
      "id": "kht-03",
      "name": "R. Sitaramaiah",
      "phone": "+91 94407 34232",
      "address": "Kammavari Palem, House #42",
      "balance_due": 4200,
      "last_payment_date": "2026-08-30",
      "days_overdue": 33
    }
  ]
}"""
add_code_box(doc, json_fixture, "JSON Data Fixture: kirana-mock.json")

# 7. Recommended Tech Stack & Folder Structure
add_styled_heading(doc, "7. Recommended Tech Stack & Folder Structure", level=1)
p_stk = doc.add_paragraph()
p_stk.add_run(
    "• Framework: Next.js 14+ (App Router) OR Vite + React 18+\n"
    "• Styling: TailwindCSS (Fresh Emerald Green: `#16A34A` + Warm Amber: `#F59E0B`)\n"
    "• Icons: Lucide React (ShoppingCart, Plus, Minus, Search, Trash2, CheckCircle, Smartphone)\n"
    "• State Management: Zustand or React Context for Cart state and Khata state."
)

dir_tree = """kirana-demo/
├── src/
│   ├── app/ (or pages/)
│   │   ├── page.tsx               # Mobile Storefront Catalog
│   │   ├── cart/page.tsx          # Cart Drawer & Checkout Screen
│   │   └── merchant/page.tsx      # Merchant Back-Office & Digital Khata
│   ├── components/
│   │   ├── HeaderBanner.tsx       # Store name, address, delivery policy
│   │   ├── CategoryPills.tsx      # Scrollable category selector
│   │   ├── ProductCard.tsx        # 2-col card with +/- quantity stepper
│   │   ├── StickyCartBar.tsx      # Floating bottom cart summary
│   │   └── KhataLedgerTable.tsx   # Customer credit list with WhatsApp reminder
│   ├── data/
│   │   └── kirana-mock.json       # The dummy data fixture provided above
│   └── utils/
│       └── whatsappOrder.ts       # WhatsApp order text formatter"""
add_code_box(doc, dir_tree, "Clean Repository Structure")

# 8. Step-by-Step Developer Implementation Roadmap
add_styled_heading(doc, "8. Step-by-Step Developer Implementation Roadmap", level=1)
steps = [
    ["Day 1: Mobile Catalog & Layout", "Build mobile delivery header, category scrollbar, and 2-column product grid with INR pricing and savings tags."],
    ["Day 2: Dynamic Cart & Stepper", "Build in-memory cart state. Clicking '+' increments quantity, updates floating bottom bar in real-time."],
    ["Day 3: Checkout & WhatsApp Engine", "Build cart modal with Home Delivery / Store Pickup toggle. Integrate `generateWhatsAppOrderUrl`. Verify clicking button launches WhatsApp with order text."],
    ["Day 4: Merchant Digital Khata", "Build `/merchant` tab. Render total credit due card (`₹48,250`). Render customer table with overdue badges and 'Send Reminder' WhatsApp button."],
    ["Day 5: Mobile Device Polish", "Test on smartphone browser. Ensure buttons have comfortable touch targets (min 44px) and images load fast."]
]
add_styled_table(doc, ["Milestone", "Actionable Deliverables"], steps, [2.0, 4.5])

# 9. Client Demo Pitch Script
add_styled_heading(doc, "9. How to Demonstrate This App to a Kirana Merchant", level=1)
p_pitch = doc.add_paragraph()
p_pitch.add_run(
    "When presenting to G. Lakshmi Narayana or any kirana merchant from our leads list, follow this 3-minute demonstration flow:\n"
    "1. Hand your phone to the merchant: 'Lakshmi Narayana garu, this is your store online. Notice how clean it looks on mobile.'\n"
    "2. Add 25kg Sona Masoori Rice and 1L Sunflower Oil to cart: 'Your customer taps + Add, taps Checkout, enters their street name, and taps this green button.'\n"
    "3. Show WhatsApp opening instantly: 'Look at that! The entire itemized order with prices and total arrives directly on your store WhatsApp. You didn't pay 25% commission to Blinkit, and you didn't need to take down dictation over the phone.'\n"
    "4. Switch to `/merchant`: 'And look here: your neighborhood credit register is now digital. R. Sitaramaiah owes ₹4,200 for 33 days. Tap Send Reminder, and WhatsApp instantly sends him your UPI QR code. No arguments, no forgotten money.'"
)

doc.save("Kirana_and_Retail_Store_Web_App_Developer_Guide.docx")
print("Saved: Kirana_and_Retail_Store_Web_App_Developer_Guide.docx")
