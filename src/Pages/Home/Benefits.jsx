import Banner2 from '../../Components/Banner2/Banner2';
import Footer from "../../Components/Footer/Footer"
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import BenefitForm from "../../Components/Resources/Benefits/BenefitForm"
import CareAbout from "../../Components/Resources/Benefits/CareAbout"
import CoolBenefits from "../../Components/Resources/Benefits/CoolBenefits"
import EnjoyBenefits from "../../Components/Resources/Benefits/EnjoyBenefits"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import bannerImg from '../../Assets/Group 673.png'
import img from '../../Assets/Group125.png'
const Benefits=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-245px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite/>
    <Banner2 heading={'BENEFITS AT EMPOWERCARE'} description={'WE CARE ABOUT YOU.'}
    img={bannerImg}
    styles={bannerStyles}
    />
    <EnjoyBenefits/>
    <CoolBenefits />
    <CareAbout/>
    <BenefitForm/>
    <Userslider2/>
    <Footer/>
    </>)
}
export default Benefits