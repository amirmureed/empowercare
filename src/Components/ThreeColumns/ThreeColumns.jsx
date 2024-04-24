import React from 'react';
import './ThreeColumns.scss';
import { Link } from 'react-router-dom';
import img from '../../Assets/7228757 copy.png';

const ThreeColumns = (props) => {
    let classnames = props.classes == null ? "" : props.classes;
    return (
        <div className="emp_three_columns">
            <div className="choose-container">
                <div className={`choose-wrapper ${classnames}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="left-content">
                                    <span className="meta">Dynamic Squads</span>
                                    <h2 className="heading">
                                    Compassionate <span> Passionate </span> Caregivers and Advocates 
                                    </h2>
                                    {props.firstDescription && <p className='description'>{props.firstDescription}</p> }
                                    <p className="description">Join Direct Care professionals who are embracing the flexibility of contract jobs, per diem jobs, dedicated individuals providing essential overnight support, and leaders who are driving positive change in the Direct Care industry.</p>

                                    <p className="description">Join the 6,000+ Healthcare professionals who have found their calling through EmpowerCare.</p>
                                
                                    <div className="sec-btns">
                                        <Link to="/" className="learn-btn">
                                            <span>Learn More</span>
                                        </Link>
                                        <Link to="/signup" className="signup-btn">
                                            <span 
                                            style={{color: props.facilities ? "white" :"black",
                                            
                                        }}>Sign up</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h6>Our Thriving Community</h6>
                                            <p className="description">Our thriving community consists of over 6,000 healthcare professionals united by their unwavering dedication to improving lives and making a difference</p>
                                            <p className="description">If you believe in the power of compassion, the importance of dignity, and the desire to empower others, you've found your home.</p>
                                            <div className='mid_img'>
                                                <img src={img} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h6>Our Thriving Community</h6>
                                            <p className="description">At EmpowerCare, we don't just match you with direct care jobs; we nurture your passion for making a difference and support your journey toward a fulfilling and impactful career.</p>
                                            <p className="description">Take the first step today and discover your perfect direct care job with renowned organizations that value your compassion and dedication.</p>
                                        </div>
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

export default ThreeColumns