import Banner2 from "../../Components/Banner2/Banner2"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import ReferralForm from "../../Components/Resources/ReferralProgram/ReferralForm"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import bannerImg from '../../Assets/Group674.png'
import img from '../../Assets/Path74.png'
const ReferralProgram=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-280px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <Header/>
    <Banner2 heading={'REFERRAL PROGRAM SNIPPET'} description={'REFERRAL PROGRAM.'}
    img={bannerImg}
    styles={bannerStyles}
    />
    <ReferralForm/>
    <Userslider2/>
    <Footer/>
    </>)
}
export default ReferralProgram