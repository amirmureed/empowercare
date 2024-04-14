import approach1 from '../../Assets/approach1.png'
import './CardsGreen.scss'
const CardsGreen = ({ description1, description2, description3, description4, description5 }) => {
    return (
        <>
            <div className="cards_green_sec">
                <div className="container">
                    <div className="approach-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="approach-box">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h2 className="heading">{description1}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        {/* <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div> */}
                                        <div className="text-area">
                                            <h6 className="heading">{description2}</h6>
                                            <p>Access to a diverse pool of highly skilled healthcare professionals</p>
                                        </div>
                                        <div class="right-sec">
                                            <button class="approach-btn">
                                                <span>Learn More</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        {/* <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div> */}
                                        <div className="text-area">
                                            <h6 className="heading">{description3}</h6>
                                            <p>Access to a diverse pool of highly skilled healthcare professionals</p>
                                        </div>
                                        <div class="right-sec">
                                            <button class="approach-btn">
                                                <span>Learn More</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        {/* <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div> */}
                                        <div className="text-area">
                                            <h6 className="heading">{description4}</h6>
                                            <p>Access to a diverse pool of highly skilled healthcare professionals</p>
                                        </div>
                                        <div class="right-sec">
                                            <button class="approach-btn">
                                                <span>Learn More</span>
                                            </button>
                                        </div>
                                    </div>
                                </div> 
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        <div className="text-area">
                                            <h6 className="heading">{description5}</h6>
                                            <p>Access to a diverse pool of highly skilled healthcare professionals</p>
                                        </div>
                                        <div class="right-sec">
                                            <button class="approach-btn">
                                                <span>Learn More</span>
                                            </button>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="sec-btns"><button class="learn-btn"><span>Learn More</span></button><button class="signup-btn"><span>Sign up</span></button></div>
                    </div>   
                </div>
            </div>
        </>
    )
}

export default CardsGreen