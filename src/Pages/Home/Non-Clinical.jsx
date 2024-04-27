import Approach from "../../Components/Approach/Approach"
import Banner10 from "../../Components/Banner10/Banner10"
import Guaranty from "../../Components/Facilities/TruePartner/Guaranty"
import TrustedPartner from "../../Components/Facilities/TruePartner/TrustedPartner"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
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
import bannerImg from '../../Assets/staffingSolution.png';
import img from '../../Assets/staffing_banner.png'
import image from '../../Assets/staff.png'
import empowercareimg from '../../Assets/In the office-amico.png'
import storiesimg from '../../Assets/guarantyImg.jpg';
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import job1 from '../../Assets/Group 234.png';
import job2 from '../../Assets/Group 235.png';
import job3 from '../../Assets/Group 236.png';
const NonClinical = () => {
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        marginTop: '-190px',
        backgroundColor: '#EBE0D3'
    };
    return (
        <>
            <HeaderWhite
                logoImg={logow}
            />
            <Banner10
                bannerStyles={bannerStyles}
                bannerImg={bannerImg}
                heading={'HEALTHCARE'}
                heading2={'STAFFING BY US'}
                description={'NON CLINICAL HEALTHCARE STAFFING BY EMPOWERCARE'}
                span={'Unlock Fulfilling Contract and Per Diem Opportunities That Go Beyond the Job Description'}
            />
            <TrustedPartner
                simpleButton={false}
                anchor={false}
                button={true}
                img={empowercareimg}
                meta={'Who We Are'}
                heading1={'EMPOWERCARE IS YOUR'}
                heading2={'TRUSTED'}
                heading3={'PARTNER'}
                description1={'EmpowerCare is your trusted partner for non-clinical staffing services. We understand the crucial role that skilled non-clinical professionals play in ensuring the smooth operation of your healthcare facility.'}
                description2={'Our extensive network of pre-screened, highly trained sitters, compassionate professionals, receptionists, administrative staff, and experienced nurses and CNAs for non-clinical roles ensures you have the right talent to support your facility operational efficiency and patient experience.'}
            />
            <Approach />
            <Toptalent
                heading1={"EmpowerCare's"}
                heading2={"Core"}
                heading3={"Promises"}
                job1={job1}
                job2={job2}
                job3={job3}
                jobcard1={"Transformative Placements"}
                jobcard1_des={"Each EmpowerCare placement helps improve healthcare, change lives, and enhance the quality of care, making a meaningful impact"}

                jobcard2={"Commitment to Community"}
                jobcard2_des={"We donate $1 towards community health initiatives for every shift worked by our healthcare professionals, making a positive impact beyond the walls of healthcare facilities."}

                jobcard3={"Personalized Excellence through CPR:"}
                jobcard3_des={"We provide a Convenient, Personable, and Responsive staffing experience, ensuring the right match for healthcare facilities while offering dedicated support and timely solutions."}
                btn2={"LEARN MORE"}
           />
            <Guaranty
                img={storiesimg}
                heading1={'OUR'}
                heading2={'GUARANTEES'}
                btn1={'SIGN UP'}
                btn2={'LEARN MORE'}
                description={'Your satisfaction is our priority. If you are not happy with a placement, we will find a new one for you at no extra charge. We make sure your healthcare staffing needs are met carefully.'}
            />
            <StaffingServices />
            <FacilityOperations />
            <Spotlights />
            <SolutionsDesign
                img={image}
                meta={'ABOUT US'}
                heading1={'OUR NON-CLINICAL '}
                heading2={'STAFFING SOLUTIONS'}
                heading3={'ARE DESIGNED FOR:'}
                bullet1={'HOSPITAL ADMINISTRATORS AND DEPARTMENT HEADS'}
                bullet2={'OUTPATIENT CLICNIC MANAGERS AND SUPERVISORS'}
                bullet3={'LONG TERM CARE FACILITY DIRECTORS'}
                bullet4={'BEHAVIORAL HEALTH CENTER ADMINISTRATORS'}
                description1={''}
                description2={''}
                btn1={'SIGN UP'}
                btn2={'ABOUT US'}
            />
            <PartneringBenefits />
            <AboutusSnippet />
            <Trusted />
            <JoiningForm />
            <CareerSlider />
            <Blog />
            <FaqAccordian />
            <Userslider />
            <Footer />
        </>
    )
}
export default NonClinical