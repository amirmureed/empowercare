import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import logo from "../../Assets/EmpowerCareLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import "./HeaderWhite.scss";
import { IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import PopoverContent from "../Common/PopoverContent";
import Dropdown from "../Dropdown/Dropdown";
import $ from "jquery";

const HeaderWhite = ({ logoImg }) => {
  const [open, setOpen] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openFacilities, setOpenFacilities] = useState(false);
  const [openProfessionals, setOpenProfessionals] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    
    if (!isMobile) {
      if (
        pathname === "/professionals" ||
        pathname === "/professionals/seamless" ||
        pathname === "/professionals/unsung-heroes" ||
        pathname === "/professionals/faqs" ||
        pathname === "/professionals/advantages" ||
        pathname === "/professionals/directcare-career" ||
        pathname === "/professionals/guide"
      ) {
        $('.dropdown-facilities').hide();
        $('.dropdown').hide();
      } else if (
        pathname === "/about" ||
        pathname === "/about/ceo" ||
        pathname === "/about/career" ||
        pathname === "/about/community" ||
        pathname === "/about/leadership"
      ) {
        $('.dropdown-facilities').hide();
        $('.dropdown-professionals').hide();
      } else if (
        pathname === "/facilities" ||
        pathname === "/facilities/directcare-careers" ||
        pathname === "/facilities/seamless" ||
        pathname === "/facilities/staffing-solutions"
      ) {
        $('.dropdown-professionals').hide();
        $('.dropdown').hide();
      }
    }
  }, [location, isMobile]);
  return (
    <header className="main-header-white">
      <Navbar expand="lg">
        <Container>
          <Link to="/">
            <div className="logo">
              <img className="desktop_logo" src={logoImg} alt="logo" />
              <img className="mobile_logo" src={logo} alt="logo" />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {!open &&
            !openResources &&
            !openFacilities &&
            !openProfessionals ? (
              <Nav className="mr-auto">
                <Stack direction={"row"}>
                  <Link to="/professionals" className="nav-link">
                    Professionals
                    {!isMobile && (
                      <div className="dropdown-professionals">
                        <span className="d-span"></span>
                        <br />
                        <div className="dropdown-content">
                          <Dropdown
                            professionals={true}
                            facilities={false}
                            about={false}
                          />
                        </div>
                      </div>
                    )}
                  </Link>{" "}
                  {isMobile ? (
                    <>
                      {" "}
                      <IconButton onClick={() => setOpenProfessionals(true)}>
                        <IoMdArrowDropright color="black" />
                      </IconButton>
                    </>
                  ) : (
                    <></>
                  )}
                </Stack>
                <Stack direction={"row"}>
                  <Link to="/facilities" className="nav-link">
                    Facilities
                    {!isMobile && (
                      <div className="dropdown-facilities">
                        <span className="d-span"></span>
                        <br />
                        <br />
                        <div className="dropdown-content">
                          <Dropdown
                            facilities={true}
                            about={false}
                            professionals={false}
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                  {isMobile ? (
                    <>
                      {" "}
                      <IconButton onClick={() => setOpenFacilities(true)}>
                        <IoMdArrowDropright color="black" />
                      </IconButton>
                    </>
                  ) : (
                    <></>
                  )}
                </Stack>
                <Stack direction={"row"}>
                  <Link to="/about" className="nav-link">
                    About Us
                    {!isMobile && (
                      <div className="dropdown">
                        <span className="d-span"></span>
                        <br />
                        <div className="dropdown-content">
                          <Dropdown
                            about={true}
                            professionals={false}
                            facilities={false}
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                  {isMobile ? (
                    <>
                      {" "}
                      <IconButton onClick={() => setOpen(true)}>
                        <IoMdArrowDropright color="black" />
                      </IconButton>
                    </>
                  ) : (
                    <></>
                  )}
                </Stack>

                {/* <Link to="/resources" className='nav-link'>
                                Resources

                                <div className='dropdown-resources'>
                                    <span className='d-span'></span><br />
                                    <div className='dropdown-content'>
                                        { <PopoverContent
                                            route1={'/resources/referral-program'} route2={'/resources/network'} route3={'/resources/shift-makers'} route4={'/resources/benefits'} route5={'/resources/empowercare-heroes'}
                                            name1={'Referral Program'} name2={'Empower your Network'} name3={'Shift Makers'} name4={'Benefits'} name5={'Heroes'}
                                        />
                                       
                                    </div>
                                </div>

                                {isMobile ? (<> <IconButton onClick={() => setOpenResources(true)} >
                                    <IoMdArrowDropright color='black' />
                                </IconButton></>) : (<></>)}
                            </Link> */}
              </Nav>
            ) : open && isMobile ? (
              <>
                <IconButton onClick={() => setOpen(false)}>
                  <FaArrowCircleLeft></FaArrowCircleLeft>{" "}
                </IconButton>
                <PopoverContent
                  route1={"/about/ceo"}
                  route2={"/about/community"}
                  route3={"/about/career"}
                  route4={"/about/leadership"}
                  name1={"Ceo"}
                  name2={"Community"}
                  name3={"Career"}
                  name4={"Leadership"}
                />
              </>
            ) : openResources && isMobile ? (
              <>
                <IconButton onClick={() => setOpenResources(false)}>
                  <FaArrowCircleLeft></FaArrowCircleLeft>{" "}
                </IconButton>
                <PopoverContent
                  route1={"/resources/referral-program"}
                  route2={"/resources/network"}
                  route3={"/resources/shift-makers"}
                  route4={"/resources/benefits"}
                  route5={"/resources/empowercare-heroes"}
                  name1={"Referral Program"}
                  name2={"Empower your Network"}
                  name3={"Shift Makers"}
                  name4={"Benefits"}
                  name5={"Heroes"}
                />
              </>
            ) : openFacilities && isMobile ? (
              <>
                <IconButton onClick={() => setOpenFacilities(false)}>
                  <FaArrowCircleLeft></FaArrowCircleLeft>{" "}
                </IconButton>
                <PopoverContent
                  route1={"/facilities/seamless"}
                  name1={"Careers"}
                  route2={"/facilities/seamless"}
                  name2={"Non-Clinical Healthcare Staffing by EmpowerCare"}
                  route3={"/facilities/seamless"}
                  name3={
                    "Empowering your Community Health Center with Top Talent"
                  }
                  route4={"/facilities/seamless"}
                  name4={
                    "Empowering Hospitals and Health Systems with Top Talent"
                  }
                  route5={"/facilities/seamless"}
                  name5={
                    "EmpowerCare Corporate Staffing: Empower Employee Health"
                  }
                  route6={"/facilities/seamless"}
                  name6={"Elevating Surgical Excellence with EmpowerCare Staff"}
                  route7={"/facilities/seamless"}
                  name7={
                    "Elevate Student Health: EmpowerCare Education Staffing"
                  }
                  route8={"/facilities/seamless"}
                  name8={
                    "Elevate Student Health with our School Healthcare Staffing"
                  }
                  route9={"/facilities/seamless"}
                  name9={"Elevate Mental Health Care with EmpowerCare Staffing"}
                  route10={"/facilities/seamless"}
                  name510={"Elevate Direct Care with EmpowerCare Professionals"}
                  route11={"/facilities/seamless"}
                  name11={"Elevate Care: EmpowerCare Advanced Practice Staff"}
                  route12={"/facilities/seamless"}
                  name12={
                    "Elevate Care with EmpowerCare Allied Health Staffing"
                  }
                  route13={"/facilities/seamless"}
                  name13={
                    "Elevate Care Quality: EmpowerCare Skilled Nursing Staffing"
                  }
                  route14={"/facilities/seamless"}
                  name14={
                    "Bridge Leadership Gaps with EmpowerCare Interim Solutions"
                  }
                  route15={"/facilities/seamless"}
                  name15={"Unsung Heroes No More"}
                  route16={"/facilities/seamless"}
                  name16={"Gain a winning edge"}
                  route17={"/facilities/seamless"}
                  name17={"Finding the Perfect Match"}
                  route18={"/facilities/seamless"}
                  name18={"The Ripple Effect!"}
                />
              </>
            ) : openProfessionals && isMobile ? (
              <>
                <IconButton onClick={() => setOpenProfessionals(false)}>
                  <FaArrowCircleLeft></FaArrowCircleLeft>{" "}
                </IconButton>
                <PopoverContent
                  route1={"/professionals/seamless"}
                  name1={"Seamless"}
                  route2={"/professionals/faqs"}
                  name2={"Faqs"}
                  route3={"/professionals/unsung-heroes"}
                  name3={"Unsung Heroes"}
                  route4={"/professionals/advantages"}
                  name4={"Advantages"}
                  route5={"/professionals/guide"}
                  name5={"Guide to Nursing Careers"}
                  route6={"/professionals/directcare-career"}
                  name6={"Direct Care Careers"}
                />
              </>
            ) : (
              <></>
            )}

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
                  <Link to="/signup" className="apply-btn btn btn-primary">
                    Quick Apply
                  </Link>
                  <Link to="/" className="contact-btn btn btn-primary">
                    Contact us
                  </Link>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderWhite;
