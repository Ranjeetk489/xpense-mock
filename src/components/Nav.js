import React from 'react';
import {nav} from '../data';

const Nav = () => {

  return <div className='flex gap-8 items-center'>
    {nav.map((item, index) => {
      return <div key={index} className="">
        <a href={item.href} className="">{item.name}</a>
      </div>
    })}
  </div>;
};

export default Nav;
