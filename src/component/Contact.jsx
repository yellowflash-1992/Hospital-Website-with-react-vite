import React from 'react';

const Contact = () => {
  return (
    <div>

      
      <h1 className='text-2xl text-center text-bold py-4'>CONTACT</h1>

<div className='flex flex-col md:flex-row gap-8 px-4 sm:px-8 lg:mx-28 w-full'>

  <div className='flex-1 '>

    <div className='h-auto min-h-[9rem] bg-white rounded-lg shadow-lg text-center py-3 overflow-hidden'>
    <h1 className='mt-10 text-4xl font-serif'>Our Address</h1>
    <p>No 3 alhaji haruna street, college road, Oroki, Oyo state</p>
    </div>

    <div className='flex flex-col md:flex-row gap-4 py-5'>
    <div className='h-auto min-h-[9rem] bg-white rounded-lg shadow-md w-full md:w-1/2 text-center py-2 overflow-hidden' >
    <h1 className='mt-8 text-4xl font-serif'>Call Us</h1>
    <p>+2348035570679 <br />
      +2348150372504</p>
    </div>

    <div className='h-auto min-h-[9rem] bg-white rounded-lg shadow-md w-full md:w-1/2 text-center py-2 overflow-hidden'>
    <h1 className='mt-8 text-4xl font-serif'>Email Us</h1>
    <p>Info@Opabodehospital.com
      contact@Opabodehospital.com</p>
    </div>
    </div>
  </div>

  <div className='flex-1 h-full bg-white rounded-lg shadow-md p-4 overflow-hidden'>
    <form action="" method="get" className=''>
      <div className='flex flex-col md:flex-row gap-3 py-4'>
      <input type="text" name="name" id="name1" placeholder='Your Name' className='border-2 border-solid
      border-gray-300 rounded-lg h-11 w-full p-3' />
      <input type="email" name="name" id="email1" placeholder='your email' className='border-2 border-solid
      border-gray-300 rounded-lg h-11 w-full p-3' />
      </div>

    <input type="text" name="sub" id="sub1" placeholder='subject' className='border-2 border-solid
      border-gray-300 rounded-lg h-11 w-full p-3 mt-3' />

      <textarea name="mess" id="mess1" placeholder='message' className='border-2 border-solid
      border-gray-300 rounded-lg min-h-[100px] sm:min-h-[140px] w-full p-3 mt-5 '></textarea>
    <div className='flex justify-center'>
<button type="submit" className='bg-green-600 hover:bg-green-700 transition-colors my-10 text-white font-bold
        rounded-lg h-10 w-full sm:w-auto sm:px-8'>Submit</button>
     </div>
    </form>
  </div>



</div>



    </div>
  );
};

export default Contact;