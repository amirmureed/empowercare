import React, { useState } from 'react';
import './PostjobForm.scss';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import hc1 from '../../Assets/hc1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostjobForm = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        jobType: '',
        category: '',
        jobDescription: '',
        jobFile: '',
        companyName: '',
        companyEmail: '',
        website: '',
        state: '',
        zipCode: '',
        city: '',
        Address: '',
        Country: '',
        consent: 0
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;
        setFormData({
            ...formData,
            [e.target.name]: newValue
        });

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        if (formData.consent === 0) {
            toast.error("Please comply to our terms in order to post the job")
            return;
        }

        try {
            const form = new FormData();
            form.append('jobTitle', formData.jobTitle);
            form.append('jobType', formData.jobType);
            form.append('category', formData.category);
            form.append('jobDescription', formData.jobDescription);
            form.append('jobFile', formData.jobFile);
            form.append('companyName', formData.companyName);
            form.append('companyEmail', formData.companyEmail);
            form.append('website', formData.website);
            form.append('state', formData.state);
            form.append('zipCode', formData.zipCode);
            form.append('city', formData.city);
            form.append('Address', formData.Address);
            form.append('Country', formData.Country);
            form.append('consent', formData.consent);

            console.log(form)
            const response = await fetch('https://empowercare.me/wp-json/empower/staffing/postjob', {
                method: 'POST',
                body: form,
            });


            const data = await response.json();
            if (!response.ok) {
                toast.error(data.data.message)
            } else {
                toast.success("Job successfully posted")
                setFormData({
                    jobTitle: '',
                    jobType: '',
                    category: '',
                    jobDescription: '',
                    jobFile: '',
                    companyName: '',
                    companyEmail: '',
                    website: '',
                    state: '',
                    zipCode: '',
                    city: '',
                    Address: '',
                    Country: '',
                    consent: 0
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
                                            <h4>Job Information</h4>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Job Title"
                                                    className="rounded-input"
                                                    value={formData.jobTitle}
                                                    name='jobTitle'
                                                    onChange={handleChange}
                                                />
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    name='jobType'
                                                    value={formData.jobType}
                                                >
                                                    <option value="Job Type">Job Type</option>
                                                    <option value="Permanent Full Time">Permanent Full Time</option>
                                                    <option value="Permanent Part Time">Permanent Part Time</option>
                                                    <option value="Local Contract">Per Diem / Local Contract</option>
                                                </select>
                                            </div>
                                            <div className='row-input'>
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    name='category'
                                                    value={formData.category}
                                                >
                                                    <option value="Category">Category</option>
                                                    <option value="Scholar">Scholar</option>
                                                    <option value="Software Engineer">Software Engineer</option>
                                                    <option value="Doctor">Doctor</option>
                                                </select>
                                                <textarea
                                                    rows="3" cols="5"
                                                    placeholder="Job Description"
                                                    className="rounded-input"
                                                    value={formData.jobDescription}
                                                    name='jobDescription'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <h4>Company Information</h4>
                                            <div className="row-input job_file">
                                                <input
                                                    type="file"
                                                    placeholder="Logo"
                                                    className="rounded-input"
                                                    value={formData.jobFile}
                                                    name='jobFile'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Company Name"
                                                    className="rounded-input"
                                                    value={formData.companyName}
                                                    name='companyName'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Contact Email"
                                                    className="rounded-input"
                                                    value={formData.companyEmail}
                                                    name='companyEmail'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="Website"
                                                    className="rounded-input"
                                                    value={formData.website}
                                                    name='website'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <h4>Location</h4>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="State"
                                                    className="rounded-input"
                                                    value={formData.state}
                                                    name='state'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Zip-Code"
                                                    className="rounded-input"
                                                    value={formData.zipCode}
                                                    name='zipCode'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    className="rounded-input"
                                                    value={formData.city}
                                                    name='city'
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Address"
                                                    className="rounded-input"
                                                    value={formData.Address}
                                                    name='Address'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="row-input">
                                                <select className='rounded-input'
                                                    onChange={handleChange}
                                                    name='Country'
                                                    value={formData.Country}
                                                >
                                                    <option value="Country">Country</option>
                                                    <option value="USA">USA</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Turkey">Turkey</option>
                                                </select>
                                            </div>
                                            <div className='form_consent'>
                                                <input
                                                    type="checkbox"
                                                    className='emp_checkbox'
                                                    checked={formData.consent == 1}
                                                    value={formData.consent}
                                                    onChange={handleChange}
                                                    name='consent'
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