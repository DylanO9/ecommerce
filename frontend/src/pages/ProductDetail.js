import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import couch from '../assets/couch.png';
import chair from '../assets/blue-chair.png';
import plant from '../assets/plant.png';
import light from '../assets/antique-light.png';

const products = [
  {
    id: 1,
    name: 'Modern Comfort Couch',
    price: 899.99,
    image: couch,
    category: 'Living Room',
    description: 'Premium fabric upholstery with memory foam cushioning',
    details: [
      'Premium fabric upholstery made from sustainable materials',
      'Ergonomic design with memory foam cushioning for maximum comfort',
      'Solid wood frame built to last for years of enjoyment',
      'Available in multiple colors and configurations'
    ],
    dimensions: '84" W x 36" D x 32" H',
    materials: 'Fabric, Memory Foam, Solid Wood'
  },
  {
    id: 2,
    name: 'Minimalist Blue Chair',
    price: 299.99,
    image: chair,
    category: 'Living Room',
    description: 'Ergonomic design with solid wood frame',
    details: [
      'Minimalist design with clean lines',
      'Ergonomic support for comfortable seating',
      'Durable solid wood construction',
      'Easy to assemble'
    ],
    dimensions: '24" W x 24" D x 32" H',
    materials: 'Fabric, Solid Wood'
  },
  {
    id: 3,
    name: 'Decorative Plant',
    price: 49.99,
    image: plant,
    category: 'Decor',
    description: 'Low maintenance indoor plant',
    details: [
      'Thrives in low to medium light',
      'Requires minimal watering',
      'Purifies indoor air',
      'Comes with decorative pot'
    ],
    dimensions: '12" H (including pot)',
    materials: 'Live Plant, Ceramic Pot'
  },
  {
    id: 4,
    name: 'Antique Table Lamp',
    price: 129.99,
    image: light,
    category: 'Lighting',
    description: 'Vintage-inspired design with LED bulb',
    details: [
      'Vintage-inspired design',
      'Energy-efficient LED bulb included',
      'Adjustable brightness',
      'Dimmable functionality'
    ],
    dimensions: '18" H x 8" W',
    materials: 'Metal, Glass, LED'
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-green text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Details</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Dimensions</h3>
                  <p className="text-gray-900">{product.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Materials</h3>
                  <p className="text-gray-900">{product.materials}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:text-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-green text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 