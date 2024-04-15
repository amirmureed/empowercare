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
import empowercareimg from '../../Assets/In the office-amico.png';
import './Home.scss';

const DirectCareCareers = () => {
  return (
    <>
        <Header />
        <Banner1 />
        <Trusted />
        <TrustedPartner 
        button={true}
        anchor={false}
        img={empowercareimg}
        meta={'Who We Are'} 
        heading1={'EMPOWERCARE IS YOUR'} 
        heading2={'TRUSTED'}
         heading3={'PARTNER'} 
         description1={'EmpowerCare is your trusted partner for non-clinical staffing services. We understand the crucial role that skilled non-clinical professionals play in ensuring the smooth operation of your healthcare facility.'} 
         description2={'Our extensive network of pre-screened, highly trained sitters, compassionate professionals, receptionists, administrative staff, and experienced nurses and CNAs for non-clinical roles ensures you have the right talent to support your facility  operational efficiency and patient experience.'}
        
        
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