import React from 'react';
import activearrow from '../../Assets/active-arrow.png';
import newsletterarrow from '../../Assets/h3_newsletter_shape0.png';
import './Form.scss';

const Form = () => {
  return (
    <>
    <div className="content_with_form">
      <div className="container">
          <div className="empowercare-wrapper">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="left-content">
                          <span className="meta">Who We Are</span>
                          <h2 className="heading">
                              Transform
                              <span className='text_grad_red'> EmpowerCare </span> Staffing, Empower Lives
                          </h2>
                          <p className="description">At EmpowerCare, we offer a wide range of staffing options to meet your unique needs. Our extensive network of pre-screened healthcare opportunities includes:</p>
                      
                          <div class="priemer-cta">
                              <a class="btn_red" href="/">Sign Up</a>
                              <div className="active-img">
                                  <img src={activearrow} alt="activearrow" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="right-content">
                        <img className='form-icon' src={newsletterarrow} alt="" />
                        <div className='form-wrapper'>
                          <h4>JOIN EMPOWERCARE</h4>
                          <form className='contact_form'>
                            <div className='row-input'>
                              <input type="text" placeholder="Full Name" className="rounded-input" />
                              <input type="text" placeholder="Phone No" className="rounded-input" />
                            </div>
                            <input type="text" placeholder="Email Address" className="rounded-input" />
                            <select>
                              <option value="option1">Area of speciality</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <select>
                              <option value="option1">Years of experience</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <select>
                              <option value="option1">Preffered Location(s)</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <button className='contact-submit-btn' type="submit">JOIN NOW</button>
                          </form>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Form 