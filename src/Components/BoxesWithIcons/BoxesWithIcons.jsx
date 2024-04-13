import React from 'react';
import { Link } from 'react-router-dom';
import './BoxesWithIcons.scss';
import "react-multi-carousel/lib/styles.css";
import job1 from '../../Assets/job1.png';
import job2 from '../../Assets/job2.png';
import job3 from '../../Assets/job3.png';
import rightarrow from '../../Assets/right-arrow.svg';
import empower1img from '../../Assets/empower1.png';
import empower2img from '../../Assets/empower2.png';
import empower3img from '../../Assets/services_icon02.png';

const BoxesWithIcons = () => {
    return (
        <div className="boxes-with-icons">
            <div className="priemer-container">
                <div className="priemer-wrapper">
                    <div className="empoer1">
                        <img src={empower1img} alt="empower1img" />
                    </div>
                    <div className="empoer2">
                        <img src={empower2img} alt="empower2img" />
                    </div>
                    <div className="empoer3">
                        <img src={empower3img} alt="empower2img" />
                    </div>
                    <div className="container">
                        <div className="top-content">
                            <span className="meta">Who We are</span>
                            <h2 className="heading">
                                EmpowerCare's 
                                <span> Unique </span>
                                Approach 
                            </h2>
                            <p className="description">Act Fast! Apply by today is date + 5 to secure your exclusive spot! Seize this rare opportunity to join our prestigious network of Premier Healthcare Professionals within the next 5 days. Gain access to top-tier healthcare jobs, unparalleled support, and career-accelerating benefits. Here is what awaits you:</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box">
                                    <div className="job-logo">
                                        <img src={job1} alt="job1" />
                                    </div>
                                    <h4 className="heading">Priority Job Access</h4>
                                    <p className="description">Be first in line for the most coveted healthcare roles across hospitals, clinics, labs and more, including contract positions, ensuring the widest array of opportunities.</p>
                                    <Link to="/" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box active">
                                    <div className="job-logo">
                                        <img src={job2} alt="job2" />
                                    </div>
                                    <h4 className="heading">Tailored Benefits Package</h4>
                                    <p className="description">Choose from a range of benefits curated for your needs - competitive compensation, flexible schedules, health insurance for contract roles, and more.</p>
                                    <Link to="/" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box">
                                    <div className="job-logo">
                                        <img src={job3} alt="job3" />
                                    </div>
                                    <h4 className="heading">Personal Career Mentor</h4>
                                    <p className="description">Work hand-in-hand with a dedicated mentor providing personalized guidance, interview prep, and strategic career planning</p>
                                    <Link to="/" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="job-box">
                                    <div className="job-logo">
                                        <img src={job3} alt="job3" />
                                    </div>
                                    <h4 className="heading">Personal Career Mentor</h4>
                                    <p className="description">Work hand-in-hand with a dedicated mentor providing personalized guidance, interview prep, and strategic career planning</p>
                                    <Link to="/" className="learn-more">
                                        <span>Learn More</span>
                                        <img src={rightarrow} alt="rightarrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='btn_facilities_grad'>
                            <a href='/'>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxesWithIcons