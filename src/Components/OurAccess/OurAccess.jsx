import React from 'react';
import './OurAccess.scss';
import icon1 from '../../Assets/Group530.png';
import icon2 from '../../Assets/Group531.png';
import icon3 from '../../Assets/Group532.png';

const OurAccess = () => {
    return (
        <div className="our-access">
            <div className='container'>
                <div className="working-wrapper">
                    <div class="top-content">
                        <h3 class="heading">By joining EmpowerCare, you'll gain access to</h3>
                    </div>

                    <div className='row'>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_content col-lg-12 col-md-12 col-sm-12'>
                                    <h4>Transformative Placements</h4>
                                    <p>Each EmpowerCare placement helps improve healthcare, change lives, and enhance the quality of care, making a meaningful impact.</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_content col-lg-12 col-md-12 col-sm-12'>
                                    <h4>Commitment to the Community</h4>
                                    <p>We donate $1 towards community health initiatives for every shift you work, making your efforts even more significant.</p>
                                </div>
                            </div>
                        </div>
                        <div className='working-col col-12'>
                            <div className='row'>
                                <div className='working_content col-lg-12 col-md-12 col-sm-12'>
                                    <h4>Personalized Excellence through CPR (Convenient, Personable, and Responsive)</h4>
                                    <p>We go beyond finding you a job. We match you with healthcare facilities that suit your skills, preferences, pay, and career goals. This ensures that you have a satisfying and successful placement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurAccess