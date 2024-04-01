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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/seamless' element={<Seamlesss/>} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/about/career' element={<Career />} />
          <Route path='/about/community' element={<Community/>} />
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
