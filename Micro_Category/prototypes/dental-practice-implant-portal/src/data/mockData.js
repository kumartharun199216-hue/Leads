export const clinicInfo = {
  name: "Suma Dental Specialities & Implant Centre",
  shortName: "Suma Dental Care",
  tagline: "Your Smile. Our Expertise. Advanced & Painless Dental Care.",
  doctor: "Dr. P. Suma Latha, MDS",
  role: "Chief Dental Surgeon & European Certified Implantologist",
  registration: "APDC/2012/04812",
  experienceYears: 14,
  phone: "+91 866 2434510",
  whatsappNumber: "918662434510",
  email: "sumadental.vja@gmail.com",
  address: "40-1-52, MG Road, Near Benz Circle, Vijayawada, Andhra Pradesh - 520010",
  city: "Vijayawada",
  rating: 4.9,
  reviewCount: 348,
  timings: {
    morning: "09:30 AM - 01:30 PM",
    evening: "05:00 PM - 09:00 PM",
    days: "Monday - Saturday (Sunday Emergency Appointments Only)"
  },
  stats: [
    { label: "Happy Patients Treated", value: "8,500+" },
    { label: "Successful Implants", value: "1,200+" },
    { label: "Years of Excellence", value: "14+" },
    { label: "Google Review Rating", value: "4.9 ★" }
  ]
};

