import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Assessing from "../../Components/Assessing/Assessing"
import DynamicSquads from "../../Components/DynamicSquads/DynamicSquads"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Stories from "../../Components/Stories/Stories"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/guide.png'
import img from '../../Assets/guideImg.png'
import Banner1 from "../../Components/Banner1/Banner1"
import CareerSlider from "../../Components/CareerSlider/CareerSlider"
import GuideCards from "../../Components/GuideCards/GuideCards"
import ResponsibilitiesSlider from "../../Components/ResponsibilitiesSlider/ResponsibilitiesSlider"
import HowtoBecome from "../../Components/HowtoBecome/HowtoBecome"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const Guidetelemetrynursing=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-295px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner1 heading={'Guide to General Nursing Careers'} 
          description={'Guide for Telemetry Nursing Careers: Pathways & Jobs'}
          meta={'A Telemetry Nurse, also known as a Progressive Care Unit (PCU) Nurse or Cardiac Monitoring Nurse, is a registered nurse who specializes in monitoring and caring for patients with heart conditions or other critical illnesses that require continuous electronic monitoring.'}
          bannerImg={bannerImg}
          styles={bannerStyles}
          />
    <Trusted/>
    <Assessing
    description={"These skilled professionals work in fast-paced environments, using advanced technology to track patients' vital signs, detect abnormalities, and intervene when necessary to ensure the best possible outcomes."}
    />
    
    <HowtoBecome
     mhead1={"TELEMETRY NURSE:"}
     heading1={"Register Telemetry Nurse "}
     description1={"To become a Telemetry Nurse, you must first earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam."}
     description2={"●PCCN (Progressive Care Certified Nurse)"}
     description3={"EmpowerCare offers a wide range of opportunities for Telemetry Nurses, including telemetry nurse jobs, PCU nursing positions, cardiac monitoring contract jobs, per diem stepdown nurse jobs, and travel nursing assignments. "}
     description4={"Our goal is to empower you to find the perfect position that aligns with your skills, experience, and career goals while providing efficient and caring support throughout your journey."}
    />
    <ResponsibilitiesSlider/>
    <GuideCards/>
    <FaqAccordian/>
    <DynamicSquads/>
    <AboutEmpowercare/>
    <Stories/>
    <FaqAccordian/>
    <Userslider/>
    <Footer/>
    </>)
}
export default Guidetelemetrynursing