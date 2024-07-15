/* eslint-disable no-unused-vars */
import React from 'react';
import { MdOutlineContactSupport, MdOutlineSettings, MdApps } from 'react-icons/md';
import { GoReport } from 'react-icons/go';

import Content from './Content';

const Topbar = () => {
  // Get the current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <>
    {/* <div className='lg:flex lg:justify-between'> */}
      <div>
        <div className='flex justify-between'>
          <div className='flex items-center pl-5 pt-3'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png'
              className='h-7'
              alt='Google Meet Logo'
            />
            <p className='pl-2 text-xl tracking-tight'>
              <span className='font-semibold text-neutral-500'>Google</span> Meet
            </p>
          </div>
          <div className='flex items-center pr-5 pt-3'>
            <span className='pr-5'>{formattedDate}</span>
            <div className='flex text-xl cursor-pointer'>
              <span className='pr-5'>
                <MdOutlineContactSupport />
              </span>
              <span className='pr-5'>
                <GoReport />
              </span>
              <span className='pr-5'>
                <MdOutlineSettings />
              </span>
              <span className='pr-5'>
                <MdApps />
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <Content />
    </>
  );
};

export default Topbar;
