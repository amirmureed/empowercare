import Banner1 from "../../Components/Banner1/Banner1"
import Footer from "../../Components/Footer/Footer"
import Trusted from "../../Components/Trusted/Trusted"
import Userslider from "../../Components/Userslider/Userslider"
import bannerImg from '../../Assets/unsung2.png'
import img from '../../Assets/unsung1.png'
import Stories from "../../Components/Stories/Stories"
import FaqAccordian from "../../Components/FaqAccordian/FaqAccordian"
import Initiative from "../../Components/Initiative/Initiative"
import ShiftChampions from "../../Components/ShiftChampions/ShiftChampions"
import Benefits from "../../Components/Benefits/Benefits"
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';
import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
const Professionalgainawinning=()=>{
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-295px',
        backgroundColor: '#EBE0D3'
    };
    return(<>
    <HeaderWhite
          logoImg={logow}
          />
    <Banner1
    heading={'Unsung Heroes No More'} 
    description={'Unsung Heroes No More: Shift Champions in the Spotlight!'}
    meta={'You are a hero in healthcare staffing, and EmpowerCare wants to celebrate you. Our Shift Champions Initiative is made just for you – the hardworking healthcare professional who always goes the extra mile to give patients the best care.'}
    bannerImg={bannerImg}
    styles={bannerStyles}
    />
    <Trusted/>
    <ShiftChampions/>
    <Initiative
    heading={'How the Shift Champions Initiative Helps You'}
    heading1={'●   Rewards and Prizes'}
    heading2={'●   Stay Great at Your Job'}
    heading3={'●  Constant Support'}
    heading4={'●  We Highlight Your Work'}
    description1={'We notice and reward you when you do an awesome job.'}
    description2={'You get access to rewards and prizes that encourage you to keep being great at your job.'}
    description3={'We support you in doing your best work, and we celebrate your efforts.'}
    description4={'As part of EmpowerCares dynamic squads, your fantastic work will be highlighted, no matter if you are a CNA, LPN, travel nurse, or direct care professional.'}
    />
    <Benefits/>
    <FaqAccordian/>
    <Stories/>
    <Userslider/>
    <Footer/>

    </>)
}
export default Professionalgainawinning