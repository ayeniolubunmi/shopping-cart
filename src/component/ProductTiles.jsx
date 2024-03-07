import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart} from '../store/cart-slice';

const ProductTiles = ({product}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector((state)=>state);
  const handleAddToCart=()=>{
    dispatch(addToCart(product))
  }
  const handleRemoveFromCart=()=>{
    dispatch(removeFromCart(product.id))
  }
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
          <button onClick= {cart.some((item)=>item.id === product.id) ? handleRemoveFromCart : handleAddToCart} className='p-3 tracking-wider bg-black text-white outline-none rounded-xl font-semibold'>
            {cart.some((item)=>item.id === product.id) ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTiles;
