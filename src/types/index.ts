export interface BusinessInfo {
  name: string;
  hindiName: string;
  category: string;
  rating: number;
  totalReviews: number;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  plusCode: string;
  hoursNote: string;
  mapsUrl: string;
  directionsUrl: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living Rooms' | 'Bedrooms' | 'Kitchens' | 'Modern Interiors' | 'Commercial Spaces';
  image: string;
  description: string;
  dimensions?: string;
  paletteNotes?: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  source: string;
  rating: number;
  verified: boolean;
  theme: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface DesignPrinciple {
  title: string;
  description: string;
  detail: string;
}
