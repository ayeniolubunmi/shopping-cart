import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTiles from '../component/ProductTiles';

const Home = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading]=useState(false);

  const fetchProduct=async()=>{
    setLoading(true)
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    console.log(data)
    if(data){
      setLoading(false)
      setProduct(data)
    }
  }
  useEffect(()=>{
    fetchProduct();
  },[])
  return (
    <div>
      {loading ? (
        <div className='w-full flex justify-center items-center min-h-screen'>
          <Circles 
          height={"120"} 
          width={'120'} 
          visible={true} 
          color="rgba(127,29,29)" />
        </div>
      ):<div 
      className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-5 space-y-10 p-3 max-w-6xl mx-auto'>
        {
          products && products.length?products.map((productItem)=>
          <ProductTiles product={productItem} />) : null
        }
        </div>}
    </div>
  );
}

export default Home;
