import './Unparalleled.scss'
import activearrow from '../../Assets/active-arrow.png'
const Unparalleled = () => {
    return (<>
        <div className="unparalleled-sec">
            <div className="container">
                <div className="content">
                    <h6>
                        JOIN US NOW
                    </h6>
                    <h2>
                        <b>DISCOVER THE <span className='text_grad_green'>UNPARALLELED</span>
                            <br /> FLEXIBILITY AND REWARDS </b>
                    </h2>
                    <br />
                    <div className='p-txt'>
                        <p>Discover the unparalleled flexibility and rewards that come with per diem job opportunities through EmpowerCare. As your ally in
                            navigating the healthcare job market, we specialize in pairing professionals like you with premier facilities nationwide, offering the
                            work variety and schedule flexibility your career demands
                        </p>
                    </div>
                </div>
                <div className='su-btn'>
                    <div className='btn-wrapper'>
                        <a className='btn_green'>SIGNUP</a>
                    </div>
                    <div className='arrow_img'>
                        <img className='arr-img' src={activearrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Unparalleled