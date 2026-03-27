export interface Package {
  id: number;
  title: string;
  destination: string;
  category: 'International' | 'Domestic' | 'Honeymoon';
  duration: string;
  price: number;
  image: string;
  description: string;
  featured: boolean;
}

export interface EnquiryPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  package: string;
  travelDate: string;
  travellers: string;
  budget: string;
  message: string;
}
