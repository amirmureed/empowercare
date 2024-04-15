import Approach from "../../Components/Approach/Approach"
import Banner10 from "../../Components/Banner10/Banner10"
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Toptalent from "../../Components/Toptalent/Toptalent"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import SolutionsDesign from "../../Components/SolutionsDesign/SolutionsDesign"
import StaffingServices from "../../Components/StaffingServices/StaffingServices"
import PartneringBenefits from "../../Components/PartneringBenefits/PartneringBenefits"
import Spotlights from "../../Components/Spotlights/Spotlights"
import AboutusSnippet from "../../Components/AboutUsSnippet/AboutusSnippet"
import FacilityOperations from "../../Components/FacilityOperations/FacilityOperations"
import JoiningForm from "../../directcare/JoiningForm/JoiningForm"
import Blog from "../../Components/Blog/Blog"
import bannerImg from '../../Assets/Group 581.png';
import img from '../../Assets/Path51.png'
import image from '../../Assets/staff.png'
const NonClinical = () => {
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        marginTop: '-178px',
        backgroundColor: '#EBE0D3'
    };
    return(
    <>
        <Header/>
        <Banner10
        bannerStyles={bannerStyles}
        bannerImg={bannerImg}
        heading={'HEALTHCARE'}
        heading2={'STAFFING BY US'}
        description={'NON CLINICAL HEALTHCARE STAFFING BY EMPOWERCARE'}
        span={'Unlock Fulfilling Contract and Per Diem Opportunities That Go Beyond the Job Description'}
        />
        <TrustedPartner/>
        <Approach/>
        <Toptalent/>
        <Guaranty/>
        <StaffingServices/>
        <FacilityOperations/>
        <Spotlights/>
        <SolutionsDesign
        img = {image}
        meta = {'ABOUT US'}
        heading1 = {'OUR NON-CLINICAL '}
        heading2 = {'STAFFING SOLUTIONS'}
        heading3 = {'ARE DESIGNED FOR:'}
        bullet1 = {'HOSPITAL ADMINISTRATORS AND DEPARTMENT HEADS'}
        bullet2 = {'OUTPATIENT CLICNIC MANAGERS AND SUPERVISORS'}
        bullet3 = {'LONG TERM CARE FACILITY DIRECTORS'}
        bullet4 = {'BEHAVIORAL HEALTH CENTER ADMINISTRATORS'}
        description1 = {''}
        description2 = {''}
        btn1 = {'SIGN UP'}
        btn2 = {'ABOUT US'}
        />
        <PartneringBenefits/>
        <AboutusSnippet/>
        <Trusted/>
        <JoiningForm/>
        <CareerSlider/>
        <Blog/>
        <FaqAccordian/>
        <Userslider/>
        <Footer/>
    </>
    )
}
export default NonClinical