import React from 'react';
import './footer.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { MDBFooter, MDBContainer, MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import './home.css'



  const Footer = () => {
    return (
        <div className=''>






      
      <section className='contact flex flex-col md:flex-row w-full gap-36 px-4 py-4 border-t-2
      border-solid border-[#c0c0c0] bg-gray-300'>
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




      {/* <MDBFooter className='bg-secondary text-white custom'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Footer Content</h5>
  
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                est atque cumque eum delectus sint!
              </p>
            </MDBCol>
  
            <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>
  
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
  
            <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
              <h5 className='text-uppercase mb-0'>Links</h5>
  
              <ul className='list-unstyled'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter> */}
      </div>
    );
  }
  export default Footer;