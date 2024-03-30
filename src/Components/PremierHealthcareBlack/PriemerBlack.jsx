import React from 'react';
import './PriemerBlack.scss';
import "react-multi-carousel/lib/styles.css";
import empower2img from '../../Assets/services_icon04.png';
import empower1img from '../../Assets/services_icon02.png';

const PriemerBlack = () => {
    return (
        <div className="priemer-sec-black">
            <div className="priemer-container">
                <div className="priemer-wrapper">
                    <div className="empoer1">
                        <img src={empower1img} alt="empower1img" />
                    </div>
                    <div className="empoer2">
                        <img src={empower2img} alt="empower2img" />
                    </div>
                    <div className="container">
                        <div className="top-content">
                            <span className="meta">Join us now</span>
                            <h2 className="heading">
                                Join Us in 
                                <span className='text_grad_red'> Making a </span>
                                difference in Healthcare 
                            </h2>
                            <p className="description">Act Fast! Apply by today is date + 5 to secure your exclusive spot! Seize this rare opportunity to join our prestigious network of Premier Healthcare Professionals within the next 5 days. Gain access to top-tier healthcare jobs, unparalleled support, and career-accelerating benefits. Here is what awaits you:</p>
                            <div className='priemer-cta'>
                                <a className='btn_red' href='/'>Find Your purpose today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriemerBlack