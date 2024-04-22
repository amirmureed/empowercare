import { Box,  Stack,  } from "@mui/material"
import { Link} from "react-router-dom";
import ellipse5 from '../../Assets/navicons/ellipse nav img5.png'
import ellipse6 from '../../Assets/navicons/ellipse nav img6.png'
import ellipse7 from '../../Assets/navicons/ellipse nav img7.png'
import ellipse8 from '../../Assets/navicons/ellipse nav img8.png'
import ellipse9 from '../../Assets/navicons/ellipse nav img9.png'
import ellipse10 from '../../Assets/navicons/ellipse nav img10.png'
import './PopoverContent.scss'
const PopoverContent=(props)=>{
    const {route1,route2,route3,route4,route5,route6,name1,name2,name3,name4,name5,name6}=props
    return(

        <Stack classname="popover" direction={'column'} px={4} spacing={4} marginTop={'5%'} py={3}>

{route1 && name1 ?(<>

            <Link className="popover-link"  to={route1}>
                <Stack direction={'row'} spacing={2}>
                
                <img  src={ellipse5} alt="ellipse"/>
                <Box sx={{paddingTop:'4%'}}>
                    <span>{name1}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route2 && name2 ?(<>
            <Link className="popover-link"  to={route2}>
                <Stack direction={'row'} spacing={1}>
                <img  src={ellipse6} alt="ellipse"/>
                <Box sx={{paddingTop:'4%'}}>
                    <span>{name2}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route3 && name3 ?(<>
            <Link className="popover-link"  to={route3}>
                <Stack direction={'row'} spacing={1}>
                <img  src={ellipse7} alt="ellipse"/>
                <Box sx={{paddingTop:'4%'}}>
                    <span>{name3}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route4 && name4 ?(<>
            <Link className="popover-link"  to={route4}>
                <Stack direction={'row'} spacing={1}>
                <img  src={ellipse8} alt="ellipse"/>
                <Box sx={{paddingTop:'4%'}}>
                    <span>{name4}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

            {route5 && name5 ?(<>
            <Link className="popover-link"  to={route5}>
                <Stack direction={'row'} spacing={1}>
                <img  src={ellipse9} alt="ellipse"/>
                <Box sx={{paddingTop:'4%'}}>
                    <span>{name5}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 

          {route6 && name6 ?(<>
            <Link className="popover-link"  to={route6}>
                <Stack direction={'row'} spacing={1}>
                <img  src={ellipse10} alt="ellipse"/>
                <Box sx={{paddingTop:'4%'}}>
                    <span>{name6}</span>
                </Box>
                </Stack>
            </Link>
          </>):(<></>)} 
          
        </Stack>
    )
}
export default PopoverContent