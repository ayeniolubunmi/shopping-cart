import React from 'react';

const ProductTiles = ({product}) => {
  return (
    <div>
      <div className='flex flex-col border-2 border-red-900 gap-3 group p-4 h-[340px] rounded-xl mt-10 ml-5'>
        <div className='h-[160px]'>
          <img src={product?.image} alt={product?.title} className='w-full h-full object-cover'/>
        </div>
        <div>
          <h1 className='h-[40] truncate text-gray-700 mt-3 text-lg font-bold'>{product?.title}</h1>
        </div> 
        <div className='flex w-full mt-5 justify-center items-center'>
          <button className='p-3 tracking-wider bg-black text-white outline-none rounded-xl font-semibold'>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductTiles;
