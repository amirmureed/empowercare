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
import logo1 from "../../Assets/Group 607.png";
import logo2 from "../../Assets/Group 608.png";
import logo3 from "../../Assets/Group 609.png";
import logo4 from "../../Assets/Group 610.png";
import logo5 from "../../Assets/Group 611.png";
import logo6 from "../../Assets/Group 612.png";
import logo7 from "../../Assets/Group 613.png";
import logo8 from "../../Assets/Group 614.png";
import logo9 from "../../Assets/Group 615.png";
import logo10 from "../../Assets/Group 616.png";
import logo11 from "../../Assets/Group 620.png";
import logo12 from "../../Assets/Group 618.png";
import logo13 from "../../Assets/Group 619.png";
import logo14 from "../../Assets/Group 626.png";
import logo15 from "../../Assets/Group 627.png";
import logo16 from "../../Assets/Group 628.png";
import logo17 from "../../Assets/Group 629.png";
import logo18 from "../../Assets/Group 630.png";
import logo19 from "../../Assets/Group 631.png";
import logo20 from "../../Assets/Group 632.png";
import logo21 from "../../Assets/Group 633.png";
import logo22 from "../../Assets/Group 634.png";
import IconsWithContent from "../IconsWithContent/IconsWithContent";

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
   $('.nav-link').show()
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
        $(".dropdown-facilities").hide();
        $(".dropdown").hide();
      } else if (
        pathname === "/about" ||
        pathname === "/about/ceo" ||
        pathname === "/about/career" ||
        pathname === "/about/community" ||
        pathname === "/about/leadership"
      ) {
        $(".dropdown-facilities").hide();
        $(".dropdown-professionals").hide();
      } else if (
        pathname === "/facilities" ||
        pathname === "/facilities/directcare-careers" ||
        pathname === "/facilities/seamless" ||
        pathname === "/facilities/staffing-solutions"
      ) {
        $(".dropdown-professionals").hide();
        $(".dropdown").hide();
      } else if (pathname === "/") {
        $(".dropdown-facilities").hide();
        $(".dropdown").hide();
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
                <IconsWithContent
                  icon1={logo1}
                  icon2={logo2}
                  icon3={logo3}
                  icon4={logo4}
                  icon5={logo5}
                  icon6={logo6}
                  icon7={logo7}
                  icon8={logo8}
                  icon9={logo9}
                  icon10={logo10}
                  icon11={logo11}
                  icon12={logo12}
                  icon13={logo13}
                  text1="Non-Clinical Healthcare Staffing by EmpowerCare"
                  text2="Empowering your Community Health Center with Top Talent"
                  text3="Empowering Hospitals and Health Systems with Top Talent"
                  text4="EmpowerCare Corporate Staffing: Empower Employee Health"
                  text5="Elevating Surgical Excellence with EmpowerCare Staff"
                  text6="Elevate Student Health: EmpowerCare Education Staffing"
                  text7="Elevate Student Health with our School Healthcare Staffing"
                  text8="Elevate Mental Health Care with EmpowerCare Staffing"
                  text9="Elevate Direct Care with EmpowerCare  Professionals"
                  text10="Elevate Care: EmpowerCare Advanced Practice Staff"
                  text11="Elevate Care with EmpowerCare Allied Health Staffing"
                  text12="Elevate Care Quality: EmpowerCare Skilled Nursing Staffing"
                  text13="Bridge Leadership Gaps with EmpowerCare Interim Solutions"
                  route1="/facilities/staffing-solutions"
                  route2="/facilities/Facilitiesheallthcenter"
                  route3="/facilities/Facilitieshealthsystem"
                  route4="/facilities/Facilitiescorporatestaffing"
                  route5="/facilities/Facilitiessurgicalexellence"
                  route6="/facilities/Facilitiesstudenthealth"
                  route7="/facilities/Facilitiesschoolhealth"
                  route8="/facilities/Facilitiesmentalhealth"
                  route9="/facilities/Facilitiesellevatedirectcare"
                  route10="/facilities/Facilitiespracticestaff"
                  route11="/facilities/Facilitiesalliedhealth"
                  route12="/facilities/Facilitiesskillednursing"
                  route13="/facilitiesbridgeleadership"
                />
                <hr />
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
                <IconsWithContent
                  icon1={logo14}
                  icon2={logo15}
                  icon3={logo16}
                  icon4={logo17}
                  icon5={logo18}
                  icon6={logo19}
                  icon7={logo20}
                  icon8={logo21}
                  icon9={logo22}
                  text1="Your Pathway to Meaningful Direct Care Careers"
                  text2="Your Passport to Unforgettable Travel Nursing Adventures"
                  text3="Your Gateway to Extraordinary Nursing Opportunities"
                  text4="Your Gateway to Exciting Allied Health Careers"
                  text5="Your CNA Career Launchpad"
                  text6="Non-Clinical Healthcare Careers"
                  text7="Ignite Your Passion for Mental Health"
                  text8="Empower Your Nursing Specialty: Find Your Perfect Job Now"
                  text9="Elevate Your Advanced Practice Nursing Career"
                  route1="/professional/Professionals2passport"
                  route2="/professional/Professionals2gatewaynursing"
                  route3="/professional/Professionals2gatewayexciting"
                  route4="/professional/Professionals2cnacarrers"
                  route5="/professional/Professionals2gatewaymeaningful"
                  route6="/professional/Professionals2ignitepassion"
                  route7="/professional/Professionals2staffingoppertunities"
                  route8="/professional/Professionals2elevateadvance"
                />
                <hr />
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
