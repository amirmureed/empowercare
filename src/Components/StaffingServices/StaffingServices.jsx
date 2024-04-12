import './StaffingServices.scss'
import img from '../../Assets/MaskGroup25.png'
const StaffingServices=()=>{
    return(<>
    <div className="services-div">
        <div className='container'>
            <div className='text-sec'>
                <h1 className='heading'>EMPOWERCARE <span className='text_grad_green'>OFFERS COMPREHENSIVE</span><br />NON-CLININCAL STAFFING SERVICES</h1>
            </div><br />
            <div className='left-box'>
  <div className="content-box">
    <p>Sitters and Compassionate Professionals for Patient Support </p></div><br />
    <div className="content-box">
    <p>Receptionists and Administrative Staff for Front Office Operations</p></div><br />
    <div className="content-box">
    <p>Experienced Nurses and CNAs for Non-Clinical Roles</p>
  </div>
  </div>
  <img src={img} alt="Image" className="image"/>
  <div className='right-box'>
  <div className="content-box">
    <p>Medical Billing and Coding Specialists for Revenue Cycle Management</p></div><br />
    <div className="content-box2">
    <p>Medical Scribes for Electronic Health Record Documentation</p></div><br />
    <div className="content-box">
    <p>Patient Navigators and Care Coordinators for Care Continuity</p>
  </div><br />
  </div>
  </div>
  </div></>)
}
export default StaffingServices