export const procedures = [
  {
    id: "PROC001",
    name: "Single Sitting Rotary Root Canal (RCT)",
    shortName: "Rotary RCT",
    category: "Endodontics",
    duration: "45-60 mins",
    price: "₹2,800",
    numericPrice: 2800,
    tag: "100% Painless",
    tagColor: "teal",
    description: "Advanced painless computer-guided root canal therapy using titanium rotary files and digital apex locators in a single comfortable visit.",
    benefits: [
      "No multiple injections or repeated clinic visits",
      "Digital electronic apex location eliminates over-instrumentation",
      "Biocompatible hermetic seal preventing re-infection",
      "Immediate relief from severe toothache and sensitivity"
    ],
    procedureSteps: [
      "Digital high-resolution X-ray diagnostic scan",
      "Painless computerized local anesthesia",
      "Rotary bio-cleaning of infected pulp canals",
      "Gutta-percha 3D obturation & core restoration"
    ]
  },
  {
    id: "PROC002",
    name: "Titanium Dental Implant & Zirconia Crown",
    shortName: "Dental Implant",
    category: "Implantology",
    duration: "60 mins",
    price: "₹18,000",
    numericPrice: 18000,
    tag: "Lifetime Warranty",
    tagColor: "blue",
    description: "Permanent replacement for missing teeth using European medical-grade titanium fixture integrated directly into jawbone, capped with translucent zirconia.",
    benefits: [
      "Natural chewing efficiency restored up to 98%",
      "Prevents bone loss and facial sagging",
      "No damage to adjacent healthy teeth unlike bridges",
      "Lifetime durability with certified manufacturer warranty"
    ],
    procedureSteps: [
      "3D CBCT digital bone density mapping",
      "Minimally invasive keyhole implant placement",
      "Osseointegration healing period",
      "CAD/CAM customized aesthetic zirconia crown fitting"
    ]
  },
  {
    id: "PROC003",
    name: "Invisible Clear Aligners (No Wire Braces)",
    shortName: "Clear Aligners",
    category: "Orthodontics",
    duration: "30 mins",
    price: "₹45,000",
    numericPrice: 45000,
    tag: "Discreet & Removable",
    tagColor: "purple",
    description: "Transparent, custom-molded 3D medical polyurethane trays that gently move crowded or crooked teeth into perfect alignment without ugly metal wires.",
    benefits: [
      "Completely invisible at speaking distance",
      "Removable while eating, brushing, and flossing",
      "Zero food restrictions, no mouth ulcers or wire cuts",
      "Digital 3D simulation shows your final smile before starting"
    ],
    procedureSteps: [
      "Digital intraoral 3D scanner impressions (no messy putty)",
      "Virtual treatment simulation of tooth movement",
      "Delivery of custom aligner tray series",
      "Bi-weekly progress tracking until perfect alignment"
    ]
  },
  {
    id: "PROC004",
    name: "Digital Smile Designing & Laser Whitening",
    shortName: "Laser Whitening",
    category: "Cosmetic Dentistry",
    duration: "45 mins",
    price: "₹3,500",
    numericPrice: 3500,
    tag: "Most Popular",
    tagColor: "amber",
    description: "Hospital-grade cold blue LED & diode laser teeth whitening that safely lifts 6 to 8 shades of deep stains from tea, coffee, and tobacco in 1 session.",
    benefits: [
      "Instantly brighter, radiant smile for weddings and events",
      "Enamel-safe hydrogen peroxide gel activated by laser",
      "Includes desensitizing fluoride varnish treatment",
      "Long-lasting brightness with proper home care"
    ],
    procedureSteps: [
      "Protective gingival barrier application on gums",
      "Laser-activated proprietary bleaching gel coating",
      "Three 15-minute photo-activation light cycles",
      "Shade comparison and enamel remineralization finish"
    ]
  },
  {
    id: "PROC005",
    name: "Comprehensive Oral Checkup & Digital X-Ray",
    shortName: "Full Checkup",
    category: "General Dentistry",
    duration: "20-30 mins",
    price: "₹400",
    numericPrice: 400,
    tag: "Preventative",
    tagColor: "emerald",
    description: "Complete 32-tooth oral health examination, ultrasonic plaque screening, intraoral video camera tour, and customized preventive treatment blueprint.",
    benefits: [
      "Detect cavities and gum disease years before pain begins",
      "High-definition intraoral camera lets you see your own teeth",
      "Low-radiation digital sensor (90% less radiation than film)",
      "Personalized oral hygiene counseling"
    ],
    procedureSteps: [
      "Visual examination of teeth, gums, tongue, and bite",
      "Digital intraoral camera video documentation",
      "Diagnostic radiograph of suspected cavities",
      "Written treatment estimate & consultation report"
    ]
  },
  {
    id: "PROC006",
    name: "Ultrasonic Scaling & Airflow Polishing",
    shortName: "Deep Cleaning",
    category: "Periodontics",
    duration: "30-40 mins",
    price: "₹1,200",
    numericPrice: 1200,
    tag: "Fresh Breath",
    tagColor: "cyan",
    description: "Advanced piezoelectric ultrasonic scaler removing hardened tartar, calculus, and nicotine stains beneath gumlines, followed by diamond paste polishing.",
    benefits: [
      "Stops bleeding gums and reverses early gingivitis",
      "Eliminates chronic bad breath (halitosis)",
      "Leaves teeth feeling silky smooth and squeaky clean",
      "Non-abrasive, pain-free vibration technology"
    ],
    procedureSteps: [
      "Assessment of tartar accumulation and gum pockets",
      "Ultrasonic micro-vibrations lifting stubborn tartar",
      "Airflow sodium bicarbonate stain removal",
      "Mint fluoride polishing cup treatment"
    ]
  }
];

