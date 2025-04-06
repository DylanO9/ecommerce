import './App.css';
import couch from './couch.png';
import plant from './plant.png';
import chair from './blue-chair.png';
import light from './antique-light.png';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
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
            className="absolute left-0 top-full w-full mt-0 pt-4 pb-6 px-8 bg-white shadow-md rounded-b-lg z-50 animate-fadeIn"
            style={{ animation: 'fadeIn 0.3s ease-in-out' }}
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
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
}

function CategoryGroup({ title, items }) {
  return (
    <div>
      <h3 className="font-bold text-green mb-2">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 hover:text-green cursor-pointer py-1 transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <main className='flex flex-col h-screen mx-8 text-green'>
      <HeroSection />
      <DiscountList />
    </main>
  );
}

function HeroSection() {
  return (
    <div className='h-2/3 w-full flex flex-row items-center justify-center bg-custom-landing relative'>
      <div className='text-start'>
        <h1 className='text-5xl font-bold mb-4'>Best Quality Products</h1>
        <h2 className='text-5xl font-bold mb-4'>
          Discover our amazing collection
        </h2>
        <p className='text-2xl mb-8'>
          We offer a wide range of products to suit your needs.
        </p>
        <button className='font-medium bg-green text-white py-2 px-4 rounded'>
          Shop Now
        </button>
      </div>
      <img src={couch} className='h-full' alt='Couch' />
    </div>
  );
}

function DiscountList() {
  return (
    <ul id='discount-list' className='flex flex-row h-1/3 gap-2 text-black justify-between py-4'>
      <DiscountItem title='Modern & Minimal Bedside Table' image={plant} />
      <DiscountItem title='Modern & Minimal Bedside Table' image={chair} />
      <DiscountItem title='Modern & Minimal Bedside Table' image={plant} />
      <DiscountItem title='Modern & Minimal Bedside Table' image={plant} />
    </ul>
  );
}

function DiscountItem({ title, image }) {
  return (
    <li className='w-1/4 flex flex-row bg-white p-8 rounded shadow-lg'>
      <div className='flex flex-col justify-center items-start'>
        <h3 className='text-lg font-medium text-orange'>10% Discount</h3>
        <h3 className='text-lg font-bold text-left'>
          {title}
        </h3>
      </div>
      {image && <img src={image} className='m-0 p-0 h-full' alt={title} />}
    </li>
  );
}

export default App;
