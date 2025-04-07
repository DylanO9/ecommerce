import plant from '../../assets/plant.png';
import chair from '../../assets/blue-chair.png';
import DiscountItem from './DiscountItem.js';

export default function DiscountList() {
    return (
      <ul id='discount-list' className='flex flex-row h-1/3 gap-2 text-black justify-between py-4'>
      <DiscountItem index={1} title='Modern & Minimal Bedside Table' image={plant} />
      <DiscountItem index={2} title='Modern & Minimal Bedside Table' image={chair} />
      <DiscountItem index={3} title='Modern & Minimal Bedside Table' image={plant} />
      <DiscountItem index={4} title='Modern & Minimal Bedside Table' image={chair} />
      </ul>
    );
}