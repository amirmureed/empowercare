import React from 'react';
import './AboutEmpower.scss';
import opportunityimg from '../../Assets/opportunity-img.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const AboutEmpower = () => {
    return (
        <div className="about-empower-sec">
            <div className="opportunity-container">
                <div className="opportunity-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="left-content">
                                    <span className="meta">About Us</span>
                                    <h2 className="heading text-white">
                                        About <span className='text-black'>EmpowerCare</span>
                                    </h2>
                                    <p className="description">With 18+ years of experience, EmpowerCare's mission is empowering healthcare institutions and professionals through top-tier staffing solutions that transform lives, elevate care, and promote societal well-being. </p>
                                    <p className="description">Celebrating over 1,000,000 shifts served, our vision is doubling the impact to 2 million by 2031 - ensuring seamless operations for institutions and fulfilling opportunities for every healthcare professional</p>
                                
                                    <div className="sec-btns">
                                        <button className="learn-btn bg-white">
                                            <span>Contact Us</span>
                                        </button>
                                        <button className="btn-transparent">
                                            <span>Learn More</span>
                                        </button>
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

export default AboutEmpower