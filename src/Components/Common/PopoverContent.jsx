import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const PopoverContent=(props)=>{
    const {route1,route2,route3,route4,name1,name2,name3,name4}=props
    return(
        <Stack direction={'column'} px={6} spacing={4} marginTop={'5%'}>
        <br />
    <Link  to={route1} style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
    <Typography>
    <IoIosArrowDroprightCircle/></Typography>
    <Box>
    <p style={{ margin:'0',fontFamily:'sans-serif',}}>
    <b>{name1}</b>
    </p>
    </Box>
    </Stack>
    </Link>
     
    <Link to={route2} style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
{/* <IconButton sx={{width: '50px',
                height: '60px',borderRadius:'50%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><GoPencil/></Typography></IconButton> */}
<Typography><IoIosArrowDroprightCircle/></Typography>
<Box>
<p style={{ margin:'0',fontFamily:'sans-serif',}}>
<b>{name2}</b>
</p>

</Box>
</Stack>
    </Link>

    <Link to={route3} style={{textDecoration:'none',color:'black'}}>
    <Stack direction={'row'} spacing={1}>
{/* <IconButton sx={{width: '50px',
                height: '60px',borderRadius:'47%',backgroundColor:'#f2f2f2'}}><Typography variant="h5"><HiOutlineRocketLaunch/></Typography></IconButton> */}
<Typography><IoIosArrowDroprightCircle/></Typography>
<Box>
<p style={{ fontFamily:'sans-serif',}}>
<b>{name3}</b>
</p>

</Box>
</Stack>
    </Link>

   
    <br/>
</Stack>

    )
}
export default PopoverContent