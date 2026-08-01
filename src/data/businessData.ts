import { ServiceItem, ProductItem, ReviewItem, FAQItem, HealthTipItem, GalleryItem, TimelineEvent } from '../types';

export const BUSINESS_INFO = {
  name: "SHYAM MEDICAL",
  category: "Pharmacy & Healthcare Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  phone: "8969881695",
  whatsapp: "8969881695",
  displayPhone: "+91 8969881695",
  email: "shyammedical.jhn@gmail.com",
  address: {
    line1: "SHIKSHAK COLONY, ARWAL ROAD",
    line2: "Rajabazar, RAJABAZAR",
    city: "Jehanabad",
    state: "Bihar",
    pincode: "804408",
    full: "SHIKSHAK COLONY, ARWAL ROAD, Rajabazar, RAJABAZAR, Jehanabad, Bihar 804408",
    landmark: "Near Shikshak Colony Gate & Arwal Road Crossing"
  },
  hours: {
    weekdays: "8:00 AM - 10:00 PM",
    sunday: "8:00 AM - 10:00 PM",
    emergency: "24/7 Emergency Medicine Dispatch on Call"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.4239848123!2d84.9750!3d25.2120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2eb5000000001%3A0x1!2sRajabazar%2C%20Jehanabad%2C%20Bihar%20804408!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Shyam+Medical+Shikshak+Colony+Arwal+Road+Rajabazar+Jehanabad+Bihar+804408",
  usps: [
    "100% Authentic & Government Approved Medicines",
    "Fast Local Home Delivery across Jehanabad & Rajabazar",
    "Special Discounts on Monthly Chronic Illness Refills",
    "Temperature Controlled Storage for Insulin & Vaccines",
    "Expert Pharmacist Consultation & Dosage Guidance",
    "WhatsApp Prescription Upload & Instant Dispatch"
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Prescription Medicines & Refills",
    category: "Prescription Medicines",
    description: "Complete stock of authentic prescription drugs for cardiac, diabetic, respiratory, neurological, and general physician prescriptions.",
    iconName: "Pill",
    highlights: ["100% Genuine Certified Stocks", "Monthly Refill Reminders", "Cold-Chain Maintained"],
    features: [
      "Verification of prescription by licensed pharmacist",
      "Wide coverage of branded and generic medicines",
      "Discounted pricing on long-term treatment refills",
      "Instant WhatsApp prescription order facility"
    ]
  },
  {
    id: "srv-2",
    title: "Over-The-Counter (OTC) Healthcare",
    category: "OTC Medicines",
    description: "Everyday health essentials including antacids, pain relievers, fever reducers, cough syrups, cold remedies, and digestive aids.",
    iconName: "Stethoscope",
    highlights: ["Top Healthcare Brands", "Immediate Stock Availability", "Budget Friendly"],
    features: [
      "Instant over-the-counter availability",
      "Top pharmaceutical brands like Mankind, Sun Pharma, Cipla, GSK",
      "Clear usage and side-effect guidance",
      "First-aid and immediate relief solutions"
    ]
  },
  {
    id: "srv-3",
    title: "Digital Health Devices & Monitors",
    category: "Health Devices",
    description: "Certified medical monitoring devices for home health tracking, including digital BP apparatus, glucometers, thermometers, and nebulizers.",
    iconName: "Activity",
    highlights: ["Brand Warranty Covered", "Free Demo on Usage", "Tested & Calibrated"],
    features: [
      "Digital Blood Pressure Monitors (Omron, Dr. Trust)",
      "Blood Glucose Testing Kits & Test Strips",
      "Infrared & Digital Thermometers",
      "Nebulizers & Pulse Oximeters for respiratory care"
    ]
  },
  {
    id: "srv-4",
    title: "Surgical & Hospital Supplies",
    category: "Medical Equipment",
    description: "High-grade surgical dressings, sterile cotton, bandages, gloves, catheters, IV sets, and mobility support items for clinic & home care.",
    iconName: "ShieldAlert",
    highlights: ["Sterile Packaging", "Clinic & Wholesale Rates", "Complete Wound Care"],
    features: [
      "Sterile cotton, gauze rolls, and adhesive tapes",
      "Disposable surgical gloves, masks, and aprons",
      "Orthopedic supports, knee caps, and waist belts",
      "Wheelchairs, walking sticks, and commode chairs"
    ]
  },
  {
    id: "srv-5",
    title: "Baby Care & Pediatric Essentials",
    category: "Baby Care",
    description: "Gentle baby food formulas, dermatologically tested baby wipes, diapers, baby shampoos, teething remedies, and pediatric supplements.",
    iconName: "Baby",
    highlights: ["Dermatologist Approved", "Safe for Newborns", "Leading Brands"],
    features: [
      "Pampers, Huggies, and MamyPoko pants in all sizes",
      "Sebamed, Himalaya, and Lacto Calamine baby skincare",
      "Infant formulas and nutritional pediatric drinks",
      "Pediatric oral rehydration solutions & vitamins"
    ]
  },
  {
    id: "srv-6",
    title: "Nutritional Supplements & Immunity Boosters",
    category: "Supplements",
    description: "Protein powders, multivitamins, calcium & Vitamin D3, herbal liver tonics, and energy supplements for overall vitality.",
    iconName: "Zap",
    highlights: ["GMP Certified Quality", "For All Age Groups", "Immunity Focus"],
    features: [
      "Multivitamin & Mineral daily capsules",
      "Whey & Plant protein powders for adults & elderly",
      "Ayurvedic health tonics (Chyawanprash, Liv.52)",
      "Bone health supplements and Joint care capsules"
    ]
  }
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "p-1",
    name: "Omron Automatic Blood Pressure Monitor HEM-7120",
    category: "Health Devices",
    brand: "Omron",
    mrp: 2490,
    offerPrice: 1999,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500",
    rating: 4.9,
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "p-2",
    name: "Accu-Chek Active Blood Glucose Meter Kit",
    category: "Health Devices",
    brand: "Roche",
    mrp: 1599,
    offerPrice: 1290,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=500",
    rating: 4.8,
    inStock: true,
    badge: "Special Offer"
  },
  {
    id: "p-3",
    name: "Himalaya Liv.52 DS Syrup 200ml",
    category: "Supplements",
    brand: "Himalaya",
    mrp: 220,
    offerPrice: 195,
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=500",
    rating: 4.7,
    inStock: true
  },
  {
    id: "p-4",
    name: "Revital H Daily Health Supplement (30 Capsules)",
    category: "Supplements",
    brand: "Sun Pharma",
    mrp: 330,
    offerPrice: 285,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=500",
    rating: 4.8,
    inStock: true,
    badge: "Popular"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rajesh Kumar Singh",
    location: "Rajabazar, Jehanabad",
    rating: 5,
    date: "2 weeks ago",
    comment: "Shyam Medical is the most reliable medical store in Rajabazar area. I regularly purchase my father's diabetes and blood pressure medicines from here. Always genuine medicines at reasonable rates.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Priya Sharma",
    location: "Shikshak Colony, Jehanabad",
    rating: 5,
    date: "1 month ago",
    comment: "Prompt home delivery service via WhatsApp order! Sent my prescription image on WhatsApp and received the medicine packet at home within 30 minutes. Excellent service by Shyam Medical team.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Dr. Amit Verma",
    location: "Arwal Road, Jehanabad",
    rating: 5,
    date: "2 months ago",
    comment: "Proper temperature maintenance for sensitive drugs like insulin. Pharmacist behavior is very polite and helpful. Highly recommended for genuine healthcare products in Jehanabad.",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I order medicines via WhatsApp from Shyam Medical?",
    answer: "Simply click the 'WhatsApp Order' button or save our WhatsApp number 8969881695. Send us a clear photo of your doctor's prescription along with your full name and delivery address. Our pharmacist will verify the order and dispatch it quickly.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-2",
    question: "Do you provide home delivery in Rajabazar and Jehanabad?",
    answer: "Yes! We offer fast local home delivery across Shikshak Colony, Rajabazar, Arwal Road, and nearby localities in Jehanabad.",
    category: "Ordering & Delivery"
  },
  {
    id: "faq-3",
    question: "Are all medicines authentic and genuine?",
    answer: "Absolutely. 100% of our products are procured directly from licensed pharmaceutical distributors and leading manufacturers (Cipla, Sun Pharma, Mankind, Alkem, Micro Labs, GSK, etc.).",
    category: "Quality & Products"
  },
  {
    id: "faq-4",
    question: "What are the store working hours of Shyam Medical?",
    answer: "We are open 7 days a week from 8:00 AM to 10:00 PM. For emergency medicine requests outside regular store hours, you can call our hotline at 8969881695.",
    category: "Store Info"
  },
  {
    id: "faq-5",
    question: "Do you offer discounts on long-term monthly medicines?",
    answer: "Yes, we offer special concessions and monthly refill discounts for senior citizens and patients requiring regular chronic illness medicines.",
    category: "Pricing & Discounts"
  },
  {
    id: "faq-6",
    question: "Can I check medicine availability online before visiting?",
    answer: "Yes, you can use our exclusive 'Medicine Stock Checker' feature on our website or message us on WhatsApp to instantly confirm stock availability.",
    category: "Store Info"
  }
];

