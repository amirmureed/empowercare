import HeaderWhite from "../../Components/HeaderWhite/HeaderWhite"
import Userslider from "../../Components/Userslider/Userslider"
import Footer from "../../Components/Footer/Footer"
import PostjobForm from '../../Components/PostjobForm/PostjobForm';
import OurAccess from '../../Components/OurAccess/OurAccess';
import Banner2 from "../../Components/Banner2/Banner2"
import Content1 from "../../Components/Community/Content1"
import bannerImg from '../../Assets/elipse2.png'
import img from '../../Assets/Group707.png'
import logow from '../../Assets/EmpowerCareWhiteLogo.svg';

const PostJob=()=>{
    
    const heading='Post a Job on Empowercare'
    const description='Join empowercare now to be the part of the biggest staffing agency!'
    const bannerStyles = {
        backgroundImage: `url(${img})`,
        backgroundPosition: '50% 46%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '-255px',
        backgroundColor: '#EBE0D3'
    };
    return(
    <>
        <HeaderWhite
          logoImg={logow}
          />
        <Banner2 heading={heading} description={description} img={bannerImg} styles={bannerStyles} 
        
        />
        <PostjobForm />
        <OurAccess />
        <Content1/>
        <Userslider/>
        <Footer/>
    </>
    )
}
export default PostJob