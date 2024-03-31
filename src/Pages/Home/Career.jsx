import React from 'react';
import Header from '../../Components/Header/Header';
import Banner3 from '../../Components/Banner3/Banner3';
import ApproachRed from '../../Components/ApproachRed/ApproachRed';
import LeftContentRightImage from '../../Components/LeftContentRightImage/LeftContentRightImage';
import Footer from '../../Components/Footer/Footer';
import OurWorking from '../../Components/OurWorking/OurWorking';
import TrustedRed from '../../Components/TrustedRed/TrustedRed';
import CenterContent from '../../Components/CenterContent/CenterContent';
import Userslider from '../../Components/Userslider/Userslider';

const Career = () => {
    return (
        <>
          <Header />
          <Banner3 />
          <LeftContentRightImage />
          <ApproachRed />
          <OurWorking />
          <CenterContent />
          <TrustedRed />
          <Userslider />
          <Footer />
        </>
    )
}

export default Career