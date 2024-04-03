import Banner2 from "../../Components/Banner2/Banner2"
import Header from "../../Components/Header/Header"
import TeamMemberDetail from "../../Components/TeamMemberDetail/TeamMemberDetail"

const Leadership=()=>{
    return(
    <>
        <Header/>
        <Banner2 heading={'OUR LEADERSHIP'} description={'EMPOWERING HEALTHCARE PROFESSIONALS AND TRANSFORMING LIVES'}/>
        <TeamMemberDetail />
    </>
    )
}
export default Leadership