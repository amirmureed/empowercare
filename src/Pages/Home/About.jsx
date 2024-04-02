import React from 'react';
import Header from '../../Components/Header/Header';
import Banner2 from '../../Components/Banner2/Banner2';
import LeftRightContent from '../../Components/LeftRightContent/LeftRightContent';
import TextImageGroup from '../../Components/TextImageGroup/TextImageGroup';
import TextImageGroupV2 from '../../Components/TextImageGroupV2/TextImageGroupV2';
import TextImageGroupV3 from '../../Components/TextImageGroupV3/TextImageGroupV3';
import PriemerBlack from '../../Components/PremierHealthcareBlack/PriemerBlack';
import Form from "../../Components/Community/Form"
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <>
          <Header />
          <Banner2 heading={'ABOUT EMPOWERCARE HEALTHCARE'} description={'We ensure that every patient receives exceptional care, aiding in their swift recovery and promoting healthier lives.'}/>
          <LeftRightContent />
          <TextImageGroup />
          <TextImageGroupV2 />
          <TextImageGroupV3 />
          <TextImageGroupV2 />
          <TextImageGroup />
          <TextImageGroupV2 />
          <PriemerBlack />
          <Form/>
          <Footer />
        </>
    )
}

export default About