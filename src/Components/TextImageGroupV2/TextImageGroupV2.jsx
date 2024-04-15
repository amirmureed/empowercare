import React from 'react';
import './TextImageGroupV2.scss';
import secImage from '../../Assets/Image 59.png';
import activearrow from '../../Assets/Path 1810.png';

const TextImageGroupV2 = () => {
    return (
        <div className='text_image_group_v2'>
            <div className="healthcare-sec1">
                <div className="container">
                    <div className="healthcare-wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 left-content-container">
                                <div className='test'>
                                    <div className="left-content">
                                        <h2 className="heading">
                                        Mission
                                        </h2>
                                        <h6>Transformative Healthcare Staffing</h6>
                                        <p>Our mission is to empower healthcare institutions and professionals with hassle-free staffing solutions. Through EmpowerCare Academy and innovative tools like Dynamic Squad CPR, Dynamic Schedules, and Sign Hero, we make staffing effortless and efficient.</p>
                                        <p> We're dedicated to transforming lives and elevating care with every shift, contributing to societal wellbeing through improved healthcare outcomes and enhanced patient care. Our unique Ripple Effect ensures that every dollar earned from each shift has a lasting impact on the community.</p>
                                        <div className="btn_cta">
                                            <a href='/'>READ MORE</a>
                                            <div className="active-img">
                                                <img src={activearrow} alt="activearrow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={secImage} alt="healthcareimg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextImageGroupV2