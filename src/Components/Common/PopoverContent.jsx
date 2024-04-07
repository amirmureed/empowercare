import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './PopoverContent.scss'
const PopoverContent=(props)=>{
    const {route1,route2,route3,route4,route5,name1,name2,name3,name4,name5}=props
    return(

        <Stack classname="popover" direction={'column'} px={6} spacing={4} marginTop={'5%'} py={3}>

{route1 && name1 ?(<>

            <Link className="popover-link"  to={route1}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle className="arrow-icon"/></Typography>
                <Box>
                    <span>{name1}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route2 && name2 ?(<>
            <Link className="popover-link"  to={route2}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle className="arrow-icon"/></Typography>
                <Box>
                    <span>{name2}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route3 && name3 ?(<>
            <Link className="popover-link"  to={route3}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle className="arrow-icon"/></Typography>
                <Box>
                    <span>{name3}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route4 && name4 ?(<>
            <Link className="popover-link"  to={route4}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle className="arrow-icon"/></Typography>
                <Box>
                    <span>{name4}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route5 && name5 ?(<>
            <Link className="popover-link"  to={route5}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle className="arrow-icon"/></Typography>
                <Box>
                    <span>{name5}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 
          
        </Stack>
    )
}
export default PopoverContent