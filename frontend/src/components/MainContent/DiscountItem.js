export default function DiscountItem({ title, image, index }) {
    return (
      <li className='w-full md:w-1/4 flex flex-col md:flex-row bg-white p-4 md:p-4 rounded shadow-lg relative'>
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
        <div className='shape-bottom'>
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
        <div className='flex flex-col justify-center items-start z-10 mb-4 md:mb-0'>
          <h3 className='text-lg font-medium text-orange'>10% Discount</h3>
          <h3 className='text-lg font-bold text-left'>
            {title}
          </h3>
        </div>
        {image && (
          <div className='flex justify-center md:justify-end w-full '>
            <img 
              src={image} 
              className='z-10 h-48 md:h-full min-w-[100px] w-auto object-contain' 
              alt={title} 
              loading="lazy"
            />
          </div>
        )}
      </li>
    );
}