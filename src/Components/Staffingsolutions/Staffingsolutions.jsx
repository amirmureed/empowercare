import React from "react";
import "./Staffingsolutions.scss";
import job1 from "../../Assets/job1.png";
import job2 from "../../Assets/job2.png";
import job3 from "../../Assets/job3.png";
import downarrow from '../../Assets/down-link-arrow.svg';
import empowercareimg from "../../Assets/staff-solutions.png";

const Staffingsolutions = () => {
  return (
    <div className="staffing-sol-container">
      <div className="container">
        <div className="empowercare-wrapper">
            <div className="flex">
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
                        <button className="learn-btn">
                        <span>Request Staffing Solutions</span>
                        <img src={downarrow} alt="downarrow" />
                        </button>
                    </div>
                </div>
                <div className="right-content">
                    <div className="section-img">
                        <img src={empowercareimg} alt="empowercareimg" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Staffingsolutions;
