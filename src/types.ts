export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  discountPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  dosage: string;
  description: string;
  requiresPrescription: boolean;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  highlights: string[];
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  mrp: number;
  offerPrice: number;
  image: string;
  rating: number;
  inStock: boolean;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface HealthTipItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  author: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Store Interior' | 'Medicines & Products' | 'Health Equipment' | 'Surgical & Care';
  imageUrl: string;
  caption: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface WhatsAppOrderState {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineRequired: string;
  prescriptionUploaded: boolean;
  prescriptionFileName?: string;
  preferredTime: string;
  message: string;
}
