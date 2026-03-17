import React from 'react';

const Appointment = () => {
    return (
        <div>
            <div>
                 <h1 className='text-center text-bold text-2xl'>Booking Form</h1>

                 <div className='bg-white rounded-lg w-[420px] mx-auto m-10 justify-center h-auto
                  shadow-md md:h-64 my-3  md:w-[90%] md:mx-auto'>
                    <form className='p-3'> 

                        <div className='flex flex-col gap-4 md:flex-row md:gap-1 w-full'>

                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name1" 
                        className='rounded-lg border-solid border-black  border 
                        w-full h-10 p-3 font-serif font-bold' placeholder='Your Name' />

                         <label htmlFor="email"></label>
                        <input type="email" name="email" id="email1" 
                        className='rounded-lg border-solid border-black  border 
                        w-full h-10 p-3 font-serif font-bold' placeholder='Your Email' />

                         <label htmlFor="phone"></label>
                        <input type="tel" name="phone" id="phone1" 
                        className='rounded-lg border-solid border-black  border 
                        w-full h-10 p-3 font-serif font-bold' placeholder='Your phone' />
                        </div>

                        <div className='flex flex-col gap-4 md:flex-row md:gap-1 w-full mt-8'>
                            <input type="date" name="s" id="" className='border-solid border-black
                            border rounded-lg h-16 w-full' />

                            <input type="time" name="time" id="t" className='h-16 w-full border 
                            border-black rounded-lg' />

                            <textarea name="message" id="mess" className='h-16 w-full 
                            border border-black rounded-lg' placeholder='Message'></textarea>
                        </div>

                        <button type="submit" className='bg-green-400 my-10 text-white font-bold
                        rounded-lg h-10 w-1/3'>Submit</button>

                    </form>
                 </div>
            </div>


        </div>
    );
};

export default Appointment;