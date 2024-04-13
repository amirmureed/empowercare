import React from 'react';
import './OurWorkingGreen.scss';
import icon1 from '../../Assets/Group 209.png';
import icon2 from '../../Assets/Group 210.png';
import icon3 from '../../Assets/Group 211.png';

const OurWorkingGreen = () => {
    return (
        <div className="our-working_green">
            <div className='container'>
                <div class="top-content">
                    <h2 class="heading">our
                    <span> promise </span>
                        to you
                    </h2>
                </div>
                <div className="working-wrapper">
                    <div className='row'>
                        <div className='working-col col-12'>
                            <div className='row'>
                            <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon1} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>1. Transformative Placements:</h3>
                                    <p>Each EmpowerCare placement helps improve healthcare, change lives, and enhance the quality of care,
making a meaningful impact.</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon2} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>2. Commitment to Community</h3>
                                    <p>We donate $1 towards community health initiatives for every shift worked by our healthcare professionals,
making a positive impact beyond the walls of healthcare facilities.</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_icon col-lg-4 col-md-4 col-sm-12'>
                                    <img src={icon3} />
                                </div>
                                <div className='working_content col-lg-8 col-md-8 col-sm-12'>
                                    <h3>3. Personalized Excellence through CPR</h3>
                                    <p>We provide a Convenient, Personable, and Responsive staffing experience, ensuring the right match
between healthcare facilities and professionals while offering dedicated support and timely solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWorkingGreen