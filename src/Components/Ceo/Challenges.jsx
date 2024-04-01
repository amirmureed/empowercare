import './Challenges.scss'
import { FiArrowDownRight } from "react-icons/fi";
const Challenges=()=>{
    return(<>
    <div className='main-div'><br />
   <div className="challenge-container">
  <div className="txt_content">
    <h6><b>OUR CEO & FOUNDER</b></h6>
    <h1><b>WE <span className='text-grad'>UNDERSTAND</span><span><br />YOUR CHALLENGES</span></b></h1><br />
    <p>Whether you're a facility director or a nurse on the floor, burnout is real. As an Unsung Hero or an Autonomy Seeker, you are a Difference Maker fighting from a different angle. Our talent and clients are driven by a passion for making a difference in patients' lives.</p>
    <p>We've designed our staffing solutions to align the goals of healthcare facilities with those of our professionals, leading to better outcomes and shared growth.</p>
    <div  className="sub-container" >
        
      <div className="sub-content"><p><b> ●	Hassle-free Staffing Solutions:</b> Unlock Your Potential, Effortlessly</p></div>
      <div className="sub-content"><p><b>●	Finding the Perfect Match Made Easy!</b> Dynamic Squads CPR</p></div>
      <div className="sub-content3"><p><b>● Spotlight! Shift Champions,</b> Unsung Heroes No More</p></div>
      <div className="sub-content"><p><b>●	Seamless Pledge:</b> Make a Meaningful Impact with Every Shift</p></div>
    
    </div><br />
    <p><b><i>With EmpowerCare, you can achieve all of this while meeting your financial goals, gaining autonomy, flexibility, and freedom.</i></b></p>
    <div className='last-btn'><a className='btn_red'><b>Real Stories Real Impact <FiArrowDownRight/></b></a> </div>
  </div>
</div><br />
</div>
    </>)
}
export default  Challenges;