import React from 'react';
import './Realstoriesimpact.scss';
import storiesimg from '../../Assets/storiesimg.png';
import imageone from '../../Assets/banner5-rounded.png';
import imagetwo from '../../Assets/section-image-realimpact-2.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const Realstoriesimpact = () => {
    return (
        <div className="real-impact-stories">
            <div className="container">
                <div className="stories-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Real 
                                    <span> Stories, </span> <br />
                                    Real Impact
                                </h2>
                                <p className="description">"EmpowerCare has been instrumental in helping me achieve my career goals. Their dedicated team and comprehensive solutions have opened up opportunities for growth and professional fulfillment."</p>
                                <p className="main-description">- Sarah, Registered Nurse</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={imageone} alt="storiesimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stories-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={imagetwo} alt="storiesimg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Real 
                                    <span> Stories, </span> <br />
                                    Real Impact
                                </h2>
                                <p className="description">"EmpowerCare has been instrumental in helping me achieve my career goals. Their dedicated team and comprehensive solutions have opened up opportunities for growth and professional fulfillment."</p>
                                <p className="main-description">- Sarah, Registered Nurse</p>
                            </div>
                            <div className="sec-btns">
                                <button className="learn-btn">
                                <span>REQUEST A FREE CONSULTATION</span>
                                {/* <img src={downarrow} alt="downarrow" /> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realstoriesimpact