import React from 'react';
import { Link } from 'react-router-dom';
import './Approach.scss';
import circle1 from '../../Assets/circle1.png';
import circle2 from '../../Assets/circle2.png';
import circle3 from '../../Assets/circle3.png';
import circle4 from '../../Assets/circle4.png';

const Approach = () => {
    return (
        <>
            <div className="approach-sec">
                <div className="container">
                    <div className="approach-wrapper">
                        <div className="top-content">
                            <h2 className="heading">
                                EmpowerCare's   
                                <span> Unique </span>
                                 Approach
                            </h2>
                            <p className="description">EmpowerCare's Unique Approach for Healthcare Professionals</p>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle1} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">Every Job Helps the World</h3>
                                            <p className="description">The Ripple Effect: Making Big Waves with Every Job</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <button className='approach-btn'>
                                            <span>Learn More</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle2} alt="approach2" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">Finding the Perfect Match Made Easy! Dynamic Squads</h3>
                                            <p className="description">EmpowerCare’s Dynamic Squads aren’t just teams; they’re the future of personalized,<br/> responsive healthcare staffing, redefining convenience in every match.</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <button className='approach-btn'>
                                            <span>Learn More</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle3} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">Gain a Winning Edge: Excel with EmpowerCare Academy!</h3>
                                            <p className="description">Unlock Your Potential and Land Your Dream Healthcare Role Effortlessly</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <button className='approach-btn'>
                                            <span>Learn More</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={circle4} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h3 className="heading">Unsung Heroes No More: in the Spotlight! Shift Champions</h3>
                                            <p className="description">Celebrate Your Exceptional Contributions to Healthcare</p>
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <button className='approach-btn'>
                                            <span>Learn More</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-btn">
                            <Link to="/signup" className="signup">
                                <span>Sign up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Approach