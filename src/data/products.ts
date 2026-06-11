export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  features: string[];
}

export const products: Product[] = [
  {
    id: 'krib-001',
    name: 'KRIBISH Signature Gold Tank',
    price: 35.00,
    description: 'Sleeveless muscle tank featuring our signature built-different K logo in metallic gold on the back. Engineered for peak performance and aesthetic appeal.',
    images: ['/media__1781162082497.jpg'],
    category: 'Sleeveless',
    sizes: ['S', 'M', 'L', 'XL'],
    features: ['100% Premium Cotton', 'Metallic Gold Print', 'Oversized Armholes', 'Pre-shrunk']
  },
  {
    id: 'krib-002',
    name: 'Built Different Oversized Tee',
    price: 45.00,
    description: 'Our staple oversized white tee with sleek black piping and front minimal logo graphics. "BUILT DIFFERENT" text underlines the KRIBISH globe icon.',
    images: ['/media__1781162082499.jpg'],
    category: 'Classics',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    features: ['Heavyweight Cotton Blend', 'Dropped Shoulders', 'Contrast Piping', 'Boxy Fit']
  },
  {
    id: 'krib-003',
    name: 'Cybernetic Gold Emblem Tee',
    price: 55.00,
    description: 'A masterpiece of design. This premium black tee features a massive, intricate cybernetic gold "K" emblem on the back, symbolizing the intersection of tech and streetwear.',
    images: ['/media__1781162083305.jpg'],
    category: 'Premium',
    sizes: ['M', 'L', 'XL'],
    features: ['High-Density Gold Foil Print', 'Ultra-Soft Ring-Spun Cotton', 'Custom KRIBISH neck tag', 'Relaxed Fit']
  },
  {
    id: 'krib-004',
    name: 'KRIBISH Core Black Tee',
    price: 40.00,
    description: 'The essential core tee. Black base with subtle gold accents, perfect for layering or standing out on its own. (Displaying alternate view).',
    images: ['/media__1781162082497.jpg'], // Reusing image 1 for demonstration
    category: 'Classics',
    sizes: ['S', 'M', 'L', 'XL'],
    features: ['Standard Fit', 'Breathable Fabric', 'Subtle Branding', 'Everyday Wear']
  }
];
