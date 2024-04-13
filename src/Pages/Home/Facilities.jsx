import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner5 from '../../Components/Banner5/Banner5';
import Trusted from '../../Components/Trusted/Trusted';
import Toptalent from '../../Components/Toptalent/Toptalent';
import Choose from '../../Components/Choose/Choose';
import Impact from '../../Components/Impact/Impact';
import BoxesWithIcons from '../../Components/BoxesWithIcons/BoxesWithIcons';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths'
import Facilitynetwork from '../../Components/Facilitynetwork/Facilitynetwork'
import Staffingsolutions from '../../Components/Staffingsolutions/Staffingsolutions'
import Staffingsoptions from '../../Components/Staffingoptions/Staffingoptions'
import Empowercareacademy from '../../Components/Empowercareacademy/Empowercareacademy'
import CareerSlider from '../../Components/CareerSlider/CareerSlider';
import Blog from '../../Components/Blog/Blog';
import Userslider from '../../Components/Userslider/Userslider';
import Realstoriesimpact from '../../Components/Realstoriesimpact/Realstoriesimpact'
import './Home.scss';
     
const Home = () => {
  return (
    <>
      <Header />
      <Banner5 />
      <Trusted />
      <BoxesWithIcons />
      <Choose 
          meta="Dynamic Squads"
          spantext = "Squads:"
          heading = "Why"
          headingafter = "professionals choose empowercare"
          description1 = "EmpowerCare's Dynamic Squads offer a comprehensive approach to meet all your career needs. Our personalized solutions help you achieve your professional goals while balancing your lifestyle."
          description2 = "Just like CPR breathes life into critical situations, our Dynamic Squads revitalize your career journey." 
          classes      = "black-bg"
      />
      <Impact position="box-center-aligned" />
      <Careerpaths />
      <Toptalent />
      <Facilitynetwork />
      <Staffingsolutions />
      <Staffingsoptions />
      <Empowercareacademy />
      <Realstoriesimpact />
      <CareerSlider />
      <Blog />
      <Userslider />
      <Footer />
    </>
  )
}

export default Home