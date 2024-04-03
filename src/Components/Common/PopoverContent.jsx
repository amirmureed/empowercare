import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const PopoverContent=()=>{
    const navigate=useNavigate()
    return(
        <Stack direction={'column'} px={6} spacing={4} marginTop={'5%'}>
        <br />
    <Link  to='/about/ceo' style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>

{/* <IconButton sx={{width: '50px',
                height: '60px',borderRadius:'47%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><LuBookPlus/></Typography></IconButton> */}
<Typography>
<IoIosArrowDroprightCircle/></Typography>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>Ceo </b>
</p>

</Box>
</Stack>
    </Link>
     
    <Link to='/about/community' style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
{/* <IconButton sx={{width: '50px',
                height: '60px',borderRadius:'50%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><GoPencil/></Typography></IconButton> */}
<Typography><IoIosArrowDroprightCircle/></Typography>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>Community</b>
</p>

</Box>
</Stack>
    </Link>

    <Link to='/about/career' style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
{/* <IconButton sx={{width: '50px',
                height: '60px',borderRadius:'47%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><HiOutlineRocketLaunch/></Typography></IconButton> */}
<Typography><IoIosArrowDroprightCircle/></Typography>
<Box>
<p style={{ fontFamily:'sans-serif',}}>
<b>Careers </b>
</p>

</Box>
</Stack>
    </Link>

    {/* <Link style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
<IconButton sx={{width: '50px',
                height: '60px',borderRadius:'47%',backgroundColor:'#f2f2f2'}}><Typography variant="h5">< FaRegNewspaper/></Typography></IconButton>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>News and Announcements </b>
</p>
<p style={{ margin:'0',fontFamily:'sans-serif' }} >
The latest and greatest from our team.
</p>
</Box>
</Stack>
    </Link>

    <Link style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
<IconButton sx={{width: '50px',
                height: '60px',borderRadius:'47%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><SlDiamond/></Typography></IconButton>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>Accolades </b>
</p>
<p style={{ margin:'0',fontFamily:'sans-serif' }} >
We’re a great place to work and have the accolades to show it.
</p>
</Box>
</Stack>
    </Link> */}
    <br/>
</Stack>

    )
}
export default PopoverContent