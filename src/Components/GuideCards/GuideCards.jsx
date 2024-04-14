import { FiArrowDownRight } from "react-icons/fi"
import logo from '../../Assets/Group 368.png'
import logo2 from '../../Assets/Group 369.png'
import './GuideCards.scss'
const GuideCards = () => {
    return (<>
        <div className="guide-cards">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="job-box">
                            <div className="job-logo">
                                <img src={logo} alt="job1" />
                            </div>
                            <h4 className="heading">Find Your Next General Nursing Job with
                                EmpowerCare</h4>
                            <p className="description">EmpowerCare is dedicated to helping you find the perfect General
                                Nursing position to fit your lifestyle and career goals.</p>
                            <p className="description">Whether you're looking for a full-time RN job, a part-time staff nurse
                                position, or a travel nursing assignment, our team is here to support
                                you every step of the way</p>
                            <a href="/">LEARN MORE <FiArrowDownRight /></a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="job-box active ">
                            <div className="job-logo">
                                <img src={logo2} alt="job3" />
                            </div>
                            <h4 className="heading">Education and Training for General
                                Nurses</h4>
                            <p className="description">In addition to the required RN education, General Nurses must
                                continuously update their knowledge and skills to stay current with
                                the latest advancements in patient care and medical technology.
                                EmpowerCare is committed to empowering our nurses by providing
                                access to ongoing education and training opportunities, ensuring
                                you have the tools and resources needed to excel in your career.</p><br />

                            <a href="/">LEARN MORE <FiArrowDownRight /></a>
                        </div><br />
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default GuideCards