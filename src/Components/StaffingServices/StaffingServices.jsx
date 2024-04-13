import './StaffingServices.scss'
import img from '../../Assets/MaskGroup25.png'
const StaffingServices=()=>{
    return ( 
    <>
    <div className="services-div">
      <div className='container'>
          <div className='text-sec'>
              <h1 className='heading'>EMPOWERCARE <span className='text_grad_green'>OFFERS COMPREHENSIVE</span><br />NON-CLININCAL STAFFING SERVICES</h1>
          </div>
        <div className="services_wrapper">
          <div className='row'>
            <div className='content_boxes col-lg-4 col-md-4 col-sm-12'>
              <div className='content_box'>
                <p>Sitters and Compassionate Professionals for Patient Support</p>
              </div>
              <div className='content_box'>
                <p>Sitters and Compassionate Professionals for Patient Support</p>
              </div>
              <div className='content_box'>
                <p>Sitters and Compassionate Professionals for Patient Support</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='img_content_box'>
                <img src={img} />
              </div>
            </div>
            <div className='content_boxes col-lg-4 col-md-4 col-sm-12'>
              <div className='content_box'>
                <p>Sitters and Compassionate Professionals for Patient Support</p>
              </div>
              <div className='content_box'>
                <p>Sitters and Compassionate Professionals for Patient Support</p>
              </div>
              <div className='content_box'>
                <p>Sitters and Compassionate Professionals for Patient Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
export default StaffingServices