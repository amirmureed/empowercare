import Header from "../../Components/Header/Header"
import mask7 from '../../Assets/mask7.png'
import Form from "../../Components/Community/Form"
import Banner2 from "../../Components/Banner2/Banner2"
import LeftContentRightImage from '../../resources/LeftContentRightImage/LeftContentRightImage';
import Footer from "../../Components/Footer/Footer"
import OurWorking from '../../resources/OurWorking/OurWorking';
import LeftImageRightContent from '../../resources/LeftImageRightContent/LeftImageRightContent';
import RefferalProgram from '../../resources/RefferalProgram/RefferalProgram';
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
import bannerImg from '../../Assets/elipse2.png';
import img from '../../Assets/banner3.png'

const Shiftmakers=()=>{
    const heading='ELEVATE YOUR FACILITY WITH US'
    const description="We've got something exciting to share with you - our brand new Shift Makers nurses refferal program."
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-225px',
        backgroundColor: '#EBE0D3'
    };
    return(
        
        <>
            <Header/>
            <Banner2 heading={heading} description={description} 
             img={bannerImg}
             styles={bannerStyles}
            />
            <RefferalProgram />
            <OurWorking />
            <LeftContentRightImage />
            <LeftImageRightContent />
            <Form />
            <Userslider2/>
            <Footer/>
        </>
    )
}
export default Shiftmakers