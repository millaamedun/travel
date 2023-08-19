import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center rtl'>
        <h3 className='text-4xl md:text-4xl font-bold'> واسه تعطیلات برنامه نداری؟</h3>
        <p className='text-xl py-8'>
        ما در اینجایم تا به شما در برنامه ریزی و سازماندهی یک سفر بهتر کمک کنیم
        </p>
        <p className='pb-6 font-medium'>

        تیم ما از متخصصان مجرب در صنعت گردشگری تشکیل شده است. آنها آشنایی کامل با مکان های دیدنی و جاذبه های هر نقطه جذاب در سراسر کشور دارند. با توجه به نیازها و تمایلات شخصی شما، بسته های سفر شخصی سازی شده ای را به شما پیشنهاد می کنیم. در واقع، ما می توانیم تمامی جزئیات را برای شما برنامه ریزی کنیم، از رزرو هتل ها و بلیط های هواپیما تا رستوران ها و فعالیت های تفریحی
        </p>
        <div>
          <button className='border-black font-medium ml-4 hover:shadow-xl'>
            اطلاعات بیشتر
          </button>
          <button className='bg-black px-9 font-medium text-white border-black hover:shadow-xl'>رزو سفر</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;