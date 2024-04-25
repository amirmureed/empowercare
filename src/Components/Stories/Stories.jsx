import React from 'react';
import './Stories.scss';
import storiesimg from '../../Assets/storiesimg.png';
import playbtn from '../../Assets/play.svg';

const Stories = ({img,description,description2,facility,btn1,Join,video_link}) => {
    return (
        <div className="stories-sec">
            <div className="container">
                <div className="stories-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">{Join ? (<>{Join}</>):(<>Who We Are</>) }</span>
                                <h2 className="heading">
                                    Real 
                                    <span> Stories, </span> <br />
                                    Real Impact
                                </h2> {description && description2 && btn1 ? (<>
                                <p><b>{description}</b></p>
                                <p>{description2}</p><br />
                                <div className='btns'>
                                    <a className='btn_green' href="/signup">{btn1}</a>
                                    <a className='learn_more' href="">Contact Us</a>
                                </div>
                                </>):!facility?(<>
                                    <p className="description">"EmpowerCare has been instrumental in helping me achieve my career goals. Their dedicated team and comprehensive solutions have opened up opportunities for growth and professional fulfillment."</p>
                                <p className="main-description">- Sarah, Registered Nurse</p>
                                </>):(<>
                                    <p className="description">""EmpowerCare has been instrumental in helping us achieve our ambitious care goals. Their dedicated team and comprehensive solutions have reduced our staffing shortages by 90%."</p>
                                <p className="main-description">- Oak Street Community Health Center
</p>
                                </>) }
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={img} alt="storiesimg" />
                                   <a target='blank' href={video_link}><img src={playbtn} alt="playbtn" className='play-btn' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories