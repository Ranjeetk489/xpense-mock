import React from 'react';
import { features } from '../data';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Feature1 = () => {
  const { feature1 } = features;
  

  return <div className='w-[85vw] flex mx-auto h-screen justify-between'>
    <div className='w-1/2 '>
      <div className='uppercase text-slate-500 text-[1.2rem] tracking-wide'>{feature1.pretitle}</div>
      <div className='text-[6rem] text-dark font-bold leading-[6rem] my-4'>{feature1.title}</div>
      <div className='my-8 text-[1.5rem] leading-[2.5rem] text-slate-600'>{feature1.subtitle}</div>
      <div className="btn-container text-[1.5rem] flex items-center text-accent gap-2">
        <button>{feature1.btnLink} </button><AiOutlineArrowRight  size={20}/>
      </div>
    </div>
    <div>
      <img src={feature1.image} alt="" />
    </div>
  </div>;
};

export default Feature1;
