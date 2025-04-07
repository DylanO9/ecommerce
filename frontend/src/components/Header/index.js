import React, { useState, useEffect } from 'react';
import CategoryGroup from './CategoryGroup';
import { FiShoppingCart } from 'react-icons/fi'; // Import the cart icon

export default function Header() {
    const [page, setPage] = useState('home');
  
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    
    const handlePageClick = (item, event) => {
      const element = event.currentTarget;
      const { offsetLeft, offsetWidth } = element;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
      setPage(item.toLowerCase());
    };
    
    useEffect(() => {
      // Initialize underline position when component mounts
      const activeElement = document.querySelector('.active-nav-item');
      if (activeElement) {
        setUnderlineStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth
        });
      }
    }, []);
  
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    
    const handleCategoryClick = () => {
      setShowCategoryDropdown(!showCategoryDropdown);
    };
    
    // Add click outside handler
    useEffect(() => {
      const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.category-dropdown');
      if (showCategoryDropdown && dropdown && !dropdown.contains(event.target) && 
        !event.target.closest('li')?.textContent?.includes('Categories')) {

        // Close without animation since it's not working
        setShowCategoryDropdown(false);
      }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [showCategoryDropdown]);

    return (
      <header className='w-full'>
      <div className='flex flex-row justify-between items-center p-8 py-2 bg-white'>
        <h1 className='text-3xl font-bold'>Furniture Store</h1>
        <div id='search-bar' className='flex-grow flex flex-row items-center justify-center mx-4'>
        <input
          type='text'
          placeholder='Search for furniture, decor, and more...'
          className='w-1/2 border border-gray-300 rounded-l px-4 py-2'
        />
        <button className='bg-green text-white rounded-r px-4 py-2'>
          Search
        </button>
        </div>
        <div className='flex flex-row items-center gap-4'>
        {/* add a cart */}
        <button className='rounded px-4 py-2'>
          <FiShoppingCart className='text-green' size={24} />
        </button>
        <button className='bg-green text-white rounded px-4 py-2'>
          Sign Up
        </button>
        <button className='bg-green text-white rounded px-4 py-2'>
          Log In
        </button>
        </div>
      </div>
      <nav className='flex flex-col justify-between items-center px-8 pb-2 bg-white relative'>
        <ul className='flex flex-row gap-16 relative w-full'>
        {['Home', 'Products', 'Categories', 'Discounts', 'Contact'].map((item, index) => (
          <li
          key={index}
          className={`text-lg font-semibold cursor-pointer pb-1 ${
            page.toLowerCase() === item.toLowerCase() ? 'text-green active-nav-item' : ''
          }`}
          onClick={(e) => {
            handlePageClick(item, e);
            if (item === 'Categories') {
            handleCategoryClick();
            }
          }}
          >
          {item}
          </li>
        ))}
        <div 
          className="absolute bottom-0 h-1 bg-green transition-all duration-300 ease-in-out"
          style={{ 
          left: `${underlineStyle.left}px`, 
          width: `${underlineStyle.width}px` 
          }}
        ></div>
        </ul>
        
        {showCategoryDropdown && (
        <div 
          className="category-dropdown absolute left-0 top-full w-full mt-0 pt-4 pb-6 px-8 bg-white shadow-md rounded-b-lg z-50 animate-fadeIn"
        >
          <div className="grid grid-cols-5 gap-6">
          <CategoryGroup title="Living Room" items={["Sofas", "Coffee Tables", "TV Stands", "Bookshelves", "Recliners"]} />
          <CategoryGroup title="Bedroom" items={["Beds", "Nightstands", "Dressers", "Wardrobes", "Mattresses"]} />
          <CategoryGroup title="Kitchen & Dining" items={["Dining Tables", "Chairs", "Bar Stools", "Buffets", "Kitchen Islands"]} />
          <CategoryGroup title="Office" items={["Desks", "Office Chairs", "Filing Cabinets", "Bookcases", "Desk Lamps"]} />
          <CategoryGroup title="Decor" items={["Lighting", "Rugs", "Wall Art", "Pillows", "Plants"]} />
          </div>
        </div>
        )}
      </nav>
      </header>
    );
  }