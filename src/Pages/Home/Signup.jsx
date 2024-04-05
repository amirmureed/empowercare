import Header from "../../Components/Header/Header"
import Userslider from "../../Components/Userslider/Userslider"
import Footer from "../../Components/Footer/Footer"
import SignupForm from '../../Components/SignupForm/SignupForm';
import OurAccess from '../../Components/OurAccess/OurAccess';
import Banner2 from "../../Components/Banner2/Banner2"
import Content1 from "../../Components/Community/Content1"
import mask7 from '../../Assets/mask7.png'

const Signup=()=>{
    
    const heading='SIGN UP FOR FREE NOW!'
    const description='Join empowercare now to be the part of the biggest staffing agency!'
    return(
    <>
        <Header/>
        <Banner2 heading={heading} description={description} img={mask7} />
        <SignupForm />
        <OurAccess />
        <Content1/>
        <Userslider/>
        <Footer/>
    </>
    )
}
export default Signup