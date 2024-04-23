import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Trusted from '../../Components/Trusted/Trusted';
import Approach from '../../Components/Approach/Approach';
import Choose from '../../Components/Choose/Choose';
import Opportunity from '../../Components/Opportunity/Opportunity';
import Nextstep from '../../Components/Nextstep/Nextstep';
import Stories from '../../Components/Stories/Stories';
import Healthcare from '../../Components/Healthcare/Healthcare';
import Empowercare from '../../Components/Empowercare/Empowercare';
import Contractjob from '../../Components/Contractjobs/Contractjob';
import Impact from '../../Components/Impact/Impact';
import HCareer from '../../Components/HCareer/HCareer';
import Priemer from '../../Components/PremierHealthcare/Priemer';
import Caregivers from '../../Components/Caregivers/Caregivers';
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Blog from '../../Components/Blog/Blog';
import Userslider from '../../Components/Userslider/Userslider';
import Network from '../../Components/ExtensiveNetwork/Network';
import './Home.scss';
import HeaderWhite from '../../Components/HeaderWhite/HeaderWhite';
import logo from '../../Assets/EmpowerCareLogo.svg';
import storiesimg from '../../Assets/storiesimg.png';
import playbtn from '../../Assets/play.svg';

const Home = () => {
  return (
    <>
      <HeaderWhite
        logoImg={logo}
      />
      <Banner />
      <Trusted />
      <Healthcare />
      <Approach />
      <Choose
        meta="Dynamic Squads"
        spantext="Squads:"
        heading="Why"
        headingafter="professionals choose empowercare"
        description1="EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while balancing your lifestyle."
        description2="Just like CPR breathes life into critical situations, our Dynamic Squads revitalize your career journey."
        boxHeading1="Convenient Staffing:"
        boxDescription1="We provide a full range of staffing solutions, covering all aspects of your professional requirements, making the process convenient for you."
        boxHeading2="Personable Approach:"
        boxDescription2="Our customized staffing plans are designed to align with your unique needs, ensuring the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals."
        boxHeading3="Supportive Community:"
        boxDescription3="Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together."
      />
      <Impact />
      <Opportunity />
      <Contractjob />
      <Empowercare />
      <Network />
      <Caregivers />
      <HCareer />
      <Priemer />
      <Stories 
      img={storiesimg}
      img2={playbtn}
      />
      <Nextstep />
      <CareerSlider />
      <Blog />
      <Userslider />
      <Footer />
    </>
  )
}

export default Home