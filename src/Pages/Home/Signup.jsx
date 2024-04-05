import Header from "../../Components/Header/Header"
import Userslider from "../../Components/Userslider/Userslider"
import Footer from "../../Components/Footer/Footer"
import SignupForm from '../../Components/SignupForm/SignupForm';
import Banner2 from "../../Components/Banner2/Banner2"
import mask7 from '../../Assets/mask7.png'

const Signup=()=>{
    
    const heading='OUR COMMUNITY'
    const description='At EmpowerCare, we believe every job has the power to create a positive impact that ripples far beyond the workplace.'
    return(
    <>
        <Header/>
        <Banner2 heading={heading} description={description} img={mask7}/>
        <SignupForm />
        <Userslider/>
        <Footer/>
    </>
    )
}
export default Signup