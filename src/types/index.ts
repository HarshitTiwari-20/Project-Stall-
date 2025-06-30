export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedDate: string;
  totalEarnings: number;
  projectsCount: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  preview: string;
  thumbnail: string;
  tags: string[];
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  downloads: number;
  rating: number;
  technologies: string[];
  sourceFiles: SourceFile[];
  hasAccess: boolean;
}

export interface SourceFile {
  name: string;
  content: string;
  language: string;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  last4?: string;
  expiryDate?: string;
}