import React from 'react';
import './SignupForm.scss';
import hc1 from '../../Assets/hc1.png';

const SignupForm = () => {
    return (
        <>
        <div className="signup_form">
            <div className="trusted-sec">
                <div className="container">
                    <div className="trusted-wrapper">
                        <div className="top-content">
                            <span className="meta">Sign up</span>
                            <h2 className="heading">
                                Tell us 
                                <span> what matters </span> to you
                            </h2>
                        </div>
                    </div>
                    <div className='signup_form_controller'>
                        <form id="empower_signup" className='empower_signup_form'>
                            <div className='signup_checkboxes'>
                                <h5 className='form_desc'>Let us know your work preferences and we'll find the opportunities that fit your life.</h5>
                                <div class="checkbox_wrapper">
                                    <p>Type of setting you're interested in (select all that apply)</p>
                                    <div className='checkboxes_container'>
                                        <span class="checkbox_one">
                                            <label>
                                                <input type="radio" name="sign-1" value="long-term" />
                                                <span class="wpcf7-list-item-label">Long term Care</span>
                                            </label>
                                        </span>
                                        <span class="checkbox_two">
                                            <label>
                                                <input type="radio" name="sign-2" value="hospital" />
                                                <span class="wpcf7-list-item-label">Hospital</span>
                                            </label>
                                        </span>
                                        <span class="checkbox_three">
                                            <label>
                                                <input type="radio" name="sign-3" value="home-health" />
                                                <span class="wpcf7-list-item-label">Home Health</span>
                                            </label>
                                        </span>
                                        <span class="checkbox_four">
                                            <label>
                                                <input type="radio" name="sign-4" value="hospice" />
                                                <span class="wpcf7-list-item-label">Hospice</span>
                                            </label>
                                        </span>
                                        <span class="checkbox_five">
                                            <label>
                                                <input type="radio" name="sign-5" value="ambulatory-surgical" />
                                                <span class="wpcf7-list-item-label">Ambulatory/Surgical</span>
                                            </label>
                                        </span>
                                        <span class="checkbox_six">
                                            <label>
                                                <input type="radio" name="sign-6" value="urgent-care" />
                                                <span class="wpcf7-list-item-label">Urgent Care</span>
                                            </label>
                                        </span>
                                    </div>    
                                </div>
                            </div>
                            <div className="btn_gradient">
                                <button className='btn quick-btn empower_signup_submit' type="submit">JOIN NOW</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default SignupForm