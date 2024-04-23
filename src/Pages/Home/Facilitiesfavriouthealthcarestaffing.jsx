import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Banner1 from '../../Components/Banner1/Banner1';
import Trusted from '../../Components/Trusted/Trusted';
import Choose from '../../Components/Choose/Choose';
import Footer from '../../Components/Footer/Footer';
import Choose1 from '../../Components/Choose1/Choose1';
import PriemerBlack from '../../Components/PremierHealthcareBlack/PriemerBlack';
import Userslider from '../../Components/Userslider/Userslider';
import OurWorkingGreen from '../../Components/OurWorkingGreen/OurWorkingGreen';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths'
import FaqAccordian from '../../Components/FaqAccordian/FaqAccordian';
import bannerImg from '../../Assets/banner1.png';
import img from '../../Assets/Group707.png' 
import empowercareimg from '../../Assets/Resume-amico.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
const Facilitiesfavriouthealthcarestaffing = () => {
  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50% 36%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginTop: '-268px',
    backgroundColor: '#EBE0D3'
};
    return (
        <>
          <HeaderWhite
          logoImg={logow}
          />
          <Banner1 
          heading={'Seamless & Impactful'} 
          description={'Your Gateway to Rewarding Contract Healthcare Careers'}
          meta={'Unlock Fulfilling Contract and Per Diem Opportunities That Go Beyond the Job Description'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          />
          <Trusted />
          <OurWorkingGreen />
          <Choose
            meta="Why Choose Us"
            spantext = "Squads:"
            heading = "Dynamic"
            headingafter = "Your cpr dynamic solution"
            description1 = "EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while making a meaningful impact in the lives of patients."
            description2 = ""
            boxHeading1="Convenient Staffing:"
            boxDescription1="We provide a full range of staffing solutions, covering all aspects of your professional requirements, making the process convenient for you."
            boxHeading2="Personable Approach:"
            boxDescription2="Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals."
            boxHeading3="Supportive Community:"
            boxDescription3="Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together."
          />
          <Choose1 
            meta="Why Choose Us"
            spantext = "Pledge:"
            heading = "Seamless"
            headingafter = "Make an impact with every shift"
            description1 = "We believe that every shift is an opportunity to make a difference in people's lives. Our Seamless Pledge ensures that you can focus on what matters most - providing exceptional care and making a lasting impact."
          />
          <PriemerBlack 
           heading1="Elevate Your"
           heading2="Healthcare Career"
           heading3="with empowercare"
           description="Join EmpowerCare and embark on a transformative journey in your healthcare career. Our commitment to personalized excellence, combined with our Dynamic Squads and Seamless Pledge, sets us apart from traditional staffing companies. We empower you to find fulfillment, make a meaningful impact, and achieve your career aspirations."
          Redcolor={false}
          />
          <Careerpaths 
          heading1={'Be part of our mission for a'}
          heading2={'Brighter'}
          heading3={'healthcare future'}
          description={'By choosing EmpowerCare, you become part of a movement that goesbeyond staffing. Together, we can create a world where every healthcareinstitution experiences seamless operations, and every healthcareprofessional finds fulfilling opportunities.'}
          description2={'Lets empower each other to transform lives, elevate care, and promotesocietal well-being, one shift at a time.'}
          img={empowercareimg}  
          btn1={'QUICK APPLY'} 
          />
          <FaqAccordian />
          <Userslider />
          <Footer />
        </>
    )
}

export default Facilitiesfavriouthealthcarestaffing