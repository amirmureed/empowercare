import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner1 from '../../directcare/Banner1/Banner1';
import Trusted from '../../Components/Trusted/Trusted';
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Userslider from '../../Components/Userslider/Userslider';
import PremierNuring from '../../directcare/PremierNuring/PremierNuring';
import CprStaffing from '../../directcare/CprStaffing/CprStaffing';
import Empowercare from '../../directcare/Empowercare/Empowercare';
import Staffingsolutions from '../../directcare/Staffingsolutions/Staffingsolutions';
import LeftContentRightImage from '../../directcare/LeftContentRightImage/LeftContentRightImage';
import AboutEmpower from '../../directcare/AboutEmpower/AboutEmpower';
import JoiningForm from '../../directcare/JoiningForm/JoiningForm';
import FaqAccordian from '../../directcare/FaqAccordian/FaqAccordian';
import './Home.scss';

const DirectCareCareers = () => {
  return (
    <>
        <Header />
        <Banner1 />
        <Trusted />
        <PremierNuring />
        <CprStaffing />
        <Empowercare />
        <Staffingsolutions />
        <LeftContentRightImage />
        <AboutEmpower />
        <JoiningForm />
        <CareerSlider />
        <FaqAccordian />
        <Userslider />
        <Footer />
    </>
  )
}

export default DirectCareCareers