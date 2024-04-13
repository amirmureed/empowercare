import './Spotlights.scss'
import img from '../../Assets/spotlight.png'
const Spotlights=()=>{
    return(<>
     <div className="spotlights-wrapper">
      <div className="container">
        <div className="empowercare-wrapper">
          <div className="row">
            <div className="col-md-5">
              <div className="right-content">
                <div className="section-img">
                  <img src={img} alt="empowercareimg" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="left-content">
                
                <h2 className="heading">
                  <span className="text_grad_green">SPOTLIGHTS</span> IMAGINATIONS
                </h2>
                <p className="description">
                Imagine your healthcare facility running seamlessly, with skilled non- clinical professionals ensuring efficient operations and exceptional patient experiences. With EmpowerCare, you can focus on delivering high-quality care while we handle your non-clinical staffing needs.
                </p> <br />
                <div className="btns-flex">
                    
                        <a className="btn_green" href="/">
                            SIGN UP
                        </a>
                        <a className="learn_more" href="/">
                            LEARN MORE
                        </a>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>)
}
export default Spotlights