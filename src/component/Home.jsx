import React from 'react';
import './home.css';
import {useState, useEffect} from "react"
import hospital from '../assets/hospital.mp4'
import { pic1, pic2,pic3,pic4,pic5,pic6} from "../assets/images";
import GalleryCarousel from './Modes/GalleryCarousel'


// import {
//   Carousel,
//   initTE,
// } from "tw-elements";

// initTE({ Carousel });


const Home = () => {


const stories = [
  {
    id:1,
    title:`Opabode Hospital's Cardiology Department is a cornerstone
     of excellence in heart care, dedicated to providing comprehensive and state-of-the-art cardiac services.`,
    summary: (
      <>
      <strong className='font-bold text-black'> Cardiology</strong> <br /> Led by a team of renowned cardiologists and equipped with 
      cutting-edge technology
      </>
    ),
    image:pic1,
    content: `The Cardiology department at Opabode Hospital is dedicated to delivering comprehensive and 
    advanced cardiac care to patients. With a team of highly skilled cardiologists and state-of-the-art 
    facilities, they provide a wide range of diagnostic and treatment services for various cardiovascular 
    conditions. From preventive screenings to interventional procedures, the cardiology department offers a
     holistic approach to managing heart health. With cutting-edge technology and a patient-centered approach,
      they strive to improve patient outcomes and enhance the overall well-being of individuals with 
      heart-related issues. Whether it's managing chronic conditions or providing emergency cardiac care,
       opabodeo Hospital's cardiology department is committed to delivering excellence
     in cardiac healthcare, ensuring that patients receive the highest level of specialized treatment and care.`
  },
  {
    id:2,
    title:`Opabode Hospital's Neurology Department is a leading center of excellence, dedicated 
    to providing cutting-edge care and comprehensive solutions for patients with neurological disorders`,
    summary: (
      <>
      <strong className='font-bold text-black'> Neurology</strong> <br /> Led by a team of highly skilled 
      and experienced neurologists,committed to research and innovation
      </>
    ),
    image:pic2,
    content: `Opabode Hospital's Neurology Department is a center of excellence for comprehensive neurological 
    care, providing expert diagnosis, treatment, and management of a wide range of neurological disorders. 
    Led by highly skilled neurologists, the department utilizes advanced diagnostic technologies and 
    state-of-the-art facilities to deliver accurate and precise evaluations. From neurological examinations 
    to specialized imaging studies, patients receive thorough assessments to guide personalized treatment plans.
     The department offers cutting-edge interventions for conditions such as stroke, epilepsy, Parkinson's 
     disease, and multiple sclerosis, ensuring optimal outcomes and improved quality of life. With a strong 
     focus on patient-centered care, the Neurology Department at Opabode Hospital is committed to delivering 
    compassionate support and empowering patients to navigate their neurological conditions with confidence.`
  },
  {
    id:3,
    title:`Opabode Hospital's Hepatology Department stands as a center of excellence 
    for liver care, offering specialized and comprehensive services to patients with liver diseases.`,
    summary: (
      <>
      <strong className='font-bold text-black'> Hepatology</strong> <br /> Led by a team of accomplished 
      hepatologists and supported facilities
      </>
    ),
    image:pic3,
    content: `Opabode Hospital's Hepatology Department is a center of excellence dedicated to the diagnosis, 
    treatment, and management of liver diseases. Led by a team of highly skilled hepatologists, the department offers comprehensive care for patients with various liver conditions, including hepatitis, liver cirrhosis, liver cancer, and other liver-related disorders. With state-of-the-art diagnostic tools and advanced treatment modalities, including liver transplantation, the department ensures accurate diagnosis, personalized treatment plans, and ongoing monitoring to optimize patient outcomes. The hepatologists collaborate closely with multidisciplinary teams, including surgeons, radiologists, and oncologists, to provide holistic care and tailor interventions to individual needs. Opabode Hospital's Hepatology Department is committed to improving liver health, enhancing quality of life, and making a positive impact in the lives of patients affected by liver diseases.

T`
  },
  {
    id:4,
    title:`Opabode Hospital's Pediatrics Department is a trusted provider of specialized and compassionate
     care for children.`,
    summary:  (
      <>
      <strong className='font-bold text-black'>  Pediatrics</strong> <br />Led by team of 
      highly skilled pediatricians and dedicated pediatric nurses.
      </>
    ),
    image:pic4,
    content: `Opabode Hospital's Pediatrics Department is a pillar of compassionate and specialized care for 
    children, offering comprehensive healthcare services from infancy to adolescence. Led by a team of 
    dedicated pediatricians, the department is committed to providing exceptional medical attention, promoting 
    the well-being and development of every child. With child-friendly examination rooms, advanced diagnostic 
    tools, and a nurturing environment, they ensure accurate diagnoses and effective treatment for a wide 
    range of pediatric conditions. From routine check-ups to specialized care for complex diseases, the 
    Pediatrics Department focuses on holistic healthcare, emphasizing preventive measures, immunizations, 
    and parental education. Opabode Hospital's Pediatrics Department is a trusted resource
     for families, providing expert care that ensures the health and happiness of every child in their care.`
  }
];

const[selectedStory, setSelectedStory] = useState(stories[0]);

//for the last cards
const originalCards = [
  {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec nec condimentum orci. Fusce congue pulvinar libero. Sed ut mauris aliquam, laoreet nisi at, 
    tempus ligula. Phasellus vel neque nec turpis rhoncus ultrices a nec felis. Interdum et malesuada 
    fames ac ante ipsum primis in faucibus. Nam non molestie nisi, sit amet eleifend velit. Quisque ac 
    diam quis augue pretium porta eget eu nisl. Phasellus rhoncus diam lorem, eu scelerisque ex suscipit 
    sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc 
    malesuada luctus consectetur. Fusce at nisl vel augue faucibus scelerisque. Praesent in bibendum ante. 
    Morbi feugiat tincidunt posuere.`,
    bottom: <img src={pic1} alt='' className='h-20 w-20 rounded-full border-none border-white object-cover'/>
  },
   {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec nec condimentum orci. Fusce congue pulvinar libero. Sed ut mauris aliquam, laoreet nisi at, 
    tempus ligula. Phasellus vel neque nec turpis rhoncus ultrices a nec felis. Interdum et malesuada 
    fames ac ante ipsum primis in faucibus. Nam non molestie nisi, sit amet eleifend velit. Quisque ac 
    diam quis augue pretium porta eget eu nisl. Phasellus rhoncus diam lorem, eu scelerisque ex suscipit 
    sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc 
    malesuada luctus consectetur. Fusce at nisl vel augue faucibus scelerisque. Praesent in bibendum ante. 
    Morbi feugiat tincidunt posuere.`,
    bottom: <img src={pic2} alt='' className='h-20 w-20 rounded-full border-2 border-white object-cover'/>
  },
    {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec nec condimentum orci. Fusce congue pulvinar libero. Sed ut mauris aliquam, laoreet nisi at, 
    tempus ligula. Phasellus vel neque nec turpis rhoncus ultrices a nec felis. Interdum et malesuada 
    fames ac ante ipsum primis in faucibus. Nam non molestie nisi, sit amet eleifend velit. Quisque ac 
    diam quis augue pretium porta eget eu nisl. Phasellus rhoncus diam lorem, eu scelerisque ex suscipit 
    sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc 
    malesuada luctus consectetur. Fusce at nisl vel augue faucibus scelerisque. Praesent in bibendum ante. 
    Morbi feugiat tincidunt posuere.`,
    bottom: <img src={pic3} alt='' className='h-20 w-20 rounded-full border-2 border-white object-cover'/>
  }, 
    {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec nec condimentum orci. Fusce congue pulvinar libero. Sed ut mauris aliquam, laoreet nisi at, 
    tempus ligula. Phasellus vel neque nec turpis rhoncus ultrices a nec felis. Interdum et malesuada 
    fames ac ante ipsum primis in faucibus. Nam non molestie nisi, sit amet eleifend velit. Quisque ac 
    diam quis augue pretium porta eget eu nisl. Phasellus rhoncus diam lorem, eu scelerisque ex suscipit 
    sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc 
    malesuada luctus consectetur. Fusce at nisl vel augue faucibus scelerisque. Praesent in bibendum ante. 
    Morbi feugiat tincidunt posuere.`,
    bottom: <img src={pic4} alt='' className='h-20 w-20 rounded-full border-2 border-white object-cover'/>
  }, 
    {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec nec condimentum orci. Fusce congue pulvinar libero. Sed ut mauris aliquam, laoreet nisi at, 
    tempus ligula. Phasellus vel neque nec turpis rhoncus ultrices a nec felis. Interdum et malesuada 
    fames ac ante ipsum primis in faucibus. Nam non molestie nisi, sit amet eleifend velit. Quisque ac 
    diam quis augue pretium porta eget eu nisl. Phasellus rhoncus diam lorem, eu scelerisque ex suscipit 
    sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc 
    malesuada luctus consectetur. Fusce at nisl vel augue faucibus scelerisque. Praesent in bibendum ante. 
    Morbi feugiat tincidunt posuere.`,
    bottom: <img src={pic5} alt='' className='h-20 w-20 rounded-full border-2 border-white object-cover'/>
  }, 
    {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec nec condimentum orci. Fusce congue pulvinar libero. Sed ut mauris aliquam, laoreet nisi at, 
    tempus ligula. Phasellus vel neque nec turpis rhoncus ultrices a nec felis. Interdum et malesuada 
    fames ac ante ipsum primis in faucibus. Nam non molestie nisi, sit amet eleifend velit. Quisque ac 
    diam quis augue pretium porta eget eu nisl. Phasellus rhoncus diam lorem, eu scelerisque ex suscipit 
    sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc 
    malesuada luctus consectetur. Fusce at nisl vel augue faucibus scelerisque. Praesent in bibendum ante. 
    Morbi feugiat tincidunt posuere.`,
    bottom: <img src={pic6} alt='' className='h-20 w-20 rounded-full border-2 border-white object-cover'/>
  },
];

const [visibleCards, setVisibleCards]=useState(3);



const[index, setIndex] = useState(0);
const [paused, setPaused] = useState(false);
const [transition, setTransition] = useState(true);
// const intervalRef = useRef(null);


 useEffect(() => {
    const updateVisible = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, []);


  const cards = [...originalCards,...originalCards.slice(0,visibleCards)];

useEffect(() => {
  if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    if (index === originalCards.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 700);
    }



   if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [index, originalCards.length, transition]);



    return (
      <div className="grid grid-cols-1 gap-8">

        <header>
      <video src={hospital} autoPlay muted loop style={{height:'100vh',width:'100%', objectFit:'cover'}} />
      </header>
      <br />
      <hr />

<hr className='border-zinc-800 ' />
 <section className='hero flex flex-col md:flex-row w-full overflow-x-hidden '>
  
      
      <div className="w-full md:w-1/2 py-5 wells">
      <h1 className="text-4xl text-blue-600 font-bold font-serif mb-2" id="wel1">Why Choose <br /><span className='op'> Opabode Hospital?</span></h1><br />
      <a href="#" className='btn bg-yellow-500 hover:bg-yellow-800 text-white font-bold py-2 px-3 rounded'>Learn More</a>
      </div>
      
      
      <div className="cont1 w-full md:w-6/6 grid grid-cols-1 sm:grid-cols-2 gap-4   ">          
    

        <div className="bg-green-200 rounded-lg shadow-lg p-4  min-h-[200px] animate-fadeUp w-full ">
          <h2 className='text-2xl  font-bold mb-4 mt-12'>More experience</h2>
        <p>The million patients we treat each year 
          prepares us to treat the one who matters most — you.</p>
        
        </div>

        
        <div className="bg-green-200 rounded-lg shadow-lg p-4 min-h-[200px] animate-fadeUp w-full ">
          <h2 className='text-2xl font-bold mb-4 mt-12'>You come first</h2>
        <p>Treatment at Opabode Clinic is a truly human experience. 
          You're cared for as a person first.</p>
        
        </div>
        
        <div className="card bg-green-200 rounded-lg shadow-lg p-4 min-h-[200px] animate-fadeUp w-full">
          <h2 className='text-2xl font-bold mb-4 mt-12' >The right answers</h2>
        <p>Count on our experts to deliver an accurate diagnosis 
          and the right plan for you the first time.</p>
        </div>
        
        
        <div className="card bg-green-200 rounded-lg shadow-lg p-4 min-h-[200px] animate-fadeUp w-full ">
          <h2 className='text-2xl font-bold mb-4 mt-12'>Innovation with impact</h2>
        <p>All of our patient care, education and research
           are driven to make discoveries that can help heal you.</p>
        </div>
    
      </div>
       
      <br />
      
</section>

<section className='core bg-yellow-300 dark:bg-slate-800 py-4'>
      
      <h1 id='tab' className='text-4xl text-center font-bold font-serif'>Our Core Values</h1><br />
       <div className='max-w-3x1 mx-auto px-6 '>
      

        <div className='space flex justify-center gap-6 sm:gap-12 md:gap-20 text-left'>
        <div className='half1 space-y-2'>
          <div className='text-white text-xl font-serif font-bold first1'>Compassion</div>
          <div className='text-white text-xl font-serif font-bold first1'>Dedication</div>
          <div className='text-white text-xl font-serif font-bold first1'>Integrity</div>
          <div className='text-white text-xl font-serif font-bold first1'>Team Work</div>
          <div className='text-white text-xl font-serif font-bold first1'>Excellence</div>
          </div>

          <div className='half2 space-y-2'>
          <div className='text-white text-xl font-serif font-bold second1'>Transparency</div>
          <div className='text-white text-xl font-serif font-bold second1'>Godliness</div>
          <div className='text-white text-xl font-serif font-bold second1'>Partnership1</div>
          <div className='text-white text-xl font-serif font-bold second1'>Patient Centerdness</div>
          <div className='text-white text-xl font-serif font-bold second1'>Partnership</div>
        </div>
        </div>
      
      
           
              
                {/* <table className='table-auto w-full text-center border-separate border-spacing-y-4'>
                    <tr>
                        <td className='text-white text-xl font-serif font-bold  '>Compassion</td>
                        <td className='text-white text-xl font-serif font-bold  '>Transparency</td>
                    </tr>
                    <tr>
                        <td className='text-white text-xl font-serif font-bold'>Dedication</td>
                        <td className='text-white text-xl font-serif font-bold'>Godliness</td>
                    </tr>
                    <tr>
                        <td className='text-white text-xl font-serif font-bold'>Integrity</td>
                        <td className='text-white text-xl font-serif font-bold'>Partnership</td>
                    </tr>
                    <tr>
                        <td className='text-white text-xl font-serif font-bold'>Team Work</td>
                        <td className='text-white text-xl font-serif font-bold'>Patient centeredness</td>
                    </tr>
                    <tr>
                        <td className='text-white text-xl font-serif font-bold'>Excellence</td>
                        <td className='text-white text-xl font-serif font-bold'>Partnership</td>
                    </tr>
                </table> */}
      
      
      </div>
</section>


<section className='our-team py-6'>

      <div>
        <h1 className='text-4xl text-center font-bold font-serif'>OUR TEAM</h1><br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg gap-4 px-4">

        <div className="bg-zinc-400 border-2 border-green-800 rounded-lg shadow-md p-4 w-full flex 
        flex-col md:flex-row ">
          <img src={pic1} alt="" className='h-40 w-40 mr-32 rounded-t-xl border-2 border-green-800' />
          <div className='m'>
          <h2 className='text-2xl font-bold mb-5'>Dr. Aniefiok McCarthy</h2>
        <p>Medical Director and CEO.</p>
        </div>
        </div>

         <div className="bg-zinc-400 border-2 border-green-800 rounded-lg shadow-md p-4 w-full flex 
         flex-col md:flex-row ">
          <img src={pic2} alt="" className='h-40 w-40 mr-32 rounded-t-xl border-2 border-green-800' />
          <div>
          <h2 className='text-x1 font-bold mb-2'>Dr. (Mrs) Waribo Helen A.</h2>
        <p>Medical Laboratory Scientist.</p>
        </div>
        </div>

         <div className="bg-zinc-300 border-2 border-green-800 rounded-lg shadow-md p-4 w-full 
         flex flex-col md:flex-row">
          <img src={pic3} alt="" className='h-40 w-40 mr-32 rounded-t-xl border-2 border-green-800' />
          <div>
          <h2 className='text-x1 font-bold mb-2'>McCarthy Mfon Esq. CiArb</h2>
        <p>Legal Officer/HRM.</p>
        </div>
        </div>

         <div className="bg-zinc-300 border-2 border-green-800  rounded-lg shadow-md p-4 w-full
          flex flex-col md:flex-row">
          <img src={pic4} alt="" className='h-40 w-40 mr-32 rounded-t-xl border-2 border-green-800' />
          <div>
          <h2 className='text-x1 font-bold mb-2'>Dr. (Mrs) Ngerebara Unyime M</h2>
        <p>Anesthesiologist.</p>
        </div>
        </div>

         <div className="bg-zinc-400 border-2 border-green-800 rounded-lg shadow-md p-4 w-full flex flex-col md:flex-row">
          <img src={pic5} alt="" className='h-40 w-40 mr-32 rounded-t-xl border-2 border-green-800' />
          <div>
            <h2 className='text-x1 font-bold mb-2'>Dr. (Mrs) Iwara Komommo</h2>
        <p>Obstetrics and Gynecology.</p>
        </div>
        </div>

         <div className="bg-zinc-400 border-2 border-green-800 rounded-lg shadow-md p-4 w-full flex flex-col md:flex-row">
          <img src={pic6} alt="" className='h-40 w-40 mr-32 rounded-t-xl border-2 border-green-800' />
          <div>
          <h2 className='text-x1 font-bold mb-2'>Mrs Juliet Uchenna</h2>
        <p>Nurse.</p>
        </div>
        </div>

        
        
      </div>
      
      </div>
</section>

      <section className='awards bg-blue-500'>
        <div className='flex flex-col md:flex-row w-full gap-4 px-4 py-4 text-center text-4xl text-white'>

        <div className="bg-red-700 rounded-lg shadow-md p-4 w-full">
          <h2 className='text-x1 font-bold mb-2'>Doctors</h2>
        <p>20</p>
        </div>
         <div className="bg-blue-600 rounded-lg shadow-md p-4 w-full">
          <h2 className='text-x1 font-bold mb-2'>Awards</h2>
        <p>30.</p>
        </div>
         <div className="bg-orange-400 rounded-lg shadow-md p-4 w-full">
          <h2 className='text-x1 font-bold mb-2'>Laboratory</h2>
        <p>5</p>
        </div>
         <div className="bg-cyan-800 rounded-lg shadow-md p-4 w-full">
          <h2 className='text-x1 font-bold mb-2'>Departments</h2>
        <p>10</p>
        </div>
        </div>
      </section>



      <section className='gallery '>

<div className="w-full flex flex-col items-center ">
<h1 className='text-4xl text-center font-bold font-serif py-3'>GALLERY</h1>

       <div className="w-full py-5 px-4">
      <GalleryCarousel />
    </div>
        
        {/* <div>
          
                  <div>

                     <div className="slideshow-container">

            <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src={pic1} alt="doctor"  className="p"  />
                <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <img src={pic2} alt="doctor" className="p"  />
                <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={pic3} alt="doctor" className="p"  />
                <div className="text">Caption Three</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={pic4} alt="doctor" className="p" />
                <div className="text">Caption Three</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={pic5} alt="doctor" className="p" />
                <div className="text">Caption Three</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={pic6} alt="doctor" className="p" />
                <div className="text">Caption Three</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={pic7} alt="doctor" className="p" />
                <div className="text">Caption Three</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={pic8} alt="doctor" className="p" />
                <div className="text">Caption Three</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src={pic9} alt="doctor" className="p" />
                <div className="text">Caption Three</div>
            </div>

        </div>
        <br />

        <div className="text-align:center">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div><br />


                  </div>

        </div> */}
</div>
      </section>



      <section className='service mt-0 md:mt-16' >
        <div>
          <h1 className='service text-4xl text-center font-bold font-serif py-5'>SERVICES</h1>
          <p className='px-5'>Opabode Hospital provides patients with access to the finest and the most 
            advanced care in the region across a wide range of services in all medical specialties.
             Integrating the power of the human touch with the efficacy of the technology, every 
             member of the team is trained to understand the 
            emotional needs of the patient and his/her family and make empathy a part of
             their core delivery parameters.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-5 py-4 mt-5 text-center">

          <div className="relative bg-gray-50 border border-gray-100 p-5  transition-all 
          duration-300 ease-out shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:-translate-y-4 hover:scale-[1.02]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.08),0_30px_60px_rgba(0,0,0,0.18)] hover:z-20">
          <h2 className='text-4xl  mb-5'>General Surgery</h2>
        <p>The General Surgery unit at opabode Hospital is a pillar of surgical excellence,
           offering comprehensive and advanced surgical interventions for a wide range of conditions.</p>
        </div>

        <div className="relative bg-gray-50 border border-gray-100 p-5  transition-all 
          duration-300 ease-out shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:-translate-y-4 hover:scale-[1.02]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.08),0_30px_60px_rgba(0,0,0,0.18)] hover:z-20">
          <h2 className='text-4xl  mb-5'>Pediatrics & Child Care</h2>
        <p>The Pediatrics & Child Care unit at Opabode Hospital is a beacon 
          of hope for children and families, providing exceptional medical care and nurturing support.</p>
        </div>

        <div className="relative bg-gray-50 border border-gray-100 p-5  transition-all 
          duration-300 ease-out shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:-translate-y-4 hover:scale-[1.02]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.08),0_30px_60px_rgba(0,0,0,0.18)] hover:z-20">
          <h2 className='text-4xl mb-5'>Accident and Emergency</h2>
        <p>The Accident and Emergency unit at Opabode Hospital is a lifeline in 
          times of crisis, delivering urgent and efficient medical care when it matters most..</p>
        </div>

        <div className="relative bg-gray-50 border border-gray-100 p-5  transition-all 
          duration-300 ease-out shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:-translate-y-4 hover:scale-[1.02]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.08),0_30px_60px_rgba(0,0,0,0.18)] hover:z-20">
          <h2 className='text-4xl mb-5'>Internal/Family medicine</h2>
        <p>The Internal/Family Medicine unit at Opabode Hospital is dedicated to providing holistic and personalized
           care for individuals of all ages, focusing on preventive medicine and managing chronic conditions.</p>
        </div>

        <div className="relative bg-gray-50 border border-gray-100 p-5  transition-all 
          duration-300 ease-out shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:-translate-y-4 hover:scale-[1.02]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.08),0_30px_60px_rgba(0,0,0,0.18)] hover:z-20">
          <h2 className='text-4xl mb-5'>Dialysis unit</h2>
        <p>The Dialysis unit at Opabode Hospital is a lifeline for patients with kidney disease,
           offering state-of-the-art facilities and specialized care to ensure optimal dialysis treatment.</p>
        </div>

        <div className="relative bg-gray-50 border border-gray-100 p-5  transition-all 
          duration-300 ease-out shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:-translate-y-4 hover:scale-[1.02]
          hover:shadow-[0_10px_20px_rgba(0,0,0,0.08),0_30px_60px_rgba(0,0,0,0.18)] hover:z-20">
          <h2 className='text-4xl mb-5'>Ambulance Services</h2>
        <p>The Ambulance Services at Opabode Hospital provide rapid response and critical
           care transportation, ensuring timely and efficient transfer of patients in emergency situations.</p>
        </div>

        
        </div>
      </section>



    
      <section className='department px-3'>
          <h1 className="text-4xl text-center font-bold font-serif py-5">DEPARTMENT</h1>
          <p>Opabode Hospital is proud to offer a wide range of specialized departments that cater to diverse 
            healthcare needs. The Pediatrics & Child Care unit stands as a beacon of hope for children and 
            families,
             providing exceptional medical care in a child-friendly environment. The Accident and 
             Emergency unit serves as a lifeline during emergencies, 
            delivering urgent and efficient medical care with skilled physicians and state-of-the-art resources.</p>

        <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-[20%_80%] md:grid-rows-4">

          {stories.map((story, index) =>(
            <div
            key={story.id}
            onClick={()=> setSelectedStory(story)}
            className={`p-4 cursor-pointer rounded transition-all duration-300 md:row-start-${index + 1}
            ${selectedStory.id === story.id 
              ? "bg-gray-600 text-white scale-105 shadow-lg" 
              : "bg-gray-300 hover:bg-gray-400 hover:scale-102"}
            `}>
               {story.summary}
              </div>
          ))}

          {/*right full story */}

          <div className="bg-white p-6 shadow md:col-start-2 md:row-start-1 md:row-span-4 overflow-hidden">

            <div key={selectedStory.id} className="bg-white p-6 shadow rounded transform transition-all 
            duration-500 ease-out animate-grow">

            <img src={selectedStory.image} alt='' className="w-full mb-4 rounded shadow
            md:w-[200px] md:float-right md:ml-4"/>

            <h2 className="text-xl font-bold mb-4">{selectedStory.title}</h2>

            <p className="text-gray-700 leading-relaxed">{selectedStory.content}</p>
            </div>
          </div>

          {/* <div className="bg gray 300 " ><h3 className="font-bold text-2xl">Cardiology</h3>
            <p>Led by a team of renowned cardiologists and equipped with cutting-edge technology</p></div>

          <div className="bg gray 300 "><h3 className="font-bold text-2xl">Neurology</h3>
           <p> Led by a team of highly skilled and experienced neurologists,committed to research 
            and innovation</p></div>

          <div className="bg gray 300"><h3 className="font-bold text-2xl">Hepatology</h3>
           <p>Led by a team of accomplished hepatologists and supported facilities</p></div>

          <div className="bg gray 300 "><h3 className="font-bold text-2xl">Pediatrics</h3>
           <p>Led by team of highly skilled pediatricians and dedicated pediatric nurses.</p></div>


          <div className="bg-white p-6 shadow md:col-start-2 md:row-start-1 md:row-span-4">
            <p>sgilsjgi aeflhsfiofi dfksuj dffhslf dnhadif ladfi adfhoa advnadlfaijh dhfuiddf ujehfie</p>
            <img src={pic1} alt=''/>
            <p>and other texts goes here and there too right?</p>
          </div> */}
        </div>
      </section>


      <section className='testimonials py-7 mx-5 mr-0'>
       <div>
        <div className='w-full' onMouseEnter={()=> setPaused(true)} 
          onMouseLeave={()=> setPaused(false)}>

            <div  className={`flex ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}>
            {cards.map((card, i) =>(
              <div key={i} className='flex-shrink-0 w-full h-[450px] md:w-1/3 px-2'>
             
              <div className=' bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm 
               hover:shadow-xl transition-all
              duration-300 cursor-pointer overflow-hidden line-clamp-3 h-full '> {card.title} </div>
              
             
             
              <div className="px-4 -mt-7 mr-60 shadow-sm  
              flex items-center justify-center"> {card.bottom} </div>
              </div>
            ))};
            
            </div>  
            
          </div>
          
       </div>
      </section>


      <section className='map bg-gray-100 py-12'>
        <div className="max-w-6xl mx-auto px-4">
          <div className='rounded-2xl overflow-hidden shadow-lg h-[400px]'>
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.276484639724!2d3.9115976740383287!3d7.86610880610889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10375a0f9f582d05%3A0xcdc63746327e0205!2sOpabode%20Memorial%20Hospital!5e0!3m2!1sen!2sng!4v1771259159028!5m2!1sen!2sng"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
          </div>
        </div>
      </section>
{/* 
      <section className='contact flex flex-col md:flex-row w-full gap-36 px-4 py-4'>
        <div className='space-y-2'>
          <h1 className='text-xl font-bold font-serif py-3'>Opabode Hospital</h1>
          <p>No 3 alhaji haruna street, college road, Oroki, Oyo state</p>
          <p>Phone:+234 803 991 0679</p>
          <p>Email1: info@opabodehospital.com</p>
          <p>Email2: contact@opabodehospital.com</p>
        </div>

        <div className='flex flex-col items-start -ml-20 md:ml-0 space-y-2 px-20 sm:flex-col'>
          <h2 className='text-xl font-bold font-serif py-3'>Useful Links</h2>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
          <a href="#">Department</a>
        </div>

        <div className='space-y-2'>
          <h2 className='text-xl font-bold font-serif py-3'>Our Services</h2>
          <p>Ambulance</p>
          <p>Laboratory</p>
          <p>X-ray</p>
          <p>Scan</p>
          <p>Neonatal Care</p>
        </div>
      </section>


      <section className='footer bg-blue-950'>
        <div className='text-bold text-center text-white'>
          <p>© Copyright opabodehospital 2026. All Rights Reserved</p>
          <p>Designed by yellowflash</p>
        </div>
      </section>

 */}



      </div>
    );
};

export default Home