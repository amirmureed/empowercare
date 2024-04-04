import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import logo from '../../Assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';
import ModalComponent from '../Common/Popover';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import PopoverContent from '../Common/PopoverContent';

const Header = () => {
    const [openModal,setOpenModal]=useState(false)
    const OnMouseEnter=()=> {setOpenModal(true)}
    const OnMouseLeave=()=> {setOpenModal(false)}
    const [open,setOpen]=useState(false)
    const [openResources,setOpenResources]=useState(false)
    const theme=useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const SmallView=useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <header className='main-header'>
            <Navbar expand="lg">
                <Container>
                    
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        {!open && !openResources ? ( <Nav className="mr-auto">
                         <Link to="/" className='nav-link'>
                                Professionals
                            </Link>
                            <Link to="/facilities" className='nav-link'>
                                Facilities
                            </Link>
                            
                            <Link to="/about" className='nav-link' >
                                About Us
                              
                    <div className='dropdown'>
                        <span className='d-span'></span><br />
                        <div className='dropdown-content'>
                <PopoverContent
                 route1={'/about/ceo'} route2={'/about/community'} route3={'/about/career'}
                 name1={'Ceo'} name2={'Community'} name3={'Career'}
                />
                </div>
            </div>
            {isMobile ?(<> <IconButton onClick={()=>setOpen(true)} >
                        <IoMdArrowDropright color='black' />
                    </IconButton></>):(<></>)} 
                            </Link>  
                    
                        <Link to="/resources/referral-program" className='nav-link'>
                            Resources
                           
                    <div className='dropdown'>
                        <span className='d-span'></span><br />
                        <div className='dropdown-content'>
                <PopoverContent
                  route1={'/resources/referral-program'} route2={'/resources/network'} route3={'/resources/shift-makers'}
                  name1={'Referral Program'} name2={'Empower your Network'} name3={'Shift Makers'}
                />
                </div>
            </div>
            
            {isMobile ?(<> <IconButton  onClick={()=>setOpenResources(true)} >
                        <IoMdArrowDropright color='black' />
                    </IconButton></>):(<></>)} 
                        </Link>
                           
                        </Nav>): open?(<>
                            <IconButton onClick={()=>setOpen(false)}><FaArrowCircleLeft></FaArrowCircleLeft> </IconButton>
                        <PopoverContent
                         route1={'/about/ceo'} route2={'/about/community'} route3={'/about/career'}
                         name1={'Ceo'} name2={'Community'} name3={'Career'}
                        /></>)
                    :openResources?(<>
                     <IconButton onClick={()=>setOpenResources(false)}><FaArrowCircleLeft></FaArrowCircleLeft> </IconButton>
                        <PopoverContent
                         route1={'/resources/referral-program'} route2={'/resources/network'} route3={'/resources/shift-makers'}
                         name1={'Referral Program'} name2={'Empower your Network'} name3={'Shift Makers'}
                        /></>
                    ):(<></>)
                    }
                       
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                    <SearchIcon />
                                </Col>
                                <Col xs="auto">
                                    <Button className='apply-btn' type="submit">
                                        <span>Quick Apply</span>
                                    </Button>
                                    <Button className='contact-btn' type="submit">
                                        <span>Contact us</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
               
            </Navbar>
          
        </header>
    )
}

export default Header