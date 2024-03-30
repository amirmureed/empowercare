import React from 'react';
import Home from './Pages/Home/Home';
import Seamlesss from './Pages/Home/Seamlesss';
import Facilities from './Pages/Home/Facilities';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/seamless' element={<Seamlesss/>} />
          <Route path='/facilities' element={<Facilities />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
