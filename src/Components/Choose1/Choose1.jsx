import React from 'react';
import './Choose1.scss';

const Choose1 = (props) => {
    return (
        <div className="choose-sec1">
            <div className="choose-container">
                <div className="choose-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h5 className="heading">Meaningful Work:</h5>
                                            <p className="description">Every placement is an opportunity to contribute to the greater good,knowing that your efforts are part of a larger movement to transformlives and elevate care.</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">Reliable Support:</h5>
                                            <p className="description">Our dedicated team is always by your side, ensuring a smooth and stress-free experience, so you can focus on making a difference with every shift.</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">Empowering Environment:</h5>
                                            <p className="description">We foster a supportive and empowering environment that recognizes your contributions and helps you grow personally and professionally.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">{props.meta}</span>
                                    <h2 className="heading">
                                        {props.heading} <span> {props.spantext}</span> {props.headingafter} 
                                    </h2>
                                    <p className="description">{props.description1}</p>
                                    <p className="description">{props.description2}</p>
                                
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>Learn More</span>
                                        </button>
                                        <button className="signup-btn">
                                            <span>Sign up</span>
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

export default Choose1