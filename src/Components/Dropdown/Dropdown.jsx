import './Dropdown.scss'
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import icon1 from '../../Assets/1 Main Icons (1).png'
import icon2 from '../../Assets/1 Main Icons (2).png'
import icon3 from '../../Assets/1 Main Icons (3).png'
import icon4 from '../../Assets/1 Main Icons (4).png'
import icon5 from '../../Assets/management.png'
import logo1 from '../../Assets/Group 607.png'
import logo2 from '../../Assets/Group 608.png'
import logo3 from '../../Assets/Group 609.png';
import logo4 from '../../Assets/Group 610.png';
import logo5 from '../../Assets/Group 611.png';
import logo6 from '../../Assets/Group 612.png';
import logo7 from '../../Assets/Group 613.png';
import logo8 from '../../Assets/Group 614.png';
import logo9 from '../../Assets/Group 615.png';
import logo10 from '../../Assets/Group 616.png';
import logo11 from '../../Assets/Group 620.png';
import logo12 from '../../Assets/Group 618.png';
import logo13 from '../../Assets/Group 619.png';
import logo14 from '../../Assets/Group 626.png'
import logo15 from '../../Assets/Group 627.png'
import logo16 from '../../Assets/Group 628.png'
import logo17 from '../../Assets/Group 629.png'
import logo18 from '../../Assets/Group 630.png'
import logo19 from '../../Assets/Group 631.png'
import logo20 from '../../Assets/Group 632.png'
import logo21 from '../../Assets/Group 633.png'
import logo22 from '../../Assets/Group 634.png'
import ellipse1 from '../../Assets/navicons/ellipse nav img1.png'
import ellipse2 from '../../Assets/navicons/ellipse nav img2.png'
import ellipse3 from '../../Assets/navicons/ellipse nav img3.png'
import ellipse4 from '../../Assets/navicons/ellipse nav img4.png'
import ellipse5 from '../../Assets/navicons/ellipse nav img5.png'
import ellipse6 from '../../Assets/navicons/ellipse nav img6.png'
import ellipse7 from '../../Assets/navicons/ellipse nav img7.png'
import ellipse8 from '../../Assets/navicons/ellipse nav img8.png'
import ellipse9 from '../../Assets/navicons/ellipse nav img9.png'
import ellipse10 from '../../Assets/navicons/ellipse nav img10.png'
import about1 from '../../Assets/navicons/Group 612.png'
import about2 from '../../Assets/aboutusicons/Group 660.png'
import about3 from '../../Assets/aboutusicons/Group 661.png'
import about4 from '../../Assets/aboutusicons/Group 663.png'
import about5 from '../../Assets/aboutusicons/Group 664.png'
import { ArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import NursingDropdown from '../NursingDropdown/NursingDropdown'
const Dropdown = ({ professionals, about, facilities }) => {
    const Style = {
       
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#F4F4F4'
        }
    };

    const Box1 = ({facilities }) => {
        const Cards = ({ imgSrc, title, description, background,}) => {
            return (
                <Link style={{textDecoration:'none'}} to={'/facilities/staffing-solutions'}>
                <Stack
                    px={2}
                    py={2}
                    style={{ background: background, borderRadius: '5px' }} 
                    direction={'row'}
                    spacing={3}
                >
                    <img src={imgSrc} alt="" />
                    <Box>
                        <h4>{title}</h4>
                        <p className='box1-p'>{description}</p>
                       <Link style={{textDecoration:'none'}} to={'/professionals/faqs'}> <p className='box1-p'><ArrowRight /> FAQ</p></Link>
                    </Box>
                </Stack>
                </Link>
            );
        };
        
        return (
            <Box px={2} width={'32%'} >
                <Stack direction={'column'} spacing={2}>
                <Cards
                imgSrc={icon1} 
                title="Contracts"
                description="Your Trusted Partner for Temp-to-Hire Staffing Solutions"
                background="linear-gradient(-134deg, #4eb3e8 0.00%,#71ba32 100.00%)"
            />
            <Cards
                imgSrc={icon5}  
                title={facilities ? "Permanent Staffing" : "Staffing Service Type"}
                description= { facilities ? "Your Trusted Partner for Permanent Staffing Solutions": "Your Trusted Partner for Temp-to-Hire Staffing Solutions"} 
                background="#4EB3E8"
            />
            <Cards
                imgSrc={icon2}  
                title={facilities ? "Contract Staffing" : "Staffing Service Type"}
                description={ facilities ? "Your Trusted Partner for Contract Staffing Solutions":"Your Trusted Partner for Temp-to-Hire Staffing Solutions"}
                background="linear-gradient(-134deg, #71ba32 0.00%,#4eb3e8 100.00%)"
            />
            <Cards
                imgSrc={icon4}  
                title={facilities ? "Per Diem Staffing" : "Staffing Service Type"}
                description={ "EmpowerCare: A Beacon of Flexibility in Per Diem Staffing"}
                background="#5F9E29"
            />
            <Cards
                imgSrc={icon3}  
                title="TRAVEL NURSING"
                description="Your Passport to Unforgettable Travel Nursing Adventures"
                background="linear-gradient(-130deg, #ee8d80 0.00%,#e6632a 100.00%)"
            />
                </Stack>
            </Box>
        )
    }
    const Box2 = ({professionals}) => {
        const Content = ({ imgSrc, description }) => {
            return (
                <Stack direction={'row'} spacing={2} sx={Style} >
                    <img style={{ width: '27px' }} src={imgSrc} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>{description}</p>
                </Stack>
            );
        };
        return (
            <Box width={'22%'}   >
                
                <Stack style={{ backgroundColor: '#FCFCFC' }} direction={'column'} spacing={4} px={2} py={2}>
                    <h5 style={{ color: 'black' }}>{professionals ? "Professionals Landing Pages" : "Staffing Solution"}</h5>
                    <Link style={{textDecoration:'none'}} to={professionals? "/professionals/directcare-career" :"/"}>
                    <Content
                        imgSrc={professionals? logo14 : logo1}
                        description={professionals?"Your Pathway to Meaningful Direct Care Careers":'Non-Clinical Healthcare Staffing by EmpowerCare'}
                    /></Link>
                    <Content
                        imgSrc={professionals? logo15 :logo2}
                        description={professionals?"Your Passport to Unforgettable Travel Nursing Adventures":'Empowering your Community Health Center with Top Talent'}
                    />
                    <Content
                        imgSrc={professionals? logo16 :logo3}
                        description={professionals?"Your Gateway to Extraordinary Nursing Opportunities":'Empowering Hospitals and Health Systems with Top Talent'}
                    />
                    <Content
                        imgSrc={professionals? logo17 :logo4}
                        description={professionals?"Your Gateway to Exciting Allied Health Careers":'EmpowerCare Corporate Staffing: Empower Employee Health'}
                    />
                    <Content
                        imgSrc={professionals? logo18 :logo5}
                        description={professionals?"Your CNA Career Launchpad":'Elevating Surgical Excellence with EmpowerCare Staff'}
                    />

                    <Content
                        imgSrc={professionals? logo19 :logo6}
                        description={professionals?"Non-Clinical Healthcare Careers":'Elevate Student Health: EmpowerCare Education Staffing'}
                    />
                    <Content
                        imgSrc={professionals? logo20 :logo7}
                        description={professionals?"Ignite Your Passion for Mental Health":'Elevate Student Health with our School Healthcare Staffing'}
                    />
                    <Content
                        imgSrc={professionals? logo21 :logo8}
                        description={professionals?"Empower Your Nursing Specialty: Find Your Perfect Job Now":'Elevate Mental Health Care with EmpowerCare Staffing'}
                    />
                    
                    <Content
                        imgSrc={professionals? logo22 :logo9}
                        description={professionals?"Elevate Your Advanced Practice Nursing Career":'Elevate Direct Care with EmpowerCare  Professionals'}
                    />
                    {!professionals && (<>
                        <Content
                        imgSrc={logo10}
                        description={'Elevate Care: EmpowerCare  Advanced Practice Staff'}
                    />
                    <Content
                        imgSrc={logo11}
                        description={'Elevate Care with EmpowerCare  Allied Health Staffing'}
                    />
                    <Content
                        imgSrc={logo12}
                        description={'Elevate Care Quality: EmpowerCare Skilled Nursing Staffing'}
                    />
                    <Content
                        imgSrc={logo13}
                        description={'Bridge Leadership Gaps with EmpowerCare  Interim Solutions'}
                    />
                    </>)}
                    

                </Stack>
            </Box>)

    }

    const Box3 = ({ Boxwidth, px, background, spacing, button,aboutUs }) => {
        const Box3Stack = ({ imgSrc, title, description }) => {
            return (
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={imgSrc} alt="" />
                    <Box>
                        <h6 className='box3-h6'>{title}</h6>
                        <p className='box3-p'>{description}</p>
                    </Box>
                </Stack>
            );
        };
        return (
            <Box width={Boxwidth} px={px}>
                <Stack px={2} style={{ backgroundColor: background }} py={3} direction={'column'} spacing={spacing}  >
                    {button ? (<>
                        <h5 style={{ color: 'black' }}>Professional Landing Pages</h5><br />
                        <Link to={'/resources/shift-makers'} style={{textDecoration:'none'}}>
                    <Box3Stack
                imgSrc={ellipse6}
                title="Shift Makers Referral Program"
                description="Unsung Heroes No More: Shift Champions in the Spotlight!!"
            /></Link>
            <Link to={'/resources/network'} style={{textDecoration:'none'}}>
            <Box3Stack
                imgSrc={ellipse7}
                title="Empower Your Network"
                description="Gain a winning edge with EmpowerCare Academy!"
            /></Link>
             <Link to={'/resources'} style={{textDecoration:'none'}}>
            <Box3Stack
                imgSrc={ellipse8}
                title="EmpowerCare Resources"
                description="Finding the Perfect Match Made Easy! Dynamic Squads"
            /></Link>
            <Link to={'/resources/benefits'} style={{textDecoration:'none'}}>
            <Box3Stack
                imgSrc={ellipse9}
                title="Benefits at EmpowerCare"
                description="Every Job Helps the World, The Ripple Effect!"
            /></Link>
            <Box3Stack
                imgSrc={ellipse10}
                title="Benefits That Care for You"
                description="Easy-to-use healthcare staffing tools, 3Es"
            />
                <div className='dropdown-btn'> <a className='btn_green' href="/">Nursing Guide</a>
                   <div className='dropdown-nursing'>
                                    <span className='div-span'></span><br />
                                    <span className='div-span'></span><br />
                                    <span className='div-span'></span><br />
                                    <span className='div-span'></span><br />
                                    <span className='div-span'></span><br />
                                    <span className='div-span'></span><br />
                                    <span className='div-span'></span><br />
                                    <div className='dropdown-content'>
                                        
                                        
                                        <NursingDropdown/>
                                        
                                    </div>
                                </div>
                   </div>
                   
                    </>):aboutUs ?(<>
                        <Link to={'/resources/shift-makers'} style={{textDecoration:'none'}}>
            <Box3Stack
                imgSrc={ellipse6}
                title="Shift Makers Referral Program"
                description="Unsung Heroes No More: Shift Champions in the Spotlight!!"
            /></Link>
            <Link to={'/resources/network'} style={{textDecoration:'none'}}>
            <Box3Stack
                imgSrc={ellipse7}
                title="Empower Your Network"
                description="Gain a winning edge with EmpowerCare Academy!"
            /></Link>
             <Link to={'/resources'} style={{textDecoration:'none'}}>
            <Box3Stack
                imgSrc={ellipse8}
                title="EmpowerCare Resources"
                description="Finding the Perfect Match Made Easy! Dynamic Squads"
            /></Link>
            <Link to={'/resources/benefits'} style={{textDecoration:'none'}}>
            <Box3Stack
                imgSrc={ellipse9}
                title="Benefits at EmpowerCare"
                description="Every Job Helps the World, The Ripple Effect!"
            /></Link>
            <Box3Stack
                imgSrc={ellipse10}
                title="Benefits That Care for You"
                description="Easy-to-use healthcare staffing tools, 3Es"
            /> <br />
                    </>):(<>
                        <h5 style={{ color: 'black' }}>Differentiator</h5><br />
                        <Link to={'/professionals/unsung-heroes'} style={{textDecoration:'none'}}>
                    <Box3Stack
                imgSrc={ellipse7}
                title="Unsung Heroes No More"
                description="Unsung Heroes No More: Shift Champions in the Spotlight!!"
            /></Link>
            <Box3Stack
                imgSrc={ellipse8}
                title="Gain a winning edge"
                description="Gain a winning edge with EmpowerCare Academy!"
            />
            <Box3Stack
                imgSrc={ellipse9}
                title="Finding the Perfect Match"
                description="Finding the Perfect Match Made Easy! Dynamic Squads"
            />
            <Box3Stack
                imgSrc={ellipse10}
                title="The Ripple Effect!"
                description="Every Job Helps the World, The Ripple Effect!"
            />
            <Box3Stack
                imgSrc={ellipse5}
                title="Easy-to-use, 3Es"
                description="Easy-to-use healthcare staffing tools, 3Es"
            />
                
                    </>)}
                    
                </Stack>

            </Box>
        )
    }
    const AboutBox2 = () => {
        return (<>
            <Box sx={{background:'#FCFCFC'}} width={'37%'}   >
                <Stack style={{ backgroundColor: '#FCFCFC' }} direction={'column'} spacing={4} px={2} py={2}>
                    <h5 style={{ color: 'black' }}>ABOUT EMPOWERCARE</h5>
                    <Link to={'/about'} style={{textDecoration:'none'}}>
                    <Stack sx={Style} direction={'row'} spacing={2}>
                        <img style={{ width: '27px' }} src={about1} alt="" />
                        <p className='box2-p' style={{ color: 'black' }} >ABOUT US</p>
                    </Stack></Link>
                    <Link to={'/about/ceo'} style={{textDecoration:'none'}}>
                    <Stack sx={Style} direction={'row'} spacing={2}>
                        <img style={{ width: '27px' }} src={about2} alt="" />
                        <p className='box2-p' style={{ color: 'black' }}>FOUNDER & CEO</p>
                    </Stack></Link>
                    <Link  to={'/about/community'} style={{textDecoration:'none'}}>
                    <Stack sx={Style} direction={'row'} spacing={2}>
                        <img style={{ width: '27px' }} src={about3} alt="" />
                        <p className='box2-p' style={{ color: 'black' }}>COMMUNITY</p>
                    </Stack></Link>
                    <Link to={'/about/career'} style={{textDecoration:'none'}}>
                    <Stack sx={Style} direction={'row'} spacing={2}>
                        <img style={{ width: '27px' }} src={about4} alt="" />
                        <p className='box2-p' style={{ color: 'black' }}>CAREER</p>
                    </Stack></Link>
                    <Link to={'/about/leadership'} style={{textDecoration:'none'}}>
                    <Stack sx={Style} direction={'row'} spacing={2}>
                        <img style={{ width: '27px' }} src={about5} alt="" />
                        <p className='box2-p' style={{ color: 'black' }}>LEADERSHIP</p>
                    </Stack></Link>
                </Stack>
            </Box>
        </>)
    }
    return (<>


        <Stack direction={'row'} spacing={1} py={3}>
            {facilities ? (<>
                <Box1 facilities={true} />
                <Box2

                />
                <Box3
                    Boxwidth={'23%'} background={'#FCFCFC'} spacing={7}
                />
            </>)
                : about ? (<>

                    <Box3
                        Boxwidth={'55%'} px={4} spacing={3} aboutUs={true} />
                    <AboutBox2 />
                </>) : (<>
                    <Box1 facilities={false}  />
                    <Box2 professionals={true} />
                    <Box3 Boxwidth={'23%'} px={3} background={'#FCFCFC'} spacing={3} aboutUs={false} />
                    <Box3 Boxwidth={'23%'} px={1} spacing={3} button={true} aboutUs={false} />
                </>)

            }
        </Stack>

    </>)
}
export default Dropdown