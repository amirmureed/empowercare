import './FacilityOperations.scss'
import logo from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import { FiArrowDownRight } from "react-icons/fi";

const FacilityOperations=()=>{
    return(
    <>
    <div className="faciityOperations-sec">
        <div className="faciityOperations-wrapper">
            <div className="faciityOperations-container">    
                <div className="container">
                    <div className="top-content">
                        <p className="description-sub-heading">LIMITED TIME OFFER</p>
                        <h2 className="heading main-heading">
                           GET TOP TALENT TO <span className='span-style'> ENHANCE  FACILITY</span> OPERATIONS
                        </h2>
                        <p className='description1'>EmpowerCare helps healthcare facilities solve non-clinical staffing shortages. We ensure
your facility runs smoothly without the stress of finding staff.</p><br />

<p className='description2'>Our Premier Partnership Program gives you:</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={logo} alt="job1" />
                                </div>
                                <h4 className="heading">Quality Match Guarantee</h4>
                                <p className="description">Access our best sitters, receptionists, and non-clinical healthcare professionals. We ensure they fit your facility's needs perfectly.</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div>
                        </div>
                       
                        <div className="col-lg-6 col-md-12">
                            <div className="job-box active">
                                <div className="job-logo">
                                    <img src={logo2} alt="job3" />
                                </div>
                                <h4 className="heading">Fast Placement</h4>
                                <p className="description">We fill your open non-clinical positions with great people fast, without losing quality.</p><br />
                                <a href="/">LEARN MORE <FiArrowDownRight/></a>
                            </div><br />
                        </div>
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
                            </div><br />
                        </div> 
                        
                            <div className="start-box">
                            <br />
                                <p className="description"><b>Easy to Start:</b> Contact us now for a free consultation.</p><br />
                                
                            </div>
                            
                            <div className="act-box">
                            <br />
                                <p className="description"><b>ACT NOW</b> - This Offer Ends Soon! To get this special offer, contact us before.</p><br />
                                
                            </div>
                           <div className='end-text'> <br />
                           <p>Reach out today and set a new standard for exceptional healthcare facility
operations with EmpowerCare's help.</p></div>
                        
                    </div>
                    <div className="bottom-btns-row">
                        
                        <button className="white-bg-btn">
                            <span>QUICK APPLY</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default FacilityOperations