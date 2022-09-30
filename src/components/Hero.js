import React from 'react';
import { hero } from '../data';
import {AiOutlineDown} from 'react-icons/ai';

const Hero = () => {
  const { title, subtitle, btnText,compText,image } = hero;

  return <div className='flex space-between mt-16 w-[85vw] h-[100vh] m-auto' >
    <div className='w-1/2'>
      <h1 className='h1 text-[6rem] font-bold leading-[6.5rem]'>{title}</h1>
      <h4 className='text-[1.5rem] text-slate-600 mt-2'>{subtitle}</h4>
      <div className="btn-container flex items-center mt-8 gap-4">
      <button className='flex gap-1 items-centre px-8 py-4 bg-accent text-white rounded-md text-[1.5rem]'>{btnText}<AiOutlineDown size={20} className="translate-y-[5px]"/></button>
      <span className='text-slate-400 text-[1.2rem]'>{compText}</span>
      </div>
    </div>

    <div>
      <img src={image} alt="" />
    </div>
  </div>;
};

export default Hero;
