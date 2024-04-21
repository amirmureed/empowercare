import './HearFrom.scss';

const HearFrom = () => {

    return (
        <div className='hear-from'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="left-content">
                            <span className="meta">WHO IS THIS FOR</span>
                            <h2 className="heading">
                                HEAR FROM OUR SAISFIED <span> HEALTHCARE</span> PROFESSIONALS
                            </h2>
                            <p className="description">"Choosing EmpowerCare transformed my career. The flexibility and
                                diversity of work environments have enriched my professional life
                                immensely." - Sarah, RN
                            </p>
                            <p className="description">"Per diem work with EmpowerCare has brought the perfect balance
                                to my life. The compensation is excellent, and fitting work around my
                                family has never been easier." - Mark, CNA
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="right-content">
                            <div className="content-row">
                                <div className="content-box active">
                                    <h5 className="heading">Join EmpowerCare at No Cost:</h5>
                                    <p className="description">Sign up effortlessly and tap into a network designed to enhance
                                        your career in healthcare with tailored opportunities.</p>
                                </div>
                                <div className="content-box">
                                    <h5 className="heading">Effortless Job Matching:</h5>
                                    <p className="description">Let the days of tiresome job hunting be behind you. Share your
                                        goals with us, and we'll swiftly connect you with prime healthcare
                                        positions, making your dream job a hassle-free reality.</p>
                                </div>
                                <div className="content-box">
                                    <h5 className="heading">Enjoy a Fulfilling Career:</h5>
                                    <p className="description">With EmpowerCare, competitive pay is just the beginning.
                                        We're committed to ensuring your progress in healthcare is both
                                        financially and professionally rewarding.</p>
                                </div>
                            </div><br />
                            <div className="sec-btns">
                                <button className="learn-btn">
                                    <span>Sign up</span>
                                </button>
                                <button className="signup-btn">
                                    <span>Explore More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HearFrom