export const doctors = [
  {
    id: "DOC001",
    name: "Dr. P. Suma Latha",
    degrees: "BDS, MDS (Prosthodontics & Implantology)",
    role: "Chief Dental Surgeon & Clinical Director",
    specialization: "Dental Implants, Smile Designing & Full Mouth Rehabilitation",
    experience: "14+ Years",
    fellowships: "Fellow of International Congress of Oral Implantologists (FICOI, USA)",
    availableDays: "Mon - Sat",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80",
    bio: "Dr. Suma Latha is an acclaimed dental surgeon in Vijayawada specializing in painless computer-guided implantology and aesthetic smile makeovers. She has completed over 1,200 implant surgeries with a 99.2% success rate."
  },
  {
    id: "DOC002",
    name: "Dr. R. K. Sharma",
    degrees: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    role: "Senior Consultant Orthodontist",
    specialization: "Invisible Clear Aligners, Ceramic & Lingual Braces",
    experience: "11+ Years",
    fellowships: "Certified Invisalign Platinum Provider",
    availableDays: "Mon, Wed, Fri, Sat",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80",
    bio: "Dr. Sharma is dedicated to creating picture-perfect smiles using the latest 3D digital clear aligner systems. He has transformed smiles for over 800 teens and working professionals."
  },
  {
    id: "DOC003",
    name: "Dr. A. Vikram Kumar",
    degrees: "BDS, MDS (Conservative Dentistry & Endodontics)",
    role: "Consultant Endodontist & Microscopic Specialist",
    specialization: "Single-Sitting Rotary Root Canals, Laser Dentistry",
    experience: "9+ Years",
    fellowships: "Member of Indian Endodontic Society",
    availableDays: "Mon - Sat",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80",
    bio: "Dr. Vikram specializes in preserving natural teeth through microscope-assisted painless root canals. He utilizes advanced rotary instrumentation for quick, painless single-visit treatments."
  }
];

export const allSlotTemplates = [
  { time: "09:30 AM", period: "Morning", slotIndex: 1 },
  { time: "10:00 AM", period: "Morning", slotIndex: 2 },
  { time: "10:30 AM", period: "Morning", slotIndex: 3 },
  { time: "11:00 AM", period: "Morning", slotIndex: 4 },
  { time: "11:30 AM", period: "Morning", slotIndex: 5 },
  { time: "12:00 PM", period: "Morning", slotIndex: 6 },
  { time: "12:30 PM", period: "Morning", slotIndex: 7 },
  { time: "05:00 PM", period: "Evening", slotIndex: 8 },
  { time: "05:30 PM", period: "Evening", slotIndex: 9 },
  { time: "06:00 PM", period: "Evening", slotIndex: 10 },
  { time: "06:30 PM", period: "Evening", slotIndex: 11 },
  { time: "07:00 PM", period: "Evening", slotIndex: 12 },
  { time: "07:30 PM", period: "Evening", slotIndex: 13 },
  { time: "08:00 PM", period: "Evening", slotIndex: 14 }
];

export const initialAppointments = [
  {
    token: "DNT-20261005-001",
    patientName: "K. Srinivasa Rao",
    phone: "9848034202",
    age: 48,
    gender: "Male",
    procedureId: "PROC002",
    procedureName: "Titanium Dental Implant & Zirconia Crown",
    doctorId: "DOC001",
    doctorName: "Dr. P. Suma Latha",
    date: new Date().toISOString().split('T')[0],
    time: "09:30 AM",
    period: "Morning",
    status: "Completed", // Confirmed, Checked In, In-Consultation, Completed, Cancelled
    notes: "Post-op checkup for lower right molar implant."
  },
  {
    token: "DNT-20261005-002",
    patientName: "G. Lakshmi Prasanna",
    phone: "9440123101",
    age: 32,
    gender: "Female",
    procedureId: "PROC001",
    procedureName: "Single Sitting Rotary Root Canal (RCT)",
    doctorId: "DOC003",
    doctorName: "Dr. A. Vikram Kumar",
    date: new Date().toISOString().split('T')[0],
    time: "10:00 AM",
    period: "Morning",
    status: "In-Consultation",
    notes: "Severe night throbbing pain in upper left premolar."
  },
  {
    token: "DNT-20261005-003",
    patientName: "M. Kiran Kumar Varma",
    phone: "8816224110",
    age: 27,
    gender: "Male",
    procedureId: "PROC004",
    procedureName: "Digital Smile Designing & Laser Whitening",
    doctorId: "DOC001",
    doctorName: "Dr. P. Suma Latha",
    date: new Date().toISOString().split('T')[0],
    time: "10:30 AM",
    period: "Morning",
    status: "Checked In",
    notes: "Wedding in 10 days, wants immediate shade lightening."
  },
  {
    token: "DNT-20261005-004",
    patientName: "P. Ananya Reddy",
    phone: "9490123456",
    age: 21,
    gender: "Female",
    procedureId: "PROC003",
    procedureName: "Invisible Clear Aligners (No Wire Braces)",
    doctorId: "DOC002",
    doctorName: "Dr. R. K. Sharma",
    date: new Date().toISOString().split('T')[0],
    time: "11:30 AM",
    period: "Morning",
    status: "Confirmed",
    notes: "Consultation for front gap closure."
  },
  {
    token: "DNT-20261005-005",
    patientName: "T. Venkataramana",
    phone: "9866123987",
    age: 56,
    gender: "Male",
    procedureId: "PROC005",
    procedureName: "Comprehensive Oral Checkup & Digital X-Ray",
    doctorId: "DOC001",
    doctorName: "Dr. P. Suma Latha",
    date: new Date().toISOString().split('T')[0],
    time: "05:00 PM",
    period: "Evening",
    status: "Confirmed",
    notes: "Routine yearly checkup and sensitive gum screening."
  }
];

