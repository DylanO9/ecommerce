import './App.css';
import couch from './couch.png';
import plant from './plant.png';
import chair from './blue-chair.png';
import light from './antique-light.png';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  return (
    <header className='w-full border-b-2'>
      <h1 className='text-3xl font-bold text-center py-4'>
        Welcome to the React App
      </h1>
    </header>
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
