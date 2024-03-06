import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <Link to={'/'}>
          <div className='ml-2'>
            <h1 className='text-red-900 text-xl font-bold sm:text-2xl md:text-3xl tracking-wide'>Shopping cart</h1>
          </div>
        </Link>
        <ul className='flex items-center space-x-6 font-semibold list-none text-gray-700'>
          <Link to={'/'}>
            <li className='cursor-pointer'>Home</li>
          </Link>
          <Link to={'/cart'}>
            <li className='cursor-pointer'>Cart</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Navbar;
