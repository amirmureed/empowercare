import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import {  FaRegNewspaper } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { LuBookPlus } from "react-icons/lu";
import { SlDiamond } from "react-icons/sl";
import { GoPencil } from "react-icons/go"
import { Link, useNavigate } from "react-router-dom";
const PopoverContent=()=>{
    const navigate=useNavigate()
    return(
        <Stack direction={'column'} px={6} spacing={4} marginTop={'5%'}>
        
    <Link  to='/about' style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
<IconButton sx={{width: '50px',
                height: '60px',borderRadius:'47%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><LuBookPlus/></Typography></IconButton>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>About </b>
</p>
<p style={{ margin:'0',fontFamily:'sans-serif' }} >
Learn about who we are and work we do.
</p>
</Box>
</Stack>
    </Link>
     
    <Link style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
<IconButton sx={{width: '50px',
                height: '60px',borderRadius:'50%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><GoPencil/></Typography></IconButton>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>Called to Care</b>
</p>
<p style={{ margin:'0',fontFamily:'sans-serif' }} >
Read about those making a difference in healthcare.</p>
</Box>
</Stack>
    </Link>

    <Link style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
<IconButton sx={{width: '50px',
                height: '60px',borderRadius:'47%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><HiOutlineRocketLaunch/></Typography></IconButton>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>Corporate Careers </b>
</p>
<p style={{ margin:'0',fontFamily:'sans-serif' }} >
We have jobs available across all areas of our company and our brands.
</p>
</Box>
</Stack>
    </Link>

    <Link style={{textDecoration:'none',color:'black'}}>
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
    </Link>
    <br/>
</Stack>

    )
}
export default PopoverContent