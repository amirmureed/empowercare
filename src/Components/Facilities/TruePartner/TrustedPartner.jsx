import React from 'react';
import './TrustedPartner.scss';
import empowercareimg from '../../../Assets/In the office-amico.png';
import activearrow from '../../../Assets/active-arrow.png';
import downarrow from '../../../Assets/down-link-arrow.svg';

const TrustedPartner = () => {
    return (
        <div className="trustedpartner-sec">
        <div className="container">
            <div className="empowercare-wrapper">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="left-content">
                            <span className="meta">Who We Are</span>
                            <h2 className="heading">
                                EMPOWERCARE IS YOUR
                                <span> TRUSTED </span> 
                                PARTNER
                            </h2>
                            <p className="description">EmpowerCare is your trusted partner for non-clinical staffing services. We
understand the crucial role that skilled non-clinical professionals play in
ensuring the smooth operation of your healthcare facility.
</p>
                             <p>Our extensive network of pre-screened, highly trained sitters, compassionate
professionals, receptionists, administrative staff, and experienced nurses and
CNAs for non-clinical roles ensures you have the right talent to support your
facility's operational efficiency and patient experience.</p>
                        
                            <div className="sec-btns">
                                <button className="learn-btn">
                                    <span>Sign Up</span>
                                    <img src={downarrow} alt="downarrow" />
                                </button>
                                <div className="active-img">
                                    <img src={activearrow} alt="activearrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
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
    )
}

export default TrustedPartner