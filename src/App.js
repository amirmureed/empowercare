import React from 'react';
import Home from './Pages/Home/Home';
import Seamlesss from './Pages/Home/Seamlesss';
import Facilities from './Pages/Home/Facilities';
import Career from './Pages/Home/Career';
import About from './Pages/Home/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Community from './Pages/Home/Community';
import Shiftmakers from './Pages/Home/Shiftmakers';
import Ceo from './Pages/Home/Ceo';
import Leadership from './Pages/Home/Leadership';
import ReferralProgram from './Pages/Home/ReferralProgram';
import Network from './Pages/Home/Network';
import Benefits from './Pages/Home/Benefits';
import Signup from './Pages/Home/Signup';
import Heroes from './Pages/Home/Heroes';
import Resources from './Pages/Home/Resources';
import NonClinical from './Pages/Home/Non-Clinical';
import DirectCareCareers from './Pages/Home/DirectCareCareers';
import Faqs from './Pages/Home/Faqs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/seamless' element={<Seamlesss/>} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/facilities/non-clinical-staffing' element={<NonClinical/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about/career' element={<Career />} />
          <Route path='/about/community' element={<Community/>} />
          <Route path='/about/ceo' element={<Ceo/>}/>
          <Route path='/resources/shift-makers' element={<Shiftmakers/>}/>
          <Route path='/about/leadership' element={<Leadership/>}/>
          <Route path='/resources/referral-program' element={<ReferralProgram/>}/>
          <Route path='/resources/network' element={<Network/>}/>
          <Route path='/resources/benefits' element={<Benefits/>}/>
          <Route path='/resources/empowercare-heroes' element={<Heroes/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/facilities/directcare-careers' element={<DirectCareCareers/>}/>
          <Route path='/professionals/advantages' element={<Faqs/>}/>
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;