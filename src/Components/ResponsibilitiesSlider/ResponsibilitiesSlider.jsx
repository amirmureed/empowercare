import React from 'react';
import './ResponsibilitiesSlider.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 310 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ResponsibilitiesSlider = () => {
    return (
        <div className="responsibilities-sec">
            <div className="responsibilities-container">
                <div className="responsibilities-wrapper">
                    <div className="container">
                        <div className="top-content">

                            <h2 className="heading">
                                WHAT DOES A  <br />
                                <span className='text_grad_green'> GENERAL NURSE </span>
                                DO
                            </h2>
                            <p className="description">General Nurses have a wide range of responsibilities, including: </p>
                        </div>
                        <div className="row">
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={true}
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                draggable={true}
                                autoPlaySpeed={1000}
                                showDots={true}
                                infinite={true}
                                partialVisible={false}
                                dotListClass="custom-dot-list-style"
                            >
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>Developing Individualized</h6>
                                        <p>Assessing patient's health status and developing
                                            individualized care plans</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>Medications & Treatments</h6>
                                        <p>Administering medications and treatments as
                                            prescribed by physicians</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>Vital Signs and Observing</h6>
                                        <p>Monitoring patients' vital signs and observing their response to treatment</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12'>
                                    <div className='content'>
                                        <h6>Wound Care</h6>
                                        <p>Providing wound care and other bedside
                                            procedures</p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsibilitiesSlider