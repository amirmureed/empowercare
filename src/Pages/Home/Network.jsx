import Banner2 from "../../Components/Banner2/Banner2"
import Footer from "../../Components/Footer/Footer"
import bannerImg from '../../Assets/Group675.png'
import Header from "../../Components/Header/Header"
import NetworkForm from "../../Components/Resources/Network/NetworkForm"
import NetworkSection1 from "../../Components/Resources/Network/NetworkSection1"
import TermsandConditions from "../../Components/Resources/Network/TermsandConditions"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import img from '../../Assets/BenefitBanner.png'

const Network=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-280px',
        backgroundColor: '#EBE0D3'
    };
    return (<>
    <Header/>
    <Banner2 heading={'EMPOWER YOUR NETWORK'} description={'TRANSFORM HEALTHCARE.'}
    img={bannerImg}
    styles={bannerStyles}
    />
   <NetworkSection1/>
   <NetworkForm/>
   <TermsandConditions/>
   <Userslider2/>
   <Footer/>
    </>)
}
export default Network