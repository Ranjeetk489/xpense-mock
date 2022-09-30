import React from 'react';
import { overview } from '../data';

const Overview = () => {
  const {  productImg } = overview;

  return <div className='h-full'>
    <div className=''>
      <div className='bg-overview bg-contain h-screen'>
        <img src={productImg} alt="imag" className='mx-auto  relative top-20' />
      </div>
    </div>
  </div>;
};

export default Overview;
