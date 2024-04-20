import './Dropdown.scss'
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import icon1 from '../../Assets/1 Main Icons (1).png'
import icon2 from '../../Assets/1 Main Icons (2).png'
import icon3 from '../../Assets/1 Main Icons (3).png'
import icon4 from '../../Assets/1 Main Icons (4).png'
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
import ellipse1 from '../../Assets/Ellipse 49.png'
import { ArrowRight } from '@mui/icons-material'
const Dropdown = ({ professionals, about, facilities }) => {
    const Style = {
       
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#F4F4F4'
        }
    };

    const Box1 = () => {
        const Cards = ({ imgSrc, title, description, background }) => {
            return (
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
                        <p className='box1-p'><ArrowRight /> FAQ</p>
                    </Box>
                </Stack>
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
                imgSrc={icon2}  
                title="Staffing Service Type"
                description="Your Trusted Partner for Temp-to-Hire Staffing Solutions"
                background="#4EB3E8"
            />
            <Cards
                imgSrc={icon3}  
                title="Staffing Service Type"
                description="Your Trusted Partner for Temp-to-Hire Staffing Solutions"
                background="linear-gradient(-134deg, #71ba32 0.00%,#4eb3e8 100.00%)"
            />
            <Cards
                imgSrc={icon4}  
                title="Staffing Service Type"
                description="EmpowerCare: A Beacon of Flexibility in Per Diem Staffing"
                background="#5F9E29"
            />
            <Cards
                imgSrc={icon4}  
                title="TRAVEL NURSING"
                description="Your Passport to Unforgettable Travel Nursing Adventures"
                background="linear-gradient(-130deg, #ee8d80 0.00%,#e6632a 100.00%)"
            />
                </Stack>
            </Box>
        )
    }
    const Box2 = () => {
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
                    <h5 style={{ color: 'black' }}>Staffing Solution</h5>

                    <Content
                        imgSrc={logo1}
                        description={'Non-Clinical Healthcare Staffing by EmpowerCare'}
                    />
                    <Content
                        imgSrc={logo2}
                        description={'Empowering your Community Health Center with Top Talent'}
                    />
                    <Content
                        imgSrc={logo3}
                        description={'Empowering Hospitals and Health Systems with Top Talent'}
                    />
                    <Content
                        imgSrc={logo4}
                        description={'EmpowerCare Corporate Staffing: Empower Employee Health'}
                    />
                    <Content
                        imgSrc={logo5}
                        description={'Elevating Surgical Excellence with EmpowerCare Staff'}
                    />

                    <Content
                        imgSrc={logo6}
                        description={'Elevate Student Health: EmpowerCare Education Staffing'}
                    />
                    <Content
                        imgSrc={logo7}
                        description={'Elevate Student Health with our School Healthcare Staffing'}
                    />
                    <Content
                        imgSrc={logo8}
                        description={'Elevate Mental Health Care with EmpowerCare Staffing'}
                    />
                    <Content
                        imgSrc={logo9}
                        description={'Elevate Direct Care with EmpowerCare  Professionals'}
                    />
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

                </Stack>
            </Box>)

    }

    const Box3 = ({ Boxwidth, px, background, spacing, button }) => {
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
                    <h5 style={{ color: 'black' }}>Differentiator</h5>
            <a className='menu_anchor' href="/resources/shift-makers">    
                <Box3Stack
                    imgSrc={ellipse1}
                    title="Shiftmakers referal program"
                    description="Shift Maker Referral Program for Nurses"
            /></a>
            <a className='menu_anchor' href="/resources/network">
                <Box3Stack
                    imgSrc={ellipse1}
                    title="Unsung Heroes No More"
                    description="Unsung Heroes No More: Shift Champions in the Spotlight!!"
            /></a>
            <a className='menu_anchor' href="/resources/">
                <Box3Stack
                    imgSrc={ellipse1}
                    title="Unsung Heroes No More"
                    description="Unsung Heroes No More: Shift Champions in the Spotlight!!"
            /></a>
            <a className='menu_anchor' href="/resources/benefits">
                <Box3Stack
                    imgSrc={ellipse1}
                    title="Unsung Heroes No More"
                    description="Unsung Heroes No More: Shift Champions in the Spotlight!!"
            /></a>
            <a className='menu_anchor' href="/resources/empowercare-heroes">
                <Box3Stack
                    imgSrc={ellipse1}
                    title="Unsung Heroes No More"
                    description="Unsung Heroes No More: Shift Champions in the Spotlight!!"
            /></a>
                    {button && (<><a className='btn_green' href="/">Nursing Guide</a></>)}
                </Stack>
            </Box>
        )
    }
    const AboutBox2 = () => {
        return (<>
            <Box width={'23%'}   >
                <Stack style={{ backgroundColor: '#FCFCFC' }} direction={'column'} spacing={4} px={2} py={2}>
                    <h5 style={{ color: 'black' }}>About Empowercare</h5>
                    <a className='menu_anchor' href="/about">
                        <Stack direction={'row'} spacing={2}>
                                <img style={{ width: '27px' }} src={logo1} alt="" />
                                <h6 className="box3-h6" style={{ color: 'black' }} >About Us</h6>
                        </Stack>
                    </a>
                    <a className='menu_anchor' href="/about/ceo">
                        <Stack direction={'row'} spacing={2}>
                                <img style={{ width: '27px' }} src={logo1} alt="" />
                                <h6 className="box3-h6" style={{ color: 'black' }} >Founder & CEO</h6>
                        </Stack>
                    </a>
                    <a className='menu_anchor' href="/about/community">
                        <Stack direction={'row'} spacing={2}>
                                <img style={{ width: '27px' }} src={logo1} alt="" />
                                <h6 className="box3-h6" style={{ color: 'black' }} >Community</h6>
                        </Stack>
                    </a>
                    <a className='menu_anchor' href="/about/career">
                        <Stack direction={'row'} spacing={2}>
                                <img style={{ width: '27px' }} src={logo1} alt="" />
                                <h6 className="box3-h6" style={{ color: 'black' }} >Careers</h6>
                        </Stack>
                    </a>
                    <a className='menu_anchor' href="/about/leadership">
                        <Stack direction={'row'} spacing={2}>
                                <img style={{ width: '27px' }} src={logo1} alt="" />
                                <h6 className="box3-h6" style={{ color: 'black' }} >Our Leadership</h6>
                        </Stack>
                    </a>
                </Stack>
            </Box>
        </>)
    }
    return (<>


        <Stack direction={'row'} spacing={1} py={3}>
            {facilities ? (<>
                <Box1 />
                <Box2

                />
                <Box3
                    Boxwidth={'23%'} background={'#FCFCFC'} spacing={7}
                />
            </>)
                : about ? (<>

                    <Box3
                        Boxwidth={'55%'} px={4} spacing={3} />
                    <AboutBox2 />
                </>) : (<>
                    <Box1 />
                    <Box2 />
                    <Box3 Boxwidth={'23%'} px={3} background={'#FCFCFC'} spacing={3} />
                    <Box3 Boxwidth={'23%'} px={1} spacing={3} button={true} />
                </>)

            }





        </Stack>

    </>)
}
export default Dropdown