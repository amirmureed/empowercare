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

const Shiftmakers=()=>{
    const heading='ELEVATE YOUR FACILITY WITH US'
    const description="We've got something exciting to share with you - our brand new Shift Makers nuses refferal program."
    return(
        <>
            <Header/>
            <Banner2 heading={heading} description={description} img={mask7}/>
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