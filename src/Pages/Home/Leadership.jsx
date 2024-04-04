import Banner2 from "../../Components/Banner2/Banner2"
import Header from "../../Components/Header/Header"
import TeamMemberDetail from "../../Components/TeamMemberDetail/TeamMemberDetail"
import TeamMemberDetailV3 from "../../Components/TeamMemberDetail/TeamMemberDetailV3"
import TeamMemberDetailV2 from "../../Components/TeamMemberDetail/TeamMmemberDetailV2"
import directorImg from '../../Assets/Mask Group 25.png'
import salesImg from '../../Assets/salesImage.png'
import Footer from "../../Components/Footer/Footer"
import Userslider2 from "../../Components/UserSlider2/UserSlider2"
const Leadership=()=>{
    return(
    <>
        <Header/>
        <Banner2 heading={'OUR LEADERSHIP'} description={'EMPOWERING HEALTHCARE PROFESSIONALS AND TRANSFORMING LIVES'}/>
        <TeamMemberDetail />
        <TeamMemberDetailV2
        image={directorImg}
        heading={'Ethan Roden'} text1={'Director of Operations and HR'} 
        text2={'Ethan Roden is the Director of Operations and HR at EmpowerCare, where he oversees the companys operational processes and human resources strategies to support healthcare professionals and clients.'} 
        text3={'With over 15 years of experience in operations and HR, Ethan has been instrumental in developing EmpowerCares innovative staffing solutions, such as hassle-free staffing, dynamic squads, and the Seamless Pledge. His expertise in optimizing workflows and fostering a supportive work environment has been key to EmpowerCares success in empowering healthcare professionals.'} 
        text4={'Before joining EmpowerCare, Ethan held leadership positions in operations and HR at [Previous Company 1] and [Previous Company 2], where he implemented strategies to improve efficiency and employee satisfaction.'}
        />
        <TeamMemberDetailV3/>
        <TeamMemberDetailV2
        image={salesImg}
        heading={'Stephen Scavone'} text1={'Director of Sales and Recruiting'} 
        text2={'Stephen Scavone is the Director of Sales and Recruiting at EmpowerCare, where he leads the companys efforts to connect top-tier healthcare talent with facilities nationwide.'} 
        text3={'With a deep understanding of the challenges faced by healthcare facilities and professionals, Stephen has developed innovative recruiting strategies that enable EmpowerCare to quickly identify and place highly qualified candidates in roles where they can make the greatest impact. His leadership has been instrumental in establishing EmpowerCare as a trusted partner for healthcare facilities seeking to optimize their staffing processes.'} 
        text4={'Before joining EmpowerCare, Stephen held sales and recruiting leadership positions at [Previous Company 1] and [Previous Company 2], where he consistently exceeded targets and built strong relationships with clients and candidates.'}
        />
        <Userslider2/>
        <Footer/>
    </>
    )
}
export default Leadership