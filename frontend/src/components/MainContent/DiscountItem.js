export default function DiscountItem({ title, image }) {
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