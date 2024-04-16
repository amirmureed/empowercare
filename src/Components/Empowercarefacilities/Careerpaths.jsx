import React from 'react';
import './Careerpaths.scss';
import empowercareimg from '../../Assets/Hiring-amico.png';
import activearrow from '../../Assets/active-arrow.png';
import downarrow from '../../Assets/down-link-arrow.svg';

const Careerpaths = ({ meta,heading1, heading2, heading3, description, description2, img,btn1 }) => {
    return (
        <div className="empowercare-sec">
            <div className="container">
                <div className="empowercare-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">{meta}</span>
                                <h2 className="heading">
                                    {heading1}
                                    <span> {heading2}</span> <br />
                                    {heading3}
                                </h2>
                                <p className="description">{description}</p><br />
                                <p className='description'>{description2}</p>
                                {/* <ul>
                                    <li>
                                        <span>Travel Nursing Jobs ➔</span>
                                    </li>
                                    <li>
                                        <span>Per Diem Nursing Jobs ➔</span>
                                    </li>
                                    <li>
                                        <span>Temporary-to-Permanent Positions ➔</span>
                                    </li>
                                    <li>
                                        <span>Permanent Placement ➔</span>
                                    </li>
                                    <li>
                                        <span>Local Contract Jobs ➔</span>
                                    </li>
                                </ul> */}

                                <div className="sec-btns">
                                    <button className="learn-btn">
                                        <span>{btn1}</span>
                                        <img src={downarrow} alt="downarrow" />
                                    </button>
                                    <button className="btn contact-btn">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={img} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careerpaths