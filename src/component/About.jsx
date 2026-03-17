import React from 'react';
import {pic1} from '../assets/images'



const About = () => {
    return (
      <div className='flex flex-col  md:flex-row w-full gap-4 px-5 py-5 '>
        
        <div className='flex-1'><img src={pic1} alt="" className='h-40 w-80' /></div>
        
        <div className='flex-1'>
        <h1 className='font-bold text-left'>About</h1>

        <p>
Opabode Hospital is a 26 bedded super hospital, the flagship hospital of Opabode Hospital happens to be the most 
preferred global healthcare destination. Located 53 minutes from Port Harcourt International Airport in Rivers
 State. Opabode Hospital is a state-of-the-art hospital with ultra-modern technology and Internationally 
 acclaimed Doctors. It provides world-class health services across all major Super Specialties’ delivering
  preventive, diagnostic, therapeutic, rehabilitative, palliative and supportive services all under one roof.<br/>

Driven by the motto of unto God with Excellence to provide affordable and accessible healthcare services,
 the Institute offers treatment to patients from over 50 countries. Having been ranked “Best Hospital” and 
 being reviewed consistently by patients for excellent medical service delivery, Opabode Hospital has been
  adjudged as one of the best hospitals in Rivers State by the Rivers State Ministry of Health. Through its
   quality consistent efforts for years altogether, Opabode is an emerging leader and delivers patient-focused
    healthcare touching and enriching lives ensuring the best patient experience possible through its doctors,
     nurses, and all other members committed to global excellence in patient care. <br/>

The Nigerian healthcare industry has left no stone unturned in its endeavour to deliver the best to the world.
 And at the forefront of this noble crusade is Opabode Hospital, built strongly on the values that Nigeria has
  nurtured and practiced</p>
      </div>
      </div>
      
    )
}
export default About