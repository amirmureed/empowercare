import React from 'react';
import './TeamMemberDetailV3.scss';

import secImage from '../../Assets/Mask Group -1.png';

const TeamMemberDetailV3 = () => {
    return (
        <div className='team_member_detailV3'>
            <div className="team_member-sec">
                <div className="container">
                    <div className="team_member-wrapper">
                        <div className="row">
                           
                                <div className="right-content">
                                    <div className="section-img">
                                        <img src={secImage} alt="healthcareimg" />
                                    </div>
                                </div>
                            
                                <div className="left-content">
                                    <h2 className="heading">
                                    Kursa Mahijibhai
                                    </h2>
                                    <h6>Director of Accounting</h6>
                                    <p>Kursa Mahijibhai is the Director of Accounting at EmpowerCare, where she leads the company's financial strategies and ensures the efficient allocation of resources to support healthcare professionals and facilities.</p>
                                    <p>With a keen understanding of the financial complexities in the healthcare industry, Kursa has developed robust financial models that enable EmpowerCare to invest in innovative solutions and initiatives, such as the Ripple Effect program, which contributes to positive change in the communities served by the company.</p>
                                    <p>Prior to joining EmpowerCare, Kursa held senior finance positions at [Previous Company 1] and [Previous Company 2], where she implemented financial strategies to drive growth and profitability.</p>
                                    <div className="btn_cta">
                                        <a className='read_more' href='/'>READ MORE</a>
                                        
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberDetailV3