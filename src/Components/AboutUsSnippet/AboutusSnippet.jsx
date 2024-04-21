import './AboutusSnippet.scss'
import activearrow from '../../Assets/active-arrow.png'
const AboutusSnippet = () => {
    return (<>
        <div className="about-us-snippet">
            <div className="container">
                <div className="content">
                    <h6 className="meta">
                        ABOUT US
                    </h6>
                    <h2 className="heading"><span className="text_grad_green">ABOUT</span> US SNIPPET</h2><br />
                    <p className="description">EmpowerCare has been a leader in non-clinical healthcare staffing for over 18 years. Our commitment to excellence, personalized service, and innovation sets us apart as the go-to partner for healthcare facilities seeking to streamline operations with skilled non-clinical professionals.</p>
                    <div className='arrow_img'>
                        <img className='arr-img' src={activearrow} alt="arrow" />
                    </div>
                    <div className="butns">
                        <a className='btn_green' href="">CONTACT US</a><br />
                        <a href="/about" className='learn_more'>LEARN MORE</a>
                    </div>
                   
                </div>
            </div>
        </div>
    </>)
}
export default AboutusSnippet