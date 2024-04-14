import React from 'react';
import './Opportunities.scss';
import Opportunitiesimg from '../../Assets/agency_img.png';


const Opportunities = () => {
    return (
        <div className="Opportunities-sec">
            <div className="container">
                <div className="healthcare-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="right-content">
                                <div className="section-img">
                                    <img  src={Opportunitiesimg} alt="healthcareimg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="left-content">
                                <span className="meta">Specialities</span>
                                <h2 className="heading">
                                    Per Diem
                                    <span> Opportunities </span>
                                    Across Specialities
                                </h2><br />
                                <p>EmpowerCare's roster of per diem roles caters to a broad spectrum of healthcare
                                    professionals, including:</p>
                                <ul>
                                    <li>
                                    Registered Nurses (RNs)
                                    </li>
                                    <li>
                                    Licensed Practical Nurses (LPNs)
                                    </li>
                                    <li>
                                    Certified Nursing Assistants (CNAs)
                                    </li>
                                    <li>
                                    Direct Care Staff
                                    </li>
                                    <li>
                                    Certified Medical Assistants (CMAs)
                                    </li>
                                    <li>
                                    Residential Counselors
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opportunities