export const HEALTH_TIPS: HealthTipItem[] = [
  {
    id: "tip-1",
    title: "5 Essential Rules for Storing Medicines at Home Safely",
    category: "Medicine Safety",
    date: "July 24, 2026",
    readTime: "3 min read",
    summary: "Learn how temperature, light, and moisture affect drug potency and why proper storage matters.",
    content: "Keep medicines in a cool, dry place away from direct sunlight and bathroom humidity. Always check expiry dates and store temperature-sensitive drugs like insulin in the main refrigerator shelf.",
    author: "Pharmacist Team, Shyam Medical",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tip-2",
    title: "Understanding Blood Pressure Readings: What Numbers Mean",
    category: "Chronic Care",
    date: "July 18, 2026",
    readTime: "4 min read",
    summary: "A practical guide to monitoring your BP accurately with digital monitors at home.",
    content: "Systolic (top) and Diastolic (bottom) pressure tell you how hard your heart is pumping. Rest for 5 minutes before measurement and keep your arm supported at heart level.",
    author: "Shyam Medical Care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tip-3",
    title: "Why You Should Never Skip Antibiotic Doses as Prescribed",
    category: "Antibiotic Awareness",
    date: "July 10, 2026",
    readTime: "3 min read",
    summary: "Stopping antibiotics early can lead to bacterial resistance and recurrent infections.",
    content: "Always complete the full course prescribed by your physician even if you feel completely cured after 2 or 3 days.",
    author: "Shyam Medical Care",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Shyam Medical Front View & Main Entrance",
    category: "Store Interior",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    caption: "Conveniently located at Shikshak Colony, Arwal Road, Rajabazar, Jehanabad."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Medicine Racks",
    category: "Store Interior",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800",
    caption: "Clean, systematic medicine shelves for fast and error-free dispensing."
  },
  {
    id: "gal-3",
    title: "Certified Digital Blood Pressure Apparatus & Devices",
    category: "Health Equipment",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    caption: "Authorized sales & demonstration of digital BP monitors and glucometers."
  },
  {
    id: "gal-4",
    title: "Cold-Chain Refrigerator for Insulin & Vaccines",
    category: "Medicines & Products",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
    caption: "Dedicated medical refrigeration maintaining 2°C to 8°C temperature."
  },
  {
    id: "gal-5",
    title: "Sterile Surgical Cotton & Wound Dressing Station",
    category: "Surgical & Care",
    imageUrl: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=800",
    caption: "Complete surgical supplies including cotton rolls, bandages, and antiseptic solutions."
  },
  {
    id: "gal-6",
    title: "Infant Care & Pediatric Food Counter",
    category: "Medicines & Products",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    caption: "Wide range of baby diapers, wipes, dermatological soaps and nutritional supplements."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "Establishment",
    title: "Founded Shyam Medical in Rajabazar",
    description: "Started with a vision to make 100% genuine medicines accessible at affordable prices to residents of Shikshak Colony and Jehanabad."
  },
  {
    year: "Expansion",
    title: "Cold Chain Storage & Surgical Unit",
    description: "Added dedicated medical refrigeration for critical life-saving drugs, insulins, vaccines and expanded surgical supply inventory."
  },
  {
    year: "Digital Era",
    title: "WhatsApp Express Order & Home Delivery",
    description: "Introduced instant WhatsApp prescription ordering and rapid home delivery service across Rajabazar and nearby localities."
  },
  {
    year: "Present Day",
    title: "Trusted Healthcare Partner in Jehanabad",
    description: "Serving over 500+ happy families with digital stock verification, personal pharmacist care, and guaranteed authentic products."
  }
];
