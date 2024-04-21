import './ShiftChampions.scss'
import img from '../../Assets/champions.png';
import activearrow from '../../Assets/active-arrow.png';

const ShiftChampions=()=>{
    return(  <>
         <div className="shift-champions">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">WHY IT MATTERS</span>
                                <h2 className="heading">
                                    WHY
                                    <span className='text_grad_green'> THE SHIFT CHAMPIONS </span> INITIATIVE MATTERS TO YOU
                                </h2><br />
                                <p className="description">●    We recognize your great work, which makes you feel good and want to do even better.</p>
                                <p className="description">●    You become part of a group of healthcare professionals who are appreciated for their hard work</p>
                                <p className="description">●    Your amazing service makes patients happier and healthier, which is a big deal.</p>
                                <p className="description">●     We set a new standard for valuing and empowering healthcare professionals like you.</p>
                                <div class="priemer-cta">
                                    <a class="btn_green" href="/signup">Sign Up</a>
                                    <div className="active-img">
                                        <img src={activearrow} alt="activearrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={img} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>)
}
export default ShiftChampions