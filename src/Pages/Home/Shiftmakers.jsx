import Header from "../../Components/Header/Header"
import mask7 from '../../Assets/mask7.png'
import Cards from "../../Components/Community/Cards"
import BottomButton from "../../Components/Community/BottomButton"
import RevolutionCard from "../../Components/Community/RevolutionCard"
import Form from "../../Components/Community/Form"
import Banner2 from "../../Components/Banner2/Banner2"
import Userslider from "../../Components/Userslider/Userslider"
import LeftContentRightImage from '../../resources/LeftContentRightImage/LeftContentRightImage';
import Footer from "../../Components/Footer/Footer"
import OurWorking from '../../resources/OurWorking/OurWorking';
import LeftImageRightContent from '../../resources/LeftImageRightContent/LeftImageRightContent';
import RefferalProgram from '../../resources/RefferalProgram/RefferalProgram';

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
            <Userslider />
            <Footer/>
        </>
    )
}
export default Shiftmakers