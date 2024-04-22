import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Footer from '../../Components/Footer/Footer';
import Banner1 from '../../Components/Banner1/Banner1';
import Trusted from '../../Components/Trusted/Trusted';
import Toptalent from '../../Components/Toptalent/Toptalent';
import Choose from '../../Components/Choose/Choose';
import Impact from '../../Components/Impact/Impact';
import BoxesWithIcons from '../../Components/BoxesWithIcons/BoxesWithIcons';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths'
import Facilitynetwork from '../../Components/Facilitynetwork/Facilitynetwork'
import Staffingsolutions from '../../Components/Staffingsolutions/Staffingsolutions'
import Staffingsoptions from '../../Components/Staffingoptions/Staffingoptions'
import Empowercareacademy from '../../Components/Empowercareacademy/Empowercareacademy'
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Blog from '../../Components/Blog/Blog';
import Userslider from '../../Components/Userslider/Userslider';
import Realstoriesimpact from '../../Components/Realstoriesimpact/Realstoriesimpact'
import bannerImg from '../../Assets/facility.png';
import img from '../../Assets/banner5.png'
import empowercareimg from '../../Assets/Hiring-amico.png';
import empowercareimg2 from '../../Assets/man_6 copy.png';
import empowercareimg3 from "../../Assets/staff-solutions.png";
import './Home.scss';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
     
const Home = () => {
  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginTop: '-270px',
    backgroundColor: '#EBE0D3'
};
const content={
  "meta": "Who We Are",
  "heading1": "An",
  "heading2": "Extensive Network",
  "heading3": "Of PreScreened and",
  "heading4": "HIGHLY TRAINED HEALTHCARE PROFESSIONALS",
  "description": "At EmpowerCare, we offer a wide range of staffing options to meet your unique needs. Our extensive network of pre-screened healthcare opportunities includes:",
  "bullet1": "● Nursing Professionals",
  "bullet2": "● Allied Professionals",
  "bullet3": "● Advanced Practice",
  "bullet4": "● Mental Health Professionals",
  "bullet5": "● Direct Care Professionals",
  "bullet6": "● Non-Clinical Professionals",
  "bullet7": "● Executive Interim Leaders"
}
const content2={
  "meta": "STAFFING SOLUTIONS  ",
  "heading1": "EMPOWERCARE DELIVERS A ",
  "heading2": "WIDE RANGE OF",
  "heading3": "HEALTHCARE STAFFING SOLUTIONS",
  "description":"From single shifts to crisis staffing, EmpowerCare delivers a wide range of healthcare staffing solutions. We listen, work together, give advice, and assist your team in finding the best solutions for your staffing needs. With our Seamless Pledge and CPR Approach, we guarantee a hassle-free and Convenient, Personable, and Responsive staffing experience.",
   "btn":"Request Staffing Solutions"
}
  return (
    <>
      <HeaderWhite
          logoImg={logow}
          />
      <Banner1 heading={'Elevate Your Facility With Us'} 
          description={'Elevate Your Facility with EmpowerCares Staffing Solutions'}
          meta={'Empowering Healthcare Excellence for Over 18 Years'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          />
      
      <Trusted />
      <BoxesWithIcons />
      <Choose 
          facilities={true}
          firstDescription="Finding the Perfect Match Made Easy! Dynamic Squads"
          meta="Dynamic Squads"
          spantext = "healthcare"
          heading = "Why"
          headingafter = "facilities choose empowercare"
          description1 = "EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your staffing needs. Our personalized solutions help you achieve your patient care goals while optimizing your workforce."
          description2 = "Just like CPR breathes life into critical situations, our Dynamic Squads revitalize your staffing process." 
          boxHeading1="Convenient Staffing:"
            boxDescription1="We provide a full range of staffing solutions, covering all aspects of your professional requirements, making the process convenient for you."
            boxHeading2="Personable Approach:"
            boxDescription2="Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals."
            boxHeading3="Supportive Community:"
            boxDescription3="Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together."
          classes      = "black-bg"
      />
      <Impact position="box-center-aligned" />
      <Careerpaths
      heading1={'Finding the right Staff'}
      heading2={'For your'}
      heading3={'Facility,Confidently'}
      description={'With 18+ years of experience, EmpowerCares mission is empowering healthcare institutions and professionals through top-tier staffing solutions that transform lives, elevate care, and promote societal well-being.'}
      description2={'Celebrating over 1,000,000 shifts served, our vision is doubling theimpact to 2 million by 2031 - ensuring seamless operations forinstitutions and fulfilling opportunities for every healthcare professional'}
      img={empowercareimg}  
      btn1={'SIGNUP TO ELEVATE CARE WITH US'}    
            />
      <Toptalent />
      <Facilitynetwork 
      content={content}
      button = {true}
      img={empowercareimg2}
      
      
      
      />
      <Staffingsolutions 
      img={empowercareimg3}
      content={content2}
      />
      <Staffingsoptions 
      
      />
      <Empowercareacademy />
      <Realstoriesimpact />
      <CareerSlider />
      <Blog />
      <Userslider />
      <Footer />
    </>
  )
}

export default Home