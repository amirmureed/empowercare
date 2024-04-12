import Banner2 from "../../Components/Banner2/Banner2"
import ResourceBoxes from "../../Components/ResourceBoxes/ResourceBoxes"
import Footer from "../../Components/Footer/Footer"
import TitleContentButton from "../../Components/TitleContentButton/TitleContentButton"
import Header from "../../Components/Header/Header"
import Userslider from "../../Components/Userslider/Userslider"
import LeftContentRightImage from '../../resources/LeftContentRightImage/LeftContentRightImage';
import bannerImg from '../../Assets/elipse2.png';
import img from '../../Assets/banner3.png'

const Resources=()=>{

    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '-225px',
        backgroundColor: '#EBE0D3'
    };
    return (
    <>
        <Header/>
        <Banner2 heading={'EmpowerCare Resources'} 
        description={"We've got something exciting to share with you – our brand-new Shift Makers Nurses Referral Program!"}
        img={bannerImg}
        styles={bannerStyles}
        />
        <TitleContentButton />
        <ResourceBoxes />
        <LeftContentRightImage />
        <Userslider/>
        <Footer />
    </>
    )
}
export default Resources