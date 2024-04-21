import { Box, Stack } from "@mui/material"
import './NursingDropdown.scss'
import ellipse1 from '../../Assets/Ellipse 49.png'
const NursingDropdown=()=>{
    const Style = {
       
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#F4F4F4'
        }
    };
    return(<>
     <Stack direction={'row'} spacing={1} py={3}>
      <Box px={3}>
      <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Pathways, Roles, & Jobs</h6>
                        <p className='box3-p'>Guide to General Nursing Careers: Pathways, Roles, & Jobs</p>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Telemetry Nursing Careers</h6>
                        <p className='box3-p'>Guide for Telemetry Nursing Careers: Pathways & Jobs</p>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Step Down Nurse Careers</h6>
                        <p className='box3-p'>Guide for Step Down Nurse Careers: Pathways & Jobs</p>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Operating Room Nurse Careers</h6>
                        <p className='box3-p'>Guide for Operating Room Nurse Careers: Pathways & Jobs</p>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Medical Surgical Nurse Careers</h6>
                        <p className='box3-p'>Guide for Medical Surgical Nurse Careers: Pathways, Roles, & Jobs</p>
                    </Box>
                </Stack>
      </Box>
      <Box px={3}>
      <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Home Health Nurse Careers</h6>
                        <p className='box3-p'>Guide for Home Health Nurse Careers: Pathways & Jobs</p>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Emergency Room Nurse Careers</h6>
                        <p className='box3-p'>Guide for Emergency Room Nurse Careers: Pathways & Jobs</p>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Critical Care Nurse Careers</h6>
                        <p className='box3-p'>Guide for Critical Care Nurse Careers: Pathways & Jobs</p>
                    </Box>
                </Stack>
                <Stack direction={'row'} spacing={2} sx={Style} px={2} py={1}  >
                    <img style={{ width: '30px', height: '30px' }} src={ellipse1} alt="" />
                    <Box>
                        <h6 className='box3-h6'>Behavioral and Mental Health Nurse</h6>
                        <p className='box3-p'>Guide for Behavioral and Mental Health Nurse: Pathways & Jobs</p>
                    </Box>
                </Stack>
                <a className="btn_green" href="/professionals" >PROFESSIONALS</a>
      </Box>
     </Stack>
    
    </>)
}
export default NursingDropdown