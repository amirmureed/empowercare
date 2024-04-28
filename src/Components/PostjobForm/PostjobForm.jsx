import React, { useEffect, useState } from 'react';
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
        jobFile: null,
        companyName: '',
        companyEmail: '',
        website: '',
        state: '',
        zipCode: '',
        city: '',
        Address: '',
        country: '',
        consent: 0
    });
    
    


    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            convertToBase64(files[0]);
        } else {
            const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;
            setFormData({
                ...formData,
                [e.target.name]: newValue
            });
        }

    };
    const convertToBase64 = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result;
            setFormData({
                ...formData,
                jobFile: base64String
            });
        };
        reader.readAsDataURL(file);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.consent === 0) {
            toast.error("Please comply to our terms in order to post the job")
            return;
        }


        const jobData = new FormData();
        jobData.append("job_title", formData.jobTitle);
        jobData.append("job_description", formData.jobDescription);
        jobData.append("job_slug", formData.jobTitle);
        jobData.append("job_created_at", new Date().toISOString().split('T')[0]);
        jobData.append("job_expires_at", new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
        jobData.append("is_approved", 0);
        jobData.append("is_active", 0);
        jobData.append("job_file", formData.jobFile);
        jobData.append("job_category", formData.category);
        jobData.append("job_type", formData.jobType);
        jobData.append("job_country", formData.Country);
        jobData.append("job_state", formData.state);
        jobData.append("job_zip_code", formData.zipCode);
        jobData.append("job_city", formData.city);
        jobData.append("job_address", formData.Address);
        jobData.append("company_name", formData.companyName);
        jobData.append("company_url", formData.website);
        jobData.append("company_email", formData.companyEmail);
        jobData.append("consent", formData.consent);


        const requestOptions = {
            method: "POST",
            body: jobData,
        };

        fetch("https://empowercare.me/wp-json/empower/staffing/postjob", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((result) => {

                toast.success("Job post has been successfully sent to admin for approval.");
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
                })
            })
            .catch((error) => toast.error("An error occurred while posting the job. Please try again later."));;




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
                                                    <option value="">--Job Category--</option>
                                                    <option value="Advanced Practice">Advanced Practice</option>
                                                    <option value="Behavioral Health">Behavioral Health</option>
                                                    <option value="Bilingual">Bilingual</option>
                                                    <option value="Direct Hire">Direct Hire</option>
                                                    <option value="Educator">Educator</option>
                                                    <option value="Gerontology">Gerontology</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Mental Health">Mental Health</option>
                                                    <option value="New Grad">New Grad</option>
                                                    <option value="Pediatric">Pediatric</option>
                                                    <option value="Psychiatry">Psychiatry</option>
                                                    <option value="Substance Abuse">Substance Abuse</option>
                                                    <option value="Supervisor">Supervisor</option>
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