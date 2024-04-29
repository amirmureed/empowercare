import { Box, Stack } from "@mui/material"
import { Link } from "react-router-dom"

const IconsWithContent=(props)=>{
    const {icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon9,icon10,icon11,icon12,icon13,
           route1,route2,route3,route4,route5,route6,route7,route8,route9,route10,route11,route12,route13,
        text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13}=props
    return(<>
    
    <Stack direction={'column'} spacing={2} px={2} py={2}>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }}  src={icon1} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route1}>{text1}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon2} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route2}>{text2}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon3} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route3}>{text3}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon4} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route4}>{text4}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon5} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route5}>{text5}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon6} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route6}>{text6}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon7} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route7}>{text7}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon8} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route8}>{text8}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon9} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route9}>{text9}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon10} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route10}>{text10}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon11} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route11}>{text11}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon12} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route12}>{text12}</Link>
        </Stack>
        <Stack direction="row" spacing={2}>
            <img style={{ width: '27px' }} src={icon13} alt="" />
            <Link  style={{color:'unset',fontSize:'11px'}} to={route13}>{text13}</Link>
        </Stack>
        

    </Stack>
    </>)
}
export default IconsWithContent