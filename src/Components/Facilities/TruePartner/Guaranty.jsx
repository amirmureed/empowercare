import './Guaranty.scss';
import storiesimg from '../../../Assets/Mask Group 24.png';
const Guaranty=()=>{
    return(<>
    <div className="guaranty-sec">
            <div className="container">
                <div className="guaranty-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                               
                                <h2 className="heading">
                                    OUR
                                    <span className='text_grad_green'> GUARANTEES </span> <br />
                                   
                                </h2>
                                <p className="description">Your satisfaction is our priority. If you are not happy with a placement,
we will find a new one for you at no extra charge. We make sure your
healthcare staffing needs are met carefully."</p><br />
<div className='buttons'>
    <a href="#" className='btn_green'>SIGN UP</a>
    <a href="#" className='learn_more'>LEARN MORE</a>
</div>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={storiesimg} alt="storiesimg" />
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Guaranty