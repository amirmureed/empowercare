import React from 'react';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import Banner2 from '../../Components/Banner2/Banner2';
import LeftRightContent from '../../Components/LeftRightContent/LeftRightContent';
import TextImageGroup from '../../Components/TextImageGroup/TextImageGroup';
import TextImageGroupV2 from '../../Components/TextImageGroupV2/TextImageGroupV2';
import TextImageGroupV3 from '../../Components/TextImageGroupV3/TextImageGroupV3';
import PriemerBlack from '../../Components/PremierHealthcareBlack/PriemerBlack';
import Form from "../../Components/Community/Form"
import Footer from '../../Components/Footer/Footer';
import bannerImg from '../../Assets/elipse2.png';
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import img from '../../Assets/banner3.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const About = () => {

  const bannerStyles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: '50% 39%',
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
          <Banner2 heading={'ABOUT EMPOWERCARE HEALTHCARE'} 
          description={'We ensure that every patient receives exceptional care, aiding in their swift recovery and promoting healthier lives.'}
          img={bannerImg}
          styles={bannerStyles}
          />
          
          <LeftRightContent />
          <TextImageGroup />
          <TextImageGroupV2 />
          <TextImageGroupV3 />
          <TextImageGroupV2 />
          <TextImageGroup />
          <TextImageGroupV2 />
          <PriemerBlack 
          heading1="Join Us in"
          heading2="Making a"
          heading3="difference in Healthcare "
          description="Act Fast! Apply by today is date + 5 to secure your exclusive spot! Seize this rare opportunity to join our prestigious network of Premier Healthcare Professionals within the next 5 days. Gain access to top-tier healthcare jobs, unparalleled support, and career-accelerating benefits. Here is what awaits you:"
          Redcolor={true}
          />
          <Form/>
          <Userslider2 />
          <Footer />
        </>
    )
}

export default About