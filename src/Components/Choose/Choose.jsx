import React from 'react';
import './Choose.scss';
import { Link } from 'react-router-dom';

const Choose = (props) => {
    let classnames = props.classes == null ? "" : props.classes;
    return (
        <div className={`choose-sec ${classnames}`}>
            <div className="choose-container">
                <div className={`choose-wrapper ${classnames}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="left-content">
                                    <span className="meta">{props.meta}</span>
                                    <h2 className="heading">
                                        {props.heading} <span> {props.spantext}</span> {props.headingafter} 
                                    </h2>
                                    <p className="description">{props.description1}</p>
                                    <p className="description">{props.description2}</p>
                                
                                    <div className="sec-btns">
                                        <Link to="/" className="learn-btn">
                                            <span>Learn More</span>
                                        </Link>
                                        <Link to="/signup" className="signup-btn">
                                            <span>Sign up</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h5 className="heading">Convenient Placements:</h5>
                                            <p className="description">We provide a wide range of job opportunities that match your skills and
                                                    preferences, making it convenient for you to find the perfect fit.</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">Personable Support:</h5>
                                            <p className="description">Our dedicated team is committed to building strong relationships with
                                                you, providing guidance and support throughout your healthcare journey.</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">Responsive Advocacy:</h5>
                                            <p className="description">We are always ready to listen to your needs, address your concerns, and
                                        provide timely solutions to help you thrive in your career.</p>
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

export default Choose