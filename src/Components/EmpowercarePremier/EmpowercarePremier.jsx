import "./EmpowercarePremier.scss";
import logo from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import consultation from '../../Assets/consultation_icon02.png'
import { FiArrowDownRight } from "react-icons/fi";
const EmpowercarePremier = () => {
  return (
    <>
      <div className="empowercarePremier-sec">
        <div className="empowercarePremier-wrapper">
          <div className="empowercarePremier-container">
            <div className="container">
              <div className="top-content">
                
                <h2 className="heading main-heading">
                  BECOME AN
                  <span className="text_grad_green"> EMPOWERCARE PREMIER DIRECT</span>{" "}
                  CARE PROFESSIONAL-LIMITED TIME OFFER
                </h2><br />
                <p className="description2">
                  ACT FAST! APPLY BY (TODAY'S DATE +5) TO SECURE YOUR SPOT
                </p>
                <p className="description1">
                Don't miss this exclusive opportunity to join our prestigious network of Premier Direct Care Professionals within the next 5 days. Unlock access to top-tier Direct Care jobs, unmatched support, and career-boosting benefits. Here's what's in store for you:
                </p>
                

                
              </div>
               <div className="boxes-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="job-box">
                    <div className="job-logo">
                      <img src={logo} alt="job1" />
                    </div>
                    <h4 className="heading">Quality Match Guarantee</h4>
                    <p className="description">
                      Access our best sitters, receptionists, and non-clinical
                      healthcare professionals. We ensure they fit your
                      facility's needs perfectly.
                    </p>
                    <br />
                    <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="job-box active">
                    <div className="job-logo">
                      <img src={logo2} alt="job3" />
                    </div>
                    <h4 className="heading">Fast Placement</h4>
                    <p className="description">
                      We fill your open non-clinical positions with great people
                      fast, without losing quality.
                    </p>
                    <br />
                    <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a>
                  </div>
                  <br />
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="job-box">
                    <div className="job-logo">
                      <img src={logo3} alt="job1" />
                    </div>
                    <h4 className="heading">Flexible Staffing</h4>
                    <p className="description">
                      We offer temporary, temp-to-hire, permanent, and contract
                      non-clinical staffing solutions to keep things running
                      efficiently.
                    </p>
                    <br />
                    <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="job-box">
                    <div className="job-logo">
                      <img src={logo4} alt="job1" />
                    </div>
                    <h4 className="heading">Special Discounts</h4>
                    <p className="description">
                      Get special discounts on our non-clinical staffing
                      services. Pay less for high-volume, ongoing needs and get
                      priority access to our most experienced professionals.
                    </p>
                    <br />
                    <a href="/">
                      LEARN MORE <FiArrowDownRight />
                    </a>
                  </div>
                  
                </div>

                

                <div className="act-box">
                  <br />
                  <h3>REAL STORIES REAL IMPACT <img src={consultation}></img></h3>
                  <p className="description">
                  Apply Now: Don't wait! Click on the Button to begin your journey as an EmpowerCare Premier Direct Care
Professional. Act fast before spots fill up!
                  </p>
                  <br />
                  <div className="end-btn">
                    <a className="btn_green" href="/">QUICK APPLY</a><br />
                  </div>
                </div>
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmpowercarePremier;
