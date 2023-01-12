import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>something</p>
            </div>
            <div>
              <p>Hello! My name is Aman and I enjoy creating things that live on the internet. My interest in web development started back when I was kid and we learned about HTML which made me wanted to learn how to make my own websites look like those on the internet. I love creating visual and interactive designs that engage the user. My goal is to bring your ideas to life on the web.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
