import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../Assets/Group 581.png';
import './Banner10.scss';

const Banner10 = (props) => {
  const {bannerImg,heading,heading2,description,span,bannerStyles}=props

    return (
      <>
      <div className='banner_varient10'>
        <div className="main-banner"
        style={bannerStyles}
        >
          <div className="container">
            <div className="banner-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="banner-img">
                    <img src={bannerImg} alt="bannerImg" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="banner-content">
                    <h1 className="heading">
                      {heading}  <br />
                      {heading2}
                    </h1>
                    <p className="description">{description}</p>
                    <span className="meta">{span}</span>
                    <div className="banner-btns">
                      <Link to="/" className='btn quick-btn'>
                        <span>Quick Apply</span>
                      </Link>
                      <Link to="/" className='btn contact-btn'>
                        <span>Contact us</span>
                      </Link>
                    </div>
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
                    <a className='btn available-btn'>
                      <span>Find available positions</span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Banner10