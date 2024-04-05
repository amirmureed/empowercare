import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const PopoverContent=(props)=>{
    const {route1,route2,route3,route4,name1,name2,name3,name4}=props
    return(

        <Stack classname="test" direction={'column'} px={6} spacing={4} marginTop={'5%'}>

            <Link  to={route1}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle/></Typography>
                <Box>
                    <span>{name1}</span>
                </Box>
                </Stack>
            </Link>

            <Link  to={route2}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle/></Typography>
                <Box>
                    <span>{name2}</span>
                </Box>
                </Stack>
            </Link>

            <Link  to={route3}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle/></Typography>
                <Box>
                    <span>{name3}</span>
                </Box>
                </Stack>
            </Link>

            <Link  to={route4}>
                <Stack direction={'row'} spacing={1}>
                <Typography>
                <IoIosArrowDroprightCircle/></Typography>
                <Box>
                    <span>{name4}</span>
                </Box>
                </Stack>
            </Link>

        </Stack>
    )
}
export default PopoverContent