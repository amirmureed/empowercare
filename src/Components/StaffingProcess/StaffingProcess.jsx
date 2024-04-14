import './StaffingProcess.scss'
import logo from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import { FiArrowDownRight } from "react-icons/fi";

const StaffingProcess=()=>{
    return(
    <>
    <div className="staffingprocess-sec">
        <div className="faciityOperations-wrapper">
            <div className="faciityOperations-container">    
                <div className="container">
                    <div className="top-content">
                        {/* <p className="description-sub-heading">LIMITED TIME OFFER</p> */}
                        <h2 className="heading main-heading">
                            our <span className='span-style'> Temp-to-hire </span> staffing proess
                        </h2>
                    </div>
                    <div className='staffing_box'>
                        <div className="start-box">
                            <b>Empower Your Facility with Effortless Access to Premier Talent</b>
                            <img src={logo4} />
                        </div>
                        <p className="description">Join EmpowerCare for free and partner with our dedicated team to enhance your facility's performance through efficient and excellent staffing solutions.</p>                    
                        <div className="bottom-btns-row">
                            <button className="learnmore-btn">
                                <span>Signup</span>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo3} alt="job1" />
                                </div>
                                <h4 className="heading">Flexible Staffing</h4>
                                <p className="description">We offer temporary, temp-to-hire, permanent, and contract non-clinical staffing solutions to keep things running efficiently.</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo4} alt="job1" />
                                </div>
                                <h4 className="heading">Special Discounts</h4>
                                <p className="description">Get special discounts on our non-clinical staffing services. Pay less for high-volume, ongoing needs and get priority access to our most experienced professionals.</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default StaffingProcess