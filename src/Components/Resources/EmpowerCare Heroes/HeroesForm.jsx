import newsletterarrow from '../../../Assets/h3_newsletter_shape0.png'
import './HeroesForm.scss'
const HeroesForm=()=>{
    return(<>
    <div className="heroes_form">
      <div className="container">
          <div className="heroes-form-wrapper">
              <div className="row">
                  <div className="col-md-6">
                      <div className="left-content">
                          <span className="meta">JOIN US NOW</span>
                          <h2 className="heading">
                              JOIN THE
                              <span className='text_grad_red'> EMPOWERCARE </span> FAMILY
                          </h2>
                          <p className="description">We invite you to join our team of dedicated healthcare professionals who are making a difference every day.</p>
                          <p>Experience the EmpowerCare difference – a culture that cares for you, so you can care for others.</p><br />
                          
                            <div className='row'>
                                <div className='btns'>
                              <a class="btn_red" href="/">QUICK APPLY</a>
                              <a href="/" className='learn_more'>CONTACT US</a>
                              </div>
                              </div>
                          
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="right-content">
                        <img className='form-icon' src={newsletterarrow} alt="" />
                        <div className='form-wrapper'>
                          <h4>JOIN EMPOWERCARE</h4>
                          <form className='contact_form'>
                            <div className='row-input'>
                              <input type="text" placeholder="Full Name" className="rounded-input" />
                              <input type="text" placeholder="Phone Number" className="rounded-input" />
                            </div>
                            <input type="text" placeholder="Email Address" className="rounded-input" />
                            <select>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <select>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                            </select>
                            <select>
                              <option value="option1">Option 1</option>
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
    </>)
}
export default HeroesForm