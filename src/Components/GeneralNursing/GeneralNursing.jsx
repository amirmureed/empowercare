import './GeneralNursing.scss'
import img1 from '../../Assets/Group 332.png'
import img2 from '../../Assets/Group 333.png'
import img3 from '../../Assets/Group 334.png'
import img4 from '../../Assets/Group 335.png'
const GeneralNursing = ({text1,text2,text3,text4}) => {
    return (<>
        <div className="general-nursing">
            <div className="container">
                <div className="wrapper">
                    <div className='top-content'>
                    <h2 className='heading'>GENERAL <span className='text_grad_green'>NURSING</span> ALSO <br /> KNOWN AS </h2>
                    </div>
                    <br />
                    <div className='boxes'>
                    <div className="row">
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='box1'>
                         <div className="image-container">
                                    <img className="border-img" src={img1} alt="" />
                                </div><br />
                            <div className='content'>
                           
                                <ul>
                                    <li>{text1}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='box1'>
                             <div className="image-container">
                                    <img className="border-img" src={img2} alt="" />
                                </div><br />
                            <div className='content'>
                               
                                <ul>
                                    <li>{text2}</li>
                                </ul>
                            </div>
                            </div>
                        </div><br />
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='box1'>
                         <div className="image-container">
                                    <img className="border-img" src={img3} alt="" />
                                </div><br />
                            <div className='content'>
                           
                                <ul>
                                    <li>{text3}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='box1'>
                         <div className="image-container">
                                    <img className="border-img" src={img4} alt="" />
                                </div><br />
                            <div className='content'>
                           
                                <ul>
                                    <li>{text4}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default GeneralNursing