export const faqList = [
  {
    q: "How does the online dental appointment booking work?",
    a: "You simply select your desired dental treatment (Root Canal, Implant, Cleaning, etc.), pick an available morning or evening time slot on our calendar, and enter your name and phone number. You receive an instant Token ID and a confirmation message directly on your WhatsApp!"
  },
  {
    q: "Are the dental procedures really painless?",
    a: "Yes! At Suma Dental Care, we use computerized local anesthesia and precision rotary instruments. For root canals and implants, the vast majority of our patients report feeling zero pain during the entire procedure."
  },
  {
    q: "Can I choose between a Morning or Evening appointment?",
    a: "Absolutely. Our clinic operates in two convenient shifts: Morning from 09:30 AM to 01:30 PM, and Evening from 05:00 PM to 09:00 PM. Our live slot picker shows real-time availability for both shifts."
  },
  {
    q: "What should I do if I have a severe emergency toothache?",
    a: "Click our floating red '🚨 Emergency SOS' button on the bottom of the screen. It allows you to call our emergency surgeon immediately or send an urgent WhatsApp message for priority care."
  },
  {
    q: "How long does a Single Sitting Root Canal treatment take?",
    a: "A single sitting rotary root canal typically takes just 45 to 60 minutes. In one comfortable visit, the infection is cleaned, the canal is sealed, and you are relieved of tooth pain."
  },
  {
    q: "Do I need to pay online to confirm my appointment?",
    a: "No online payment is required! Consultation fees and treatment charges are settled directly at the clinic reception after your doctor visit via Cash, UPI (PhonePe/GooglePay), or Card."
  }
];

export const testimonials = [
  {
    name: "Rajesh Varma, Businessman",
    city: "Bhimavaram",
    procedure: "Titanium Dental Implant",
    rating: 5,
    text: "I lost my lower molar 2 years ago and struggled to chew. Dr. Suma Latha placed a titanium implant with a zirconia crown. The whole procedure was completely painless, and I was eating normally the next day!"
  },
  {
    name: "Dr. Sneha Chowdary, Software Engineer",
    city: "Vijayawada",
    procedure: "Invisible Clear Aligners",
    rating: 5,
    text: "At 28, I didn't want metal braces during client video meetings. The clear aligners from Suma Dental are completely invisible! My crooked front teeth straightened in just 7 months. Best decision ever."
  },
  {
    name: "K. Venkateswara Rao, Senior Citizen",
    city: "Kadapa",
    procedure: "Single Sitting Rotary RCT",
    rating: 5,
    text: "I was terrified of root canals from past experiences. Dr. Vikram finished the entire root canal in just 45 minutes with zero pain. The clinic hygiene and sterilization are world-class."
  }
];
