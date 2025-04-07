import plant from '../../assets/plant.png';
import chair from '../../assets/blue-chair.png';
import DiscountItem from './DiscountItem.js';

export default function DiscountList() {
    return (
      <ul id='discount-list' className='flex flex-col md:flex-row gap-4 md:gap-2 text-black justify-between py-4 px-0 md:px-0'>
        <DiscountItem index={1} title='Modern & Minimal Bedside Table' image={plant} />
        <DiscountItem index={2} title='Modern & Minimal Bedside Table' image={chair} />
        <DiscountItem index={3} title='Modern & Minimal Bedside Table' image={plant} />
        <DiscountItem index={4} title='Modern & Minimal Bedside Table' image={chair} />
      </ul>
    );
}