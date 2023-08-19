import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='rtl w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-9'>مشاوره</h6>
          <ul>
            <li className='py-1'>سفر</li>
            <li className='py-1'>رزو</li>
            <li className='py-1'>تور هوایی</li>
            <li className='py-1'>تور دریایی</li>
            <li className='py-1'>تور زمینی</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-9'>پشتیبانی</h6>
          <ul>
            <li className='py-1'>قیمت</li>
            <li className='py-1'>مدارک</li>
            <li className='py-1'>تورها</li>
            <li className='py-1'>سرمایه گذاری</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-9'>شرکت</h6>
          <ul>
            <li className='py-1'>درباره ما</li>
            <li className='py-1'>مقالات</li>
            <li className='py-1'>استخدام</li>
            <li className='py-1'>تماس با ما</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-9'>قوانین</h6>
          <ul>
            <li className='py-1'> حریم خصوصی</li>
            <li className='py-1'>مقررات</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-9'>
          <p className='font-bold uppercase'>عضو مجله خبری ما شوید</p>
          <p className='py-4'>
          اخرین اخبار از قیمت ها تور ها و تخفیف ها براتون به صورت هفتگی ارسال میشه
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 ml-4 rounded-md mb-4' type='email' placeholder='ایمیل خود را وارد نمایید...' />
            <button className='p-2 mb-4 rounded-md'>عضویت</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'> تمامی حقوق برای این شرکت محفوض است</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;