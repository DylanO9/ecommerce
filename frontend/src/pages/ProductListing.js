import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import couch from '../assets/couch.png';
import chair from '../assets/blue-chair.png';
import plant from '../assets/plant.png';

const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 499.99,
    image: couch,
    category: 'Living Room',
    description: 'Comfortable and stylish modern sofa for your living space.'
  },
  {
    id: 2,
    name: 'Modern Sofa - Grey',
    price: 549.99,
    image: couch,
    category: 'Living Room',
    description: 'Elegant grey version of our popular modern sofa.'
  },
  {
    id: 3,
    name: 'Modern Sofa - Beige',
    price: 529.99,
    image: couch,
    category: 'Living Room',
    description: 'Warm beige version of our comfortable modern sofa.'
  },
  {
    id: 4,
    name: 'Blue Accent Chair',
    price: 199.99,
    image: chair,
    category: 'Living Room',
    description: 'Stylish blue accent chair to complement your decor.'
  },
  {
    id: 5,
    name: 'Blue Accent Chair - Navy',
    price: 219.99,
    image: chair,
    category: 'Living Room',
    description: 'Deep navy version of our popular accent chair.'
  },
  {
    id: 6,
    name: 'Blue Accent Chair - Teal',
    price: 209.99,
    image: chair,
    category: 'Living Room',
    description: 'Vibrant teal version of our stylish accent chair.'
  },
  {
    id: 7,
    name: 'Decorative Plant',
    price: 49.99,
    image: plant,
    category: 'Decor',
    description: 'Beautiful decorative plant to bring life to your space.'
  },
  {
    id: 8,
    name: 'Decorative Plant - Large',
    price: 79.99,
    image: plant,
    category: 'Decor',
    description: 'Larger version of our popular decorative plant.'
  },
  {
    id: 9,
    name: 'Decorative Plant - Set',
    price: 129.99,
    image: plant,
    category: 'Decor',
    description: 'Set of three decorative plants for a complete look.'
  }
];

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Living Room', 'Decor'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Our Products</h1>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products
            .filter((product) => selectedCategory === 'All' || product.category === selectedCategory)
            .map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                  <p className="text-green font-bold">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
} 