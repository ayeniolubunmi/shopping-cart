import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../component/CartTile';

const Cart = () => {
  const [totalCart, setTotalCart]=useState(0);
  const {cart} = useSelector((state)=>state); 
  useEffect(()=>{
    setTotalCart(cart.reduce((acc,curr)=>acc + curr.price, 0))
  },[cart])
  console.log(cart, totalCart);
  return (
    <div className='flex items-center justify-center'>
      {cart && cart.length ? (
        <>
          <div className='min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto'>
            <div className='flex flex-col justify-center items-center'>
              {cart.map((cartItem)=>(
              <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center items-end p-5 space-y-5 mt-14'>
              <h1 className='text-lg font-bold text-red-800'>Your cart summary</h1>
              <p>
                <span className='font-bold text-gray-800'>Total items</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className='font-bold text-gray-800'>Total amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
            <div>
            </div>
          </div>
        </>
      ):(
      <div className='min-h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='text-gray-300 text-xl font-semibold mb-5'>
          Your cart is empty
        </h1>
        <Link to={'/'} >
          <button className='bg-red-800 rounded-xl text-white border-2 p-4 font-bold'>
            Shop now
          </button>
        </Link>
      </div>)}
    </div>
  );
}

export default Cart;
