import React from "react";
import "./Staffingsolutions.scss";
import downarrow from '../../Assets/down-link-arrow.svg';
import empowercareimg from "../../Assets/staff-solutions.png";

const Staffingsolutions = () => {
  return (
      <div className="staffing-sol">
        <div className="staffing-sol-container">
          <div className="empowercare-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="left-content">
                    <span className="meta">STAFFING SOLUTIONS</span>
                    <h2 className="heading">
                        EmpowerCare delivers a <span>wide range of</span> healthcare staffing solutions
                    </h2>
                    <p className="description">
                        From single shifts to crisis staffing, EmpowerCare delivers a
                        wide range of healthcare staffing solutions. We listen, work
                        together, give advice, and assist your team in finding the
                        best solutions for your staffing needs. With our Seamless
                        Pledge and CPR Approach, we guarantee a hassle-free and
                        Convenient, Personable, and Responsive staffing experience.
                    </p>
                    <div className="sec-btns">
                        <a href="/" className="learn-btn">
                          Request Staffing Solutions
                        <img src={downarrow} alt="downarrow" />
                        </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="section-img">
                      <img src={empowercareimg} alt="empowercareimg" />
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Staffingsolutions;
