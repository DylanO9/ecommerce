export default function DiscountItem({ title, image, index }) {
    return (
      <li className='w-1/4 flex flex-row bg-white p-8 rounded shadow-lg relative'>
        <div className='shape'>
          {index % 2 === 0 ? (
            <div className='small-triangle'></div>
          ) : (
            <div className='swirl-container'>
              <ul className='swirl-ring'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          )}
        </div>
        <div className='flex flex-col justify-center items-start z-10'>
          <h3 className='text-lg font-medium text-orange'>10% Discount</h3>
          <h3 className='text-lg font-bold text-left'>
            {title}
          </h3>
        </div>
        {image && <img src={image} className='z-10 m-0 p-0 h-full' alt={title} />}
      </li>
    );
}