import React from 'react';
import bannerImg from '../../Assets/banner1.png';
import './Banner1.scss';

const Banner1 = () => {
    return (
      <>
      <div className='banner_varient_care'>
          <div className="main-banner">
            <div className="container">
              <div className="banner-wrapper">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-content">
                      <h1 className="heading">
                        Temp-to-hire staffing solutions
                      </h1>
                      <p className="description">YOUR TRUSTED PARTNER FOR TEMP-TO-HIRE STAFFING SOLUTIONS</p>
                      <span className="meta">Evaluate Talent before hiring with EmpowerCare's Temp-to-Hire</span>
                      <div className="banner-btns">
                        <button className='btn quick-btn'>
                          <span>Quick Apply</span>
                        </button>
                        <button className='btn contact-btn'>
                          <span>Contact us</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-img">
                      <img src={bannerImg} alt="bannerImg" />
                    </div>
                  </div>
                </div>

                <div className="selection-row">
                  <div className="selection-wrap">
                    <select id="jobtitle">
                      <option value="Your job title">Your job title</option>
                      <option value="Your job title1">Your job title1</option>
                      <option value="Your job title2">Your job title2</option>
                    </select>
                    <select id="specialty">
                      <option value="specialty">specialty</option>
                      <option value="specialty1">specialty1</option>
                      <option value="specialty2">specialty2</option>
                    </select>
                    <select id="city/state">
                      <option value="Select city/state">Select city/state</option>
                      <option value="Select city/state1">Select city/state1</option>
                      <option value="Select city/state2">Select city/state2</option>
                    </select>
                    <button className='btn available-btn'>
                      <span>Find available positions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Banner1