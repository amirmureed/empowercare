import './OurHistory.scss'
import img from '../../Assets/h-1.png'
const OurHistory=()=>{
    return(<>
    <div className='our-history'>
     <div className='container'>
        <div className='our-history-wrapper'>
            <div className='row'>
               <div className='col-lg-6'>
                <div className='img-sec'>
                    <img className='img' src={img} alt="" />
                </div>
                </div>
                <div className='col-lg-6'>
                <div className='content'>
                      <h6 className='meta'>ABOUT US</h6>
                      <h2 className='heading'>OUR <span className='text_grad_green'>HISTORY</span></h2><br />
                      <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vel numquam, earum quidem magnam tenetur esse modi quae animi, repellendus iste quam cupiditate enim laborum ex natus commodi nihil inventore?</p>
                      <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vel numquam, earum quidem magnam tenetur esse modi quae animi, repellendus iste quam cupiditate enim laborum ex natus commodi nihil inventore?</p>
                      <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vel numquam, earum quidem magnam tenetur esse modi quae animi, repellendus iste quam cupiditate enim laborum ex natus commodi nihil inventore?</p><br />
                    <a className='learn_btn' href="">Learn More</a><br />
                </div><br />
               </div>
            </div>
        </div>
     </div>
    </div>
    </>)
}
export default OurHistory