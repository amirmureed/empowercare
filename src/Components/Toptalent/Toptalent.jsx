import React from 'react';
import './Toptalent.scss';
import job1 from '../../Assets/job1.png';
import job2 from '../../Assets/job2.png';
import job3 from '../../Assets/job3.png';
import arrow from '../../Assets/anchor-arrow.png';

const Toptalent = () => {
    return (
    <div className="toptalent-sec">
        <div className="toptalent-container">    
            <div className="contractjob-wrapper">
                <div className="container">
                    <div className="top-content">
                    <p className="description">Join EmpowerCare for Free</p>
                        <h2 className="heading">
                            empower 
                            <span> your Facility </span>
                            with top talent, effortlessly
                        </h2>  
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={job1} alt="job1" />
                                </div>
                                <h4 className="heading">Join EmpowerCare <br />For Free</h4>
                                <p className="description">Sign up at no cost. Connect with our supportive team, explore personalized opportunities, and empower your career in healthcare with efficiency and excellence.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="job-box">
                                <div className="job-logo">
                                    <img src={job2} alt="job2" />
                                </div>
                                <h4 className="heading">Discover and Match with Premier <br />Jobs, Effortlessly</h4>
                                <p className="description">Forget the hassle of job searching. Share your aspirations, and we'll swiftly match you with leading healthcare roles, proving that finding your perfect position can be simple and stress-free.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="job-box active">
                                <div className="job-logo">
                                    <img src={job3} alt="job3" />
                                </div>
                                <h4 className="heading">Experience Rewarding <br />Healthcare Roles</h4>
                                <p className="description">Competitive compensation is a given, allowing you to focus on your passion for care. We ensure that advancing in your healthcare career is not only financially rewarding but also deeply meaningful.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-btns-row">
                        <a href="/signup" className="signup-btn">
                            Sign up
                        </a>
                        <a href="/" className="learnmore-btn">
                            Lean more how to find talent
                            <img src={arrow} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Toptalent