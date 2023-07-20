 import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './pages/destination';
import Crew from './pages/crew';
import Home from './pages/home';
import  Technology from './pages/technology';
 
function App() {

  return (
    <div className="flex-row">
      <Navbar />
<Routes>
      <Route path='/' element={<Home/>} />
      <Route  path='/destination' element={<About/>} />
      <Route path='/crew' element={<Crew/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/technology' element={<Technology/>} />
</Routes>
    </div>
  );
} 

export default App;
