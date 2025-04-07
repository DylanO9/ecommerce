import React, { useState, useEffect } from 'react';
import CategoryGroup from './CategoryGroup';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
    const [page, setPage] = useState('home');
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    const handlePageClick = (item, event) => {
      const element = event.currentTarget;
      const { offsetLeft, offsetWidth } = element;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
      setPage(item.toLowerCase());
      setShowMobileMenu(false);
    };
    
    useEffect(() => {
      const handleResize = debounce(() => {
        const activeElement = document.querySelector('.active-nav-item');
        if (activeElement) {
          setUnderlineStyle({
            left: activeElement.offsetLeft,
            width: activeElement.offsetWidth
          });
        }
      }, 100);
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    
    const handleCategoryClick = () => {
      setShowCategoryDropdown(!showCategoryDropdown);
    };
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        const dropdown = document.querySelector('.category-dropdown');
        if (showCategoryDropdown && dropdown && !dropdown.contains(event.target) && 
          !event.target.closest('li')?.textContent?.includes('Categories')) {
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
        <div className='flex flex-col md:flex-row justify-between items-center p-4 md:p-8 py-2 bg-white'>
          <div className='flex justify-between items-center w-full md:w-auto'>
            <h1 className='text-2xl md:text-3xl font-bold'>Furniture Store</h1>
            <button 
              className='md:hidden'
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div id='search-bar' className='w-full md:w-auto flex flex-row items-center justify-center mt-4 md:mt-0 md:mx-4'>
            <input
              type='text'
              placeholder='Search for furniture...'
              className='w-full md:w-64 border border-gray-300 rounded-l px-4 py-2'
            />
            <button className='bg-green text-white rounded-r px-4 py-2'>
              Search
            </button>
          </div>
          <div className={`flex flex-row items-center gap-4 mt-4 md:mt-0 ${showMobileMenu ? 'flex' : 'hidden md:flex'}`}>
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
        <nav className={`flex flex-col justify-between items-center px-4 md:px-8 pb-2 bg-white relative ${showMobileMenu ? 'block' : 'hidden md:block'}`}>
          <ul className='flex flex-col md:flex-row gap-4 md:gap-16 relative w-full'>
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
              className="absolute bottom-0 h-1 bg-green transition-all duration-300 ease-in-out hidden md:block"
              style={{ 
                left: `${underlineStyle.left}px`, 
                width: `${underlineStyle.width}px` 
              }}
            ></div>
          </ul>
          
          {showCategoryDropdown && (
            <div 
              className="category-dropdown absolute left-0 top-full w-full mt-0 pt-4 pb-6 px-4 md:px-8 bg-white shadow-md rounded-b-lg z-50 animate-fadeIn"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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