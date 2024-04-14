import './HowtoBecome.scss'
import img1 from '../../Assets/Group 350.png'
import img2 from '../../Assets/Group 351.png'
const HowtoBecome = () => {
    return (<>
        <div className="how-to-become">
            <div className="container">
                <div className="how-to-become-wrapper">
                    <div className="top-content">
                        <h6 className='meta'>JOIN US NOW</h6>
                        <h2 className='heading'>HOW TO <span className='text_grad_black'>BECOME</span> A <br /> GENERAL NURSE:</h2>
                    </div>
                    <div className='bottom-content'>
                        <div className="row">
                            <div className='col-lg-6' >
                                <div className='img-sec'>
                                    <img src={img1} alt="logo1" />
                                </div><br />
                                <h6 className='description'>Registered Nurse (RN) License</h6><br />
                                <p className='description2'>To become a General Nurse, you must earn your registered nurse (RN) license by completing an Associate Degree in Nursing (ADN) or a Bachelor of Science in Nursing (BSN) program and passing the NCLEX-RN exam.</p><br />
                                <p className='description2'> Some nurses choose to specialize in a particular area of nursing, such as pediatrics, geriatrics, or oncology, through additional education and certifications.</p>
                            </div>
                            <div className='col-lg-6' >
                                <div className='img-sec'>
                                    <img src={img2} alt="logo2" />
                                </div><br />
                                <h6 className='description'>Wide Range of Opportunities</h6><br />
                                <p className='description2'>EmpowerCare offers a wide range of opportunities for General Nurses,
                                    including RN jobs, staff nurse positions, floor nurse contract jobs, per diem
                                    bedside nurse jobs, and travel nursing assignments.</p><br />
                                <p className='description2'> Our goal is to empower you to find the perfect position that aligns with
                                    your skills, experience, and career goals while providing efficient and caring
                                    support throughout your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default HowtoBecome