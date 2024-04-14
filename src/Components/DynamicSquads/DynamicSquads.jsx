import './DynamicSquads.scss'
import empowercareimg from '../../Assets/h2_about_img.png'
const DynamicSquads = () => {
    return (
        <div className="DynamicSquads">
            <div className="DynamicSquads-container">
                <div className="empowercare-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-content">
                                    <span className="meta">DYNAMIC SQUADS</span>
                                    <h2 className="heading">
                                        Dynamic <span>Squads:</span><br /> Your Personalized Path to Success.
                                    </h2>
                                    <p className="description">
                                        EmpowerCare's Dynamic Squads, you're in control of your career, enjoying the flexibility to choose your schedule and assignment on your terms. Our dedicated support system is always there to help you maximize your earnings and find the perfect opportunities to suit your skills and preferences.
                                    </p><br />
                                    <ul>
                                        <li>
                                        Partner with Dynamic Squads for success every step of the way
                                        </li>
                                        <li>
                                        Enjoy the flexibility to choose your schedule, and assignment
                                        </li>
                                        <li>
                                        Leverage our dedicated support system to maximize your earnings
                                        </li>
                                        <li>
                                        Find perfect opportunities that suit your skills and preferences
                                        </li>
                                    </ul>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="section-img">
                                    <img className='img' src={empowercareimg} alt="empowercareimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicSquads;
