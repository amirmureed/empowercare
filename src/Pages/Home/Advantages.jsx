import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Userslider from "../../Components/Userslider/Userslider"
import Stories from "../../Components/Stories/Stories"
import img from '../../Assets/advantages.png'
import bannerImg from '../../Assets/Group 231.png'
import Banner1 from "../../Components/Banner1/Banner1"
import Trusted from "../../Components/Trusted/Trusted"
import Initiative from "../../Components/Initiative/Initiative"
import DynamicSquads from "../../Components/DynamicSquads/DynamicSquads"
import WorkForce from "../../Components/WorkForce/WorkForce"
import HearFrom from "../../Components/HearFrom/HearFrom"
import AboutEmpowercare from "../../Components/AboutEmpowercare/AboutEmpowercare"
import Opportunities from "../../Components/Opportunities/Opportunities"
import Unparalleled from "../../Components/Unparalleled/Unparalleled"
import VisitFAQs from "../../Components/VisitFAQs/VisitFAQs"

const Advantages=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-300px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <Header/>
    <Banner1
    heading={'Advantages of Per Diem Work'} 
    description={'Unlock the Advantages of Per Diem Work'}
    meta={'Enjoy Unparalleled Flexibility with EmpowerCares Per Diem Jobs'}
    bannerImg={bannerImg}
    styles={bannerStyles}
    />
    <Trusted/>
    <Unparalleled/>
    <Initiative
    button={true}
    mainHeading={true}
     heading={'Why Choose EmpowerCare for Per Diem Positions?'}
     heading1={'●    Flexible Scheduling'}
     heading2={'●   Flexible Scheduling'}
     heading3={'●  Competitive Compensation'}
     heading4={'●    Professional Development'}
     description1={'Tailor your work life to fit personal commitments by choosing shifts that suit you.'}
     description2={'Work across various settings and with different patient demographics to enrich your professional life.'}
     description3={'Receive top hourly wages reflecting your valuable skills and expertise..'}
     description4={'Broaden your skillset and professional network through varied assignments.'}
    />
    <Initiative
   button={true}
     heading={'Why Choose EmpowerCare for Per Diem Positions?'}
     heading1={'●    Flexible Scheduling'}
     heading2={'●   Flexible Scheduling'}
     heading3={'●  Competitive Compensation'}
     heading4={'●    Professional Development'}
     description1={'Tailor your work life to fit personal commitments by choosing shifts that suit you.'}
     description2={'Work across various settings and with different patient demographics to enrich your professional life.'}
     description3={'Receive top hourly wages reflecting your valuable skills and expertise..'}
     description4={'Broaden your skillset and professional network through varied assignments.'}
    />
    <Initiative
    button={true}
     heading={'Why Choose EmpowerCare for Per Diem Positions?'}
     heading1={'●    Flexible Scheduling'}
     heading2={'●   Flexible Scheduling'}
     heading3={'●  Competitive Compensation'}
     heading4={'●    Professional Development'}
     description1={'Tailor your work life to fit personal commitments by choosing shifts that suit you.'}
     description2={'Work across various settings and with different patient demographics to enrich your professional life.'}
     description3={'Receive top hourly wages reflecting your valuable skills and expertise..'}
     description4={'Broaden your skillset and professional network through varied assignments.'}
    />
    <DynamicSquads/>
    <Opportunities/>
    <WorkForce/>
    <HearFrom/>
    <AboutEmpowercare/>
    <Stories/>
    <VisitFAQs/>
    <FaqAccordian/>
    <Userslider/>
    <Footer/>
    </>)
}
export default Advantages