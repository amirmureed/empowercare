import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner5 from '../../Components/Banner5/Banner5';
import Trusted from '../../Components/Trusted/Trusted';
import Contractjob from '../../Components/Contractjobs/Contractjob';
import Toptalent from '../../Components/Toptalent/Toptalent';
import Choose from '../../Components/Choose/Choose';
import Impact from '../../Components/Impact/Impact';
import Careerpaths from '../../Components/Empowercarefacilities/Careerpaths'
import Facilitynetwork from '../../Components/Facilitynetwork/Facilitynetwork'
import Staffingsolutions from '../../Components/Staffingsolutions/Staffingsolutions'
import Staffingsoptions from '../../Components/Staffingoptions/Staffingoptions'
import Empowercareacademy from '../../Components/Empowercareacademy/Empowercareacademy'
import Realstoriesimpact from '../../Components/Realstoriesimpact/Realstoriesimpact'
import './Home.scss';
     
const Home = () => {
  return (
    <>
      <Header />
      <Banner5 />
      <Trusted />
      <Contractjob />
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
      <Footer />
    </>
  )
}

export default Home