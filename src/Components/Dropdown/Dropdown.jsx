import './Dropdown.scss'
import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import icon1 from '../../Assets/1 Main Icons (1).png'
import logo1 from '../../Assets/Group 607.png'
import ellipse1 from '../../Assets/Ellipse 49.png'
import { ArrowRight } from '@mui/icons-material'
const Dropdown = ({professionals,about,facilities}) => {

    const Box1 = () => {
        return (
            <Box px={2} width={'40%'} >
                <Stack direction={'column'} spacing={2}>
                    <Stack px={2} py={2} style={{ background: '#71ba32', background: 'linear-gradient(-134deg, #4eb3e8 0.00%,#71ba32 100.00%)', borderRadius: '5px' }} direction={'row'} spacing={3}>
                        <img style={{ width: '50px', height: "50px" }} src={icon1} alt="" />
                        <Box>
                            <h4>Contracts</h4>
                            <p className='box1-p'>Your Trusted Partner for Temp-to-Hire Staffing Solutions</p>
                            <p className='box1-p'><ArrowRight /> FAQ</p>


                        </Box>
                    </Stack>
                    <Stack px={2} py={2} style={{ background: '#4EB3E8' }} direction={'row'} spacing={3}>
                        <img style={{ width: '50px', height: "50px" }} src={icon1} alt="" />
                        <Box>
                            <h4>Contracts</h4>
                            <p className='box1-p'>Your Trusted Partner for Temp-to-Hire Staffing Solutions</p>
                            <p className='box1-p'><ArrowRight /> FAQ</p>
                        </Box>
                    </Stack>
                    <Stack px={2} py={2} style={{ background: '#71ba32', background: 'linear-gradient(-134deg, #71ba32 0.00%,#4eb3e8 100.00%)' }} direction={'row'} spacing={3}>
                        <img style={{ width: '50px', height: "50px" }} src={icon1} alt="" />
                        <Box>
                            <h4>Contracts</h4>
                            <p className='box1-p'>Your Trusted Partner for Temp-to-Hire Staffing Solutions</p>
                            <p className='box1-p'><ArrowRight /> FAQ</p>
                        </Box>
                    </Stack>
                    <Stack px={2} py={2} style={{ background: '#5F9E29', }} direction={'row'} spacing={3}>
                        <img style={{ width: '50px', height: "50px" }} src={icon1} alt="" />
                        <Box>
                            <h4>Contracts</h4>
                            <p className='box1-p'>Your Trusted Partner for Temp-to-Hire Staffing Solutions</p>
                            <p className='box1-p'><ArrowRight /> FAQ</p>
                        </Box>
                    </Stack>
                    <Stack px={2} py={2} style={{ background: '#ee8d80', background: 'linear-gradient(-130deg, #ee8d80 0.00%, #e6632a 100.00%' }} direction={'row'} spacing={3}>
                        <img style={{ width: '50px', height: "50px" }} src={icon1} alt="" />
                        <Box>
                            <h4>Contracts</h4>
                            <p className='box1-p'>Your Trusted Partner for Temp-to-Hire Staffing Solutions</p>
                            <p className='box1-p'><ArrowRight /> FAQ</p>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        )
    }
    const Box2 = () => {
        return (<Box width={'26%'}   >
            <Stack style={{ backgroundColor: '#FCFCFC' }} direction={'column'} spacing={4} px={2} py={2}>
                <h5 style={{ color: 'black' }}>Staffing Solution</h5>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }} >Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
            </Stack>
         </Box>)

           }
          
    const Box3 = ({Boxwidth,px,background,spacing,button}) => {
        return(
        <Box width={Boxwidth} px={px}>
            <Stack px={2}   style={{ backgroundColor: background }} py={3} direction={'column'} spacing={spacing}  >
                <h5 style={{color:'black'}}>Differentiator</h5><br />
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '30px', height: "30px" }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6' >Unsung Heroes No More</h6>
                        <p className='box3-p'>Unsung Heroes No More: Shift Champions in the Spotlight!!</p></Box>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '30px', height: "30px" }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6' >Unsung Heroes No More</h6>
                        <p className='box3-p'>Unsung Heroes No More: Shift Champions in the Spotlight!!</p></Box>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '30px', height: "30px" }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Unsung Heroes No More</h6>
                        <p className='box3-p'>Unsung Heroes No More: Shift Champions in the Spotlight!!</p></Box>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '30px', height: "30px" }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Unsung Heroes No More</h6>
                        <p className='box3-p'>Unsung Heroes No More: Shift Champions in the Spotlight!!</p></Box>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '30px', height: "30px" }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Unsung Heroes No More</h6>
                        <p className='box3-p'>Unsung Heroes No More: Shift Champions in the Spotlight!!</p></Box>
                </Stack> <br />

                {button && (<><a className='btn_green' href="/">Nursing Guide</a></>)}
            </Stack>

        </Box>
        )
    }
    const AboutBox2=()=>{
        return(<>
        <Box width={'40%'}   >
            <Stack style={{ backgroundColor: '#FCFCFC' }} direction={'column'} spacing={4} px={2} py={2}>
                <h5 style={{ color: 'black' }}>Staffing Solution</h5>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }} >Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <img style={{ width: '27px' }} src={logo1} alt="" />
                    <p className='box2-p' style={{ color: 'black' }}>Non-Clinical Healthcare Staffing by EmpowerCare</p>
                </Stack>
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
            Boxwidth={'31%'}  background={'#FCFCFC'} spacing={7} 
            />
            </>)
           :about?(<>
            
            <Box3
            Boxwidth={'55%'} px={4}  spacing={3}       />
            <AboutBox2/>
            </>):(<>
            <Box1/>
            <Box2/>
            <Box3  Boxwidth={'31%'} px={3} background={'#FCFCFC'}  spacing={3}/>
            <Box3  Boxwidth={'31%'} px={1}  spacing={3} button={true}/>
            </>)

        }





        </Stack>

    </>)
}
export default Dropdown