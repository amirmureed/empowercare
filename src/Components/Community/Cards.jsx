import approach1 from '../../Assets/approach1.png'
import './Cards.scss'
const Cards = ({description1,description2,description3,description4}) => {
    return (
        <>
<div className="approach-sec">
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
                                        <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h6 className="heading">{description2}</h6>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h6 className="heading">{description3}</h6>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="approach-box active">
                                    <div className="left-sec">
                                        <div className="sec-img">
                                            <img src={approach1} alt="approach1" />
                                        </div>
                                        <div className="text-area">
                                            <h6 className="heading">{description4}</h6>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                
                               
                                
                            </div>
                        </div>
                        {/* <div className="bottom-btn">
                            <button className="signup">
                                <span>Sign up</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards