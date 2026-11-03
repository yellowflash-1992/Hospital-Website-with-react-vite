import React, { useState } from 'react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        s: '',
        time: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            alert('Please fill in your name and email.');
            return;
        }
        alert(`Thank you ${formData.name}, we will contact you shortly.`);
        setFormData({ name: '', email: '', phone: '', s: '', time: '', message: '' });
    };

    return (
        <div>
            <div>
                 <h1 className='text-center text-bold text-2xl'>Booking Form</h1>

                 <div className='bg-white rounded-lg w-full max-w-md mx-auto m-4 md:m-10 justify-center h-auto
                  shadow-md my-3'>
                    <form className='p-3' onSubmit={handleSubmit}> 

                        <div className='flex flex-col gap-4 md:flex-row md:gap-1 w-full'>

                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name1" value={formData.name} onChange={handleChange} 
                        className='rounded-lg border-solid border-black  border 
                        w-full h-10 p-3 font-serif font-bold' placeholder='Your Name' />

                         <label htmlFor="email"></label>
                        <input type="email" name="email" id="email1" value={formData.email} onChange={handleChange} 
                        className='rounded-lg border-solid border-black  border 
                        w-full h-10 p-3 font-serif font-bold' placeholder='Your Email' />

                         <label htmlFor="phone"></label>
                        <input type="tel" name="phone" id="phone1" value={formData.phone} onChange={handleChange} 
                        className='rounded-lg border-solid border-black  border 
                        w-full h-10 p-3 font-serif font-bold' placeholder='Your phone' />
                        </div>

                        <div className='flex flex-col gap-4 md:flex-row md:gap-1 w-full mt-8'>
<input type="date" name="s" id="appointment-date" value={formData.s} onChange={handleChange} className='border-solid border-black
                             border rounded-lg h-12 sm:h-14 w-full' />

<input type="time" name="time" id="t" value={formData.time} onChange={handleChange} className='h-12 sm:h-14 w-full border 
                             border-black rounded-lg' />

<textarea name="message" id="mess" value={formData.message} onChange={handleChange} className='min-h-[100px] sm:min-h-[140px] w-full 
                             border border-black rounded-lg' placeholder='Message'></textarea>
                        </div>

<button type="submit" className='bg-green-600 hover:bg-green-700 transition-colors my-10 text-white font-bold
                         rounded-lg h-10 w-full sm:w-auto sm:px-8'>Submit</button>

                    </form>
                 </div>
            </div>


        </div>
    );
};

export default Appointment;