import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
        alt='/'
      />
      <div className=' bg-black/40 absolute top-0 left-0 w-full h-screen' />
      <div className='rtl absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:right-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>تجربه یک رویا</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl py-8'>
           زیبایی‌های دنیا را کاوش کنید
          </h1>
          <p className='max-w-[800px] drop-shadow-2xl py-2 text-xl'>
          ما یک شرکت تورپلانر هستیم که به شما کمک می کنیم تا به بهترین و جذابترین مناطق گردشگری جهان سفر کنید. با توجه به سابقه ما در این حوزه، هدف ما ارائه خدمات مطمئن و حرفه ای به مشتریان عزیزمان است.
            </p>
          <button className=' text-white px-6 mt-3 border border-s-white hover:bg-gray-400 ease-in duration-300 '>رزو آنلاین</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;