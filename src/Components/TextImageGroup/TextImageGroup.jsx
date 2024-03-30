import React from 'react';
import './TextImageGroup.scss';
import secImage from '../../Assets/Image 58.png';
import activearrow from '../../Assets/Path 1810.png';

const TextImageGroup = () => {
    return (
        <div className='text_image_group'>
            <div className="healthcare-sec">
                <div className="container">
                    <div className="healthcare-wrapper">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={secImage} alt="healthcareimg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 left-content-container">
                                <div className="left-content">
                                    <h2 className="heading">
                                       Our Vision
                                    </h2>
                                    <h6>Seamless Healthcare, Empowered Professionals</h6>
                                    <p>Imagine a world where healthcare institutions operate flawlessly, supported by top-tier staffing solutions. In this world, every healthcare professional finds fulfilling opportunities, leading to happiness and growth in their careers.</p>
                                    <p>This vision guides us at EmpowerCare, motivating us to empower healthcare professionals and institutions alike, ensuring seamless operations and fulfilled careers.</p>
                                    <div className="btn_cta">
                                        <a href='/'>READ MORE</a>
                                        <div className="active-img">
                                            <img src={activearrow} alt="activearrow" />
                                        </div>
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

export default TextImageGroup