import image from '../../Assets/staff.png'
import './SolutionsDesign.scss'
const SolutionsDesign = () => {
    
    return (
        <div className="sd-sec">
            <div className="sd-container">
                <div className="sd-wrapper ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="left-content">
                                    <span className="meta">ABOUT US</span>
                                    <h2 className="heading">
                                        OUR NON-CLINICAL <span>STAFFING SOLUTIONS</span> ARE DESIGNED FOR:
                                    </h2>
                                    <p className="description">
                                        <ul>
                                            <li>HOSPITAL ADMINISTRATORS AND DEPARTMENT HEADS</li>
                                            <li>OUTPATIENT CLICNIC MANAGERS AND SUPERVISORS</li>
                                            <li>LONG TERM CARE FACILITY DIRECTORS</li>
                                            <li>BEHAVIORAL HEALTH CENTER ADMINISTRATORS</li>
                                        </ul>
                                    </p>
                                    
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>SIGN UP</span>
                                        </button>
                                        <button className="signup-btn">
                                            <span>ABOUT US</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="right-content">
                                   <div className="image-sec">
                                        <img className='sd-img' src={image} alt="image" />
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsDesign