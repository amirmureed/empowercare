import React, { useState } from 'react';
import './SignupForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import hc1 from '../../Assets/hc1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = new FormData();
            form.append('username', formData.username);
            form.append('firstName', formData.username);
            form.append('lastName', formData.username);
            form.append('email', formData.email);
            form.append('password', formData.password);
            form.append('confirmPassword', formData.confirmPassword);
      
            const response = await fetch('https://msgstaffing.com/wp-json/empower/staffing/signup', {
              method: 'POST',
              body: form,
            });
           
           
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.data.message)
              }else{
                toast.success("Signup Successfull")
                setFormData({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
              }
            console.log(data);
           
          } catch (error) {
            console.error('Error:', error);
          }
        
    };
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
                            <form id="empower_signup" className='empower_signup_form' onSubmit={handleSubmit}>
                                <div className='signup_checkboxes'>
                                    <h5 className='form_desc'>Let us know your work preferences and we'll find the opportunities that fit your life.</h5>
                                    <div class="checkbox_wrapper">
                                        <p>Type of setting you're interested in (select all that apply)</p>
                                        <div className='checkboxes_container'>
                                            <span class="checkbox_one">
                                                <label>
                                                    <input type="radio" name="sign-1a" value="long-term" />
                                                    <span class="wpcf7-list-item-label">Long term Care</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_two">
                                                <label>
                                                    <input type="radio" name="sign-2a" value="hospital" />
                                                    <span class="wpcf7-list-item-label">Hospital</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_three">
                                                <label>
                                                    <input type="radio" name="sign-3a" value="home-health" />
                                                    <span class="wpcf7-list-item-label">Home Health</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_four">
                                                <label>
                                                    <input type="radio" name="sign-4a" value="hospice" />
                                                    <span class="wpcf7-list-item-label">Hospice</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_five">
                                                <label>
                                                    <input type="radio" name="sign-5a" value="ambulatory-surgical" />
                                                    <span class="wpcf7-list-item-label">Ambulatory/Surgical</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_six">
                                                <label className='active'>
                                                    <input type="radio" name="sign-6a" value="urgent-care" />
                                                    <span class="wpcf7-list-item-label">Urgent Care</span>
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="checkbox_wrapper">
                                        <p>Type of work you're interested in (select all that apply)</p>
                                        <div className='checkboxes_container'>
                                            <span class="checkbox_one">
                                                <label>
                                                    <input type="radio" name="sign-1b" value="perdiem-local" />
                                                    <span class="wpcf7-list-item-label">Per Diem/Local Contract</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_two">
                                                <label>
                                                    <input type="radio" name="sign-2b" value="permanent-full" />
                                                    <span class="wpcf7-list-item-label">Permanent Full-Time</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_three">
                                                <label className='active'>
                                                    <input type="radio" name="sign-3b" value="permanent-part" />
                                                    <span class="wpcf7-list-item-label">Permanent Part-Time</span>
                                                </label>
                                            </span>
                                            <span class="checkbox_four">
                                                <label>
                                                    <input type="radio" name="sign-4b" value="travel" />
                                                    <span class="wpcf7-list-item-label">Travel</span>
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='signup_container'>
                                    <div classname='signup_inner_container'>
                                        <img className='form-icon' src={newsletterarrow} alt="" />
                                        <div className="trusted-wrapper">
                                            <div className="top-content">
                                                <span className="meta">Join EmpowerCare</span>
                                                <h2 className="heading">
                                                    unlock your
                                                    <span> dream </span> healthcare job
                                                </h2>
                                                <p>Start your journey with EmpowerCare, the leading healthcare staffing agency connecting passionate professionals like you with top healthcare facilities across the United States. Sign up now to access a wide range of opportunities, from nursing jobs and allied health careers to direct care positions.</p>
                                            </div>
                                        </div>
                                        <div className='form_fields'>
                                            <h4>Sign Up for Free</h4>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="rounded-input"
                                                    value={formData.firstName}
                                                    name='firstName'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="rounded-input"
                                                    value={formData.lastName}
                                                    name='lastName'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Username"
                                                    className="rounded-input"
                                                    value={formData.username}
                                                    name='username'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="rounded-input"
                                                    value={formData.email}
                                                    name='email'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    className="rounded-input"
                                                    value={formData.password}
                                                    name='password'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className="rounded-input"
                                                    value={formData.confirmPassword}
                                                    name='confirmPassword'
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className='row-input'>
                                                <input
                                                    type="text"
                                                    placeholder="Lincese Type"
                                                    className="rounded-input"
                                                    value="license-type"
                                                    name='licenseType'
                                                />
                                                <select className='rounded-input'>
                                                    <option value="option1">Preffered Work Settings</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            </div>
                                            <div className='row-input'>
                                                <select className='rounded-input'>
                                                    <option value="option1">Desired Position</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                                <select className='rounded-input'>
                                                    <option value="option1">Work Preferences</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        <div className="btn_gradient">
                                            <button className='btn quick-btn empower_signup_submit' type="submit" >Submit</button>
                                        </div>
                                    </div>
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