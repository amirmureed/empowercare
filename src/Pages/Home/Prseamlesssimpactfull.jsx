import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Banner1 from '../../Components/Banner1/Banner1';
import Trusted from '../../Components/Trusted/Trusted';
import Content_With_Button from '../../Components/Content_With_Button/Content_With_Button';
import Choose from '../../Components/Choose/Choose';
import Footer from '../../Components/Footer/Footer';
import Choose1 from '../../Components/Choose1/Choose1';
import Empowercare from '../../Components/Empowercare/Empowercare';
import PriemerBlack from '../../Components/PremierHealthcareBlack/PriemerBlack';
import Userslider from '../../Components/Userslider/Userslider';
import FaqAccordian from '../../Components/FaqAccordian/FaqAccordian';
import bannerImg from '../../Assets/seamless_banner_img.png';
import img from '../../Assets/bannerbg1.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths';
import empowercareimg from '../../Assets/Resume-amico.png'
import OurWorkingGreen from '../../Components/OurWorkingGreen/OurWorkingGreen';
const Prseamlesssimpactfull = () => {
  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50% 30%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginTop: '-225px',
    backgroundColor: '#EBE0D3'
  };
  return (
    <>
      <HeaderWhite
        logoImg={logow}
      />
      <Banner1 heading={'Seamless & Impactful'}
        description={'A Seamless and Impactful Alternative to Maxim Healthcare'}
        meta={'EmpowerCare is revolutionizing the way healthcare professionals find fulfilling job opportunities. We go beyond traditional staffing agencies by offering a seamless and impactful experience that puts your needs and aspirations first.'}
        bannerImg={bannerImg}
        styles={bannerStyles}
      />
      <Trusted />
      <OurWorkingGreen/>
      <Content_With_Button />
      <Choose
        meta="Why Choose Us"
        spantext="Squads:"
        heading="Dynamic"
        headingafter="Your cpr dynamic solution"
        description1="EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while making a meaningful impact in the lives of patients."
        description2=""
        boxHeading1="Convenient Placements:"
        boxDescription1="We provide a wide range of job opportunities that match your skills and preferences, making it convenient for you to find the perfect fit.."
        boxHeading2="Personable Support:"
        boxDescription2="Our dedicated team is committed to building strong relationships with you, providing guidance and support throughout your healthcare journey."
        boxHeading3="Responsive Advocacy:"
        boxDescription3="We are always ready to listen to your needs, address your concerns, and provide timely solutions to help you thrive in your career."
      />
      <Choose1
        meta="Why Choose Us"
        spantext="Pledge:"
        heading="Seamless"
        headingafter="Make an impact with every shift"
        description1="We believe that every shift is an opportunity to make a difference in people's lives. Our Seamless Pledge ensures that you can focus on what matters most - providing exceptional care and making a lasting impact."
      />
      <PriemerBlack 
          heading1="Elevate Your"
          heading2="Healthcare Career"
          heading3="with empowercare"
          description="Join EmpowerCare and embark on a transformative journey in your healthcare career. Our commitment to personalized excellence, combined with our Dynamic Squads and Seamless Pledge, sets us apart from traditional staffing companies. We empower you to find fulfillment, make a meaningful impact, and achieve your career aspirations."
          Redcolor={false}
          />
      <Careerpaths
        NoArrow={true}
        heading1={'A Movement That Goes'}
        heading2={'Beyond'}
        heading3={'Staffing'}
        description={'By choosing EmpowerCare, you become part of a movement that goes beyond staffing. Together, we can create a world where every healthcare professional finds joy and purpose in their work, knowing that they are making a difference in the lives of patients and communities.'}
        description2={'Lets support each other in transforming lives, elevating care, and promoting societal well-being, one shift at a time'}
        img={empowercareimg}
        btn1={'QUICK APPLY'}
      />
      <FaqAccordian />
      <Userslider />
      <Footer />
    </>
  )
}

export default Prseamlesssimpactfull