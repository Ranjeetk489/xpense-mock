import React from 'react';
import {overview} from '../data';


const Brands = () => {
  const {brands} = overview;
  return <div>
    { <div className='flex my-28 w-[85vw] mx-auto'>
      {brands.map((item, index) => {
        return <img src={item.image} alt="" key={index} className='mx-auto' />
      })}
    </div>
  }
  </div>;
};

export default Brands;
