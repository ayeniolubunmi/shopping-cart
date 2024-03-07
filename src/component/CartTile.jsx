import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart-slice';


const CartTile = ({cartItem}) => {
    const dispatch = useDispatch();
    const handleRemoveFromCart=()=>{
    dispatch(removeFromCart(cartItem.id))
}
  return (
    <div className='flex flex-col justify-between items-center bg-red-800 p-5 mt-2 mb-2 rounded-xl'>
        <div className='flex p-3'>
            <img src={cartItem?.image} alt={cartItem?.title} className='h-40 rounded-lg'/>
        </div>
        <div className='ml-10 space-y-5 self-start'>
            <h1 className='text-white font-bold text-xl'>{cartItem?.title}</h1>
            <p className='font-extrabold text-white text-xl'>{cartItem?.price}</p>
        </div>
        <div>
            <button onClick={handleRemoveFromCart} className='p-3 tracking-wider bg-black text-white outline-none rounded-xl font-semibold'>
                Remove from Cart
            </button>
        </div>
    </div>
  );
}

export default CartTile;
