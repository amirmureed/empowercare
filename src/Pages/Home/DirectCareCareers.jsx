import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner1 from '../../directcare/Banner1/Banner1';
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import Trusted from '../../Components/Trusted/Trusted';
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Userslider from '../../Components/Userslider/Userslider';
import CardsGreen from '../../Components/CardsGreen/CardsGreen';
import Empowercare from '../../directcare/Empowercare/Empowercare';
import SolutionsDesign from "../../Components/SolutionsDesign/SolutionsDesign"
import Staffingsolutions from '../../Components/Staffingsolutions/Staffingsolutions';
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import AboutEmpower from '../../directcare/AboutEmpower/AboutEmpower';
import JoiningForm from '../../directcare/JoiningForm/JoiningForm';
import StaffingProcess from '../../Components/StaffingProcess/StaffingProcess';
import FaqAccordian from '../../directcare/FaqAccordian/FaqAccordian';
import './Home.scss';

const DirectCareCareers = () => {
  return (
    <>
        <Header />
        <Banner1 />
        <Trusted />
        <TrustedPartner />
        <CardsGreen description1={'Unparalleled benefits of our per diem services include'}
           description2={'● Highly Skilled Healthcare Professionals'}
           description3={'● Skills Within Your Organization'}
           description4={'● Reduced Risk of Turnover'}
           description5={'● Immediate Staffing'}  
        />
        <CardsGreen description1={'Unparalleled benefits of our per diem services include'}
           description2={'● Highly Skilled Healthcare Professionals'}
           description3={'● Skills Within Your Organization'}
           description4={'● Reduced Risk of Turnover'}
           description5={'● Immediate Staffing'}  
        />
        <CardsGreen description1={'Unparalleled benefits of our per diem services include'}
           description2={'● Highly Skilled Healthcare Professionals'}
           description3={'● Skills Within Your Organization'}
           description4={'● Reduced Risk of Turnover'}
           description5={'● Immediate Staffing'}  
        />
        <SolutionsDesign/>
        <Empowercare />
        <Staffingsolutions />
        <StaffingProcess />
        <Guaranty />
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