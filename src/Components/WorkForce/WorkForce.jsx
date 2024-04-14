import './WorkForce.scss'
import empowercareimg from '../../Assets/work_img.png'
const WorkForce = () => {
    return (
        <div className="work-force">
            <div className="container">
                <div className="empowercare-wrapper">
                    
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-content">
                                    <span className="meta">ABOUT US</span>
                                    <h2 className="heading">
                                        Joining Our Per Diem <span> Work Force</span><br /> Means Enjoying.
                                    </h2><br />
                                    
                                    <ul>
                                        <li>
                                        Tailored job matches that align with your qualifications and preferences.
                                        </li>
                                        <li>
                                        Continuous support from our attentive recruitment team.
                                        </li>
                                        <li>
                                        Attractive compensation, with weekly direct deposit for your convenience.
                                        </li>
                                        <li>
                                        Access to sought-after healthcare facilities in your vicinity.
                                        </li>
                                    </ul><br />
                                    <div className='butns'>
                                       <a  className='btn_green' href="">Sign Up</a><br />
                                       <a className='learn-btn' href="">About Us</a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="section-img">
                                    <img className='img' src={empowercareimg} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default WorkForce;
