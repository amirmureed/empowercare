import './Content1.scss'
import empowercareimg from '../../Assets/International cooperation-pana.png';
import activearrow from '../../Assets/active-arrow.png';
import downarrow from '../../Assets/down-link-arrow.svg';
const Content1=()=>{
    return(  <>
         <div className="left_image_right_content1">
            <div className="content-container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta"><b>THE EMPOWERCARE RIPPLE EFFECT</b></span>
                                <h2 className="heading">
                                    EVERY
                                    <span className='text_grad_red'> JOB HELPS </span> THE WORLD
                                </h2>
                                <p className="description">At EmpowerCare, we believe every job has the power to create a positive impact that ripples far beyond the workplace.</p>
                            <p>Through our Ripple Effect initiative,we transform the act of filling a health care position into an opportunity to make a meaninful difference
                                in the lives of individual,communities and the world at large.
                            </p>
                            <p>We call this the EmpowerCare Ripple Effect</p><br/>
                                <div class="priemer-cta">
                                    <a class="btn_red" href="/">Sign Up</a>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={empowercareimg} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>)
}
export default Content1