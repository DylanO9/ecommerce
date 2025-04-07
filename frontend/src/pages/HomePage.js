import React from 'react';
import HeroSection from '../components/MainContent/HeroSection';
import DiscountList from '../components/MainContent/DiscountList';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Living Room', 'Bedroom', 'Kitchen', 'Office'].map((category) => (
              <div key={category} className="relative group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gray-900 opacity-50 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white">{category}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Items Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Special Offers</h2>
          <DiscountList />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Interior Designer',
                comment: 'The quality of furniture is exceptional. I recommend this store to all my clients.'
              },
              {
                name: 'Michael Chen',
                role: 'Homeowner',
                comment: 'Great customer service and fast delivery. The products exceeded my expectations.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Architect',
                comment: 'Perfect blend of style and functionality. The pieces are both beautiful and practical.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white mb-8">Subscribe to our newsletter for the latest products and exclusive offers.</p>
            <div className="max-w-md mx-auto">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green focus:ring-white"
                  placeholder="Enter your email"
                />
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green focus:ring-white"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 