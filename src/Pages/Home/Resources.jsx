import Banner2 from "../../Components/Banner2/Banner2"
import ResourceBoxes from "../../Components/ResourceBoxes/ResourceBoxes"
import Footer from "../../Components/Footer/Footer"
import TitleContentButton from "../../Components/TitleContentButton/TitleContentButton"
import Header from "../../Components/Header/Header"
import Userslider from "../../Components/Userslider/Userslider"
import LeftContentRightImage from '../../resources/LeftContentRightImage/LeftContentRightImage';

const Resources=()=>{
    return (
    <>
        <Header/>
        <Banner2 heading={'EmpowerCare Resources'} description={"We've got something exciting to share with you – our brand-new Shift Makers Nurses Referral Program!"}/>
        <TitleContentButton />
        <ResourceBoxes />
        <LeftContentRightImage />
        <Userslider/>
        <Footer />
    </>
    )
}
export default Resources