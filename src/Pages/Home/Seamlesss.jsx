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
const Seamlesss = () => {
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
          <HeaderWhite />
          <Banner1 heading={'Seamless & Impactful'} 
          description={'A Seamless and Impactful Alternative to Maxim Healthcare'}
          meta={'EmpowerCare is revolutionizing the way healthcare professionals find fulfilling job opportunities. We go beyond traditional staffing agencies by offering a seamless and impactful experience that puts your needs and aspirations first.'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          />
          <Trusted />
          <Content_With_Button />
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
          <PriemerBlack />
          <Empowercare />
          <FaqAccordian />
          <Userslider />
          <Footer />
        </>
    )
}

export default Seamlesss