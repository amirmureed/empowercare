import './Form.scss'
const Form=()=>{
    return (<>
 <div className="formcontainer">
      <div className="content">
        <div className="text-content">
          <h6><b>JOIN US NOW</b></h6>
          <h1><b>READY TO <span className='text-grad'>DIVE IN</span><br />& MAKE A SPLASH</b></h1>
          <br />
          <p><b>A movement that goes beyond staffing</b></p>
          <p>Ready to dive in and make a splash? Join the EmpowerCare Ripple Effect revolution today! </p>
          <p>Visit our website or contact our Ripple Effect Coordinator at rippleeffect@empowercare.com <span><br /> to learn how you can be part of the change.</span></p>
          <div className="buttons">
            <button className='btn1'>QUICK APPLY</button>
            <button className='btn2'>CONTACT US</button>
          </div>
        </div>
        <div className="form-content">
          <form>
            <h6>JOIN EMPOWERCARE</h6><br />
            <div className='row-input'>
            <input type="text" placeholder="Input 1" className="rounded-input" />
            <input type="text" placeholder="Input 2" className="rounded-input" />
            </div>
            <input type="text" placeholder="Input 3" className="rounded-input" />
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
            <button className='btn' type="submit">JOIN NOW</button>
          </form>
        </div>
      </div>
    </div>
    </>)
}
export default Form 