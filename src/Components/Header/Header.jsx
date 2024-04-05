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
                        {!open ? ( <Nav className="mr-auto">
                         <Link to="/" className='nav-link'>
                                Professionals
                            </Link>
                            <Link to="/facilities" className='nav-link'>
                                Facilities
                            </Link>
                            <Link to="/about" className='nav-link' >
                                About Us
                                {isMobile ?(<> <IconButton onClick={()=>setOpen(true)} >
                        <IoMdArrowDropright color='black' />
                    </IconButton></>):(<></>)}
                    <div className='dropdown'>
                        <span className='d-span'></span><br />
                        <div className='dropdown-content'>
                <PopoverContent/>
                </div>
            </div>
                            </Link>
                           
                        </Nav>):(<>
                            <IconButton onClick={()=>setOpen(false)}><FaArrowCircleLeft></FaArrowCircleLeft> </IconButton>
                        <PopoverContent></PopoverContent></>)}
                       
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
                                    <Link to="/signup" className='apply-btn btn btn-primary'>Quick Apply</Link>
                                    <Link to="/" className='contact-btn btn btn-primary'>Contact us</Link>
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