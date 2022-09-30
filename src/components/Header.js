import React from 'react';
import { ImCross } from 'react-icons/im';
import { header } from '../data';
import Nav from './Nav';

const Header = () => {
  const { btnText} = header;

  return <div className='flex justify-between mt-8 w-[85vw] m-auto'>
    <div className="brand-title flex items-center text-[1.5rem] font-semibold gap-2"><span className="brand-icon p-4 bg-accent text-[1rem] rounded-full"><ImCross className='text-white'/></span>Pense</div>
    <Nav />
    <button className="px-3 py-2 text-accent rounded-md border-accent border-[1px]">{btnText}</button>
  </div>;
};

export default Header;
