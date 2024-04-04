import './Challenges.scss'
import { FiArrowDownRight } from "react-icons/fi";
import icon1 from '../../Assets/btn_icon.png';
const Challenges=()=>{
    return(<>

    <div className='your_challenges'>
      <div className='container'>
        <div class="top-content">
          <span class="meta">Our Achievments</span>
          <h2 class="heading">We<span className='text_grad_red'> understand </span>your challange</h2>
          <p className='description'>Whether you're a facility director or a nurse on the floor, burnout is real. As an Unsung Hero or an Autonomy Seeker, you are a Difference Maker fighting from a different angle. Our talent and clients are driven by a passion for making a difference in patients' lives. </p>
          <p className='description'>We've designed our staffing solutions to align the goals of healthcare facilities with those of our professionals, leading to better outcomes and shared growth.
          </p>
        </div>
        <div className='challanges_list'>
          <ul>
            <li>● Hassle-free Staffing Solutions: Unlock Your Potential, Effortlessly</li>
            <li>● Hassle-free Staffing Solutions: Unlock Your Potential, Effortlessly</li>
            <li className='active'>● Hassle-free Staffing Solutions: Unlock Your Potential, Effortlessly</li>
            <li>● Hassle-free Staffing Solutions: Unlock Your Potential, Effortlessly</li>
          </ul>
        </div>
        <div class="bottom_content">
          <p className='description'>With EmpowerCare, you can achieve all of this while meeting your financial goals, gaining autonomy, flexibility, and freedom.</p>
          <a className='btn_red' href='/'>Real Stories, Real Impact <img src={icon1} /></a>
        </div>
      </div>
    </div>

  </>)
}
export default  Challenges;