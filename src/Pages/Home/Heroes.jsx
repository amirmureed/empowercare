import Banner2 from "../../Components/Banner2/Banner2"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import BenefitForm from "../../Components/Resources/Benefits/BenefitForm"
import bannerImg from '../../Assets/Group 675.png'
import AboutUs from "../../Components/Resources/EmpowerCare Heroes/AboutUs"
import BenefitsForyou from "../../Components/Resources/EmpowerCare Heroes/BenefitsForyou"
import Culture from "../../Components/Resources/EmpowerCare Heroes/Culture"
import HeroesForm from "../../Components/Resources/EmpowerCare Heroes/HeroesForm"
import MakingDifference from "../../Components/Resources/EmpowerCare Heroes/MakingDifference"
import OurBenefits from "../../Components/Resources/EmpowerCare Heroes/OurBenefits"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import img from '../../Assets/bannervar3.png'
const Heroes=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-270px',
        backgroundColor: '#EBE0D3'
    };
    return (<>
    <Header/>
    <Banner2 heading={'EMPOWERING HEALTHCARE HEROES'} 
    img={bannerImg}
    styles={bannerStyles}
    />
    <BenefitsForyou/>
    <AboutUs/>
    <OurBenefits/>
    <Culture/>
    <MakingDifference/>
    <HeroesForm/>
    <Userslider2/>
    <Footer/>

</>)}
export default Heroes