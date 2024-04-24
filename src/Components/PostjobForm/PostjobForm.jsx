import React, { useState } from 'react';
import './PostjobForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import hc1 from '../../Assets/hc1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostjobForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        licenseType:'',
        preferredWorkSettings:'',
        desiredPosition:'',
        workPreference:''
      });
      const [selectedSettingCheckboxes, setSelectedSettingCheckboxes] = useState([]);
      const [selectedWorkCheckboxes, setSelectedWorkCheckboxes] = useState([]);

    const handleCheckboxChangeSetting = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            console.log(value)
            setSelectedSettingCheckboxes(prevState => [...prevState, value]);
        } else {
            setSelectedSettingCheckboxes(prevState => prevState.filter(item => item !== value));
        }
    };
    
    const handleCheckboxChangeWork = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            console.log(value)
            setSelectedWorkCheckboxes(prevState => [...prevState, value]);
        } else {
            setSelectedWorkCheckboxes(prevState => prevState.filter(item => item !== value));
        }
    };
    const handleChange = (e) => {
        console.log()
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
            form.append('firstName', formData.firstName);
            form.append('lastName', formData.lastName);
            form.append('email', formData.email);
            form.append('password', formData.password);
            form.append('confirmPassword', formData.confirmPassword);
            form.append('licenseType',formData.licenseType)
            form.append('preferredWorkSettings',formData.preferredWorkSettings)
            form.append('desiredPosition',formData.desiredPosition)
            form.append('workPreference',formData.workPreference)
            form.append('setting', JSON.stringify(selectedSettingCheckboxes));
            form.append('work', JSON.stringify(selectedWorkCheckboxes));
      
            const response = await fetch('https://empowercare.me/wp-json/empower/staffing/signup', {
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
                    confirmPassword: '',
                    licenseType:'',
                    preferredWorkSettings:'',
                    desiredPosition:'',
                    workPreference:''


                });
              }
            console.log(data);
           
          } catch (error) {
            console.error('Error:', error);
          }
        
    };
    return (
        <>
            <div className="post_job_form">
                <div className="trusted-sec">
                    <div className="container">
                        <div className="trusted-wrapper">
                            <div className="top-content">
                                <span className="meta">Join Us Now</span>
                                <h2 className="heading">
                                    Post a job on the
                                    <span> #1 Job Boaord </span> around the World
                                </h2>
                            </div>
                        </div>
                        <div className='signup_form_controller'>
                            <form enctype="multipart/form-data" id="empower_postjob" className='empower_signup_form' onSubmit={handleSubmit}>
                                <div className='signup_container'>
                                    <div classname='signup_inner_container'>
                                        <img className='form-icon' src={newsletterarrow} alt="" />
                                        <div className='form_fields'>
                                            <h4>Company Details</h4>
                                            <div className="row-input job_file">
                                                <input
                                                    type="file"
                                                    placeholder="First Name"
                                                    className="rounded-input"
                                                    value={formData.firstName}
                                                    name='firstName'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Company Name"
                                                    className="rounded-input"
                                                    value={formData.username}
                                                    name='username'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Company Website"
                                                    className="rounded-input"
                                                    value={formData.email}
                                                    name='email'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <h4>Your Account</h4>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    className="rounded-input"
                                                    value={formData.password}
                                                    name='password'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="rounded-input"
                                                    value={formData.confirmPassword}
                                                    name='confirmPassword'
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className='row-input'>
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    className="rounded-input"
                                                    value={formData.licenseType}
                                                    name='licenseType'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    className="rounded-input"
                                                    value={formData.licenseType}
                                                    name='licenseType'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='form_consent'>
                                                <input 
                                                    type="checkbox"
                                                    className='emp_checkbox'
                                                    value={formData.consent}
                                                    onChange={handleChange}
                                                />
                                                <p>By registering, you are agreeing to our Terms of Use and Privacy Policy, as well as additional Terms that apply specifically to self-serve job postings.</p>
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

export default PostjobForm