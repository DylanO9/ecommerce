import plant from '../../assets/plant.png';
import chair from '../../assets/blue-chair.png';
import DiscountItem from './DiscountItem.js';

export default function DiscountList() {
    return (
      <ul id='discount-list' className='flex flex-row h-1/3 gap-2 text-black justify-between py-4'>
        <DiscountItem title='Modern & Minimal Bedside Table' image={plant} />
        <DiscountItem title='Modern & Minimal Bedside Table' image={chair} />
        <DiscountItem title='Modern & Minimal Bedside Table' image={plant} />
        <DiscountItem title='Modern & Minimal Bedside Table' image={plant} />
      </ul>
    );
}