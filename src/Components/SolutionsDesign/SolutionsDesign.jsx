import image from '../../Assets/staff.png'
import './SolutionsDesign.scss'
const SolutionsDesign = ({img,meta,heading1,heading2,heading3,bullet1,bullet2,bullet3,bullet4,description1,description2,btn1,btn2}) => {
    
    return (
        <div className="sd-sec">
            <div className="sd-container">
                <div className="sd-wrapper ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="left-content">
                                    <span className="meta">{meta}</span>
                                    <h2 className="heading">
                                     {heading1}   <span>{heading2}  </span> 
                                     {heading3 && (<>{heading3}</>)}  
                                    </h2>
                                    <p className="description">
                                        {bullet1 && bullet2 && bullet3 && bullet4 ?(<>
                                            <ul>
                                            <li>{bullet1}</li>
                                            <li>{bullet2}</li>
                                            <li>{bullet3}</li>
                                            <li>{bullet4}</li>
                                        </ul>
                                        </>):(<>
                                        <p className='description1'>{description1}</p> <br />
                                        <p className='description1'>{description2}</p>
                                        </>)}
                                       
                                    </p>
                                    
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>{btn1}</span>
                                        </button>
                                        <button className="signup-btn">
                                            <span>{btn2}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="right-content">
                                   <div className="image-sec">
                                        <img className='sd-img' src={img} alt="image" />
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsDesign