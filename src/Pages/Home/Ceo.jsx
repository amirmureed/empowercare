import Banner2 from "../../Components/Banner2/Banner2"
import Ally from "../../Components/Ceo/Ally"
import Challenges from "../../Components/Ceo/Challenges"
import Section1 from "../../Components/Ceo/Section1"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Userslider from "../../Components/Userslider/Userslider"

const Ceo=()=>{
    return (<>
    <Header/>
    <Banner2 heading={'CEO LETTER'} description={'FOR NEARLY TWO DECADES MSG STAFFING HAS HAD A PROFOUND IMPACT ON MY LIFE.'}/>
    <Section1/>
    <Challenges/>
    <Ally/>
    <Userslider/>
    <Footer/>
    </>)
}
export default Ceo