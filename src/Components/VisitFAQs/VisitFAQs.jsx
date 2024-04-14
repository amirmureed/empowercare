import { FiArrowDownRight } from "react-icons/fi"
import './VisitFAQs.scss'
const VisitFAQs=()=>{
    return(<>
    <div className="visit-sec">
        <div className="container">
            <div className="content">
              <h2 className="heading">PER DIEM STAFFING <span className="text_grad_green">FAQS</span></h2><br />
              <p className="description">Have questions? Get insights into how EmpowerCare can meet your per diem staffing needs through our FAQ section.</p><br />
            <div className="btn">
                <a className="btn_green" href="">Visit Per Diem FAQs <FiArrowDownRight/></a>
            </div>
            </div>
        </div>
    </div>
    </>)
}
export default VisitFAQs