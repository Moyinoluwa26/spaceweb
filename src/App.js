 import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Destination from './pages/destination';
/*import Moon from './pages/Ubdestination/Moon';*/
import Crew from './pages/crew';
import Home from './pages/home';
import  Technology from './pages/technology';

 
function App() {

  return (
    <div className="flex-row">
      <Navbar />
      
<Routes>
      <Route path='/' element={<Home/>} />
      <Route  path='/destination/*' element={<Destination/>} />
        
        {/*<Route path='/destination/moon' element={<Moon/>}/>*/}
        
        
    
      <Route path='/crew/*' element={<Crew/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/technology/*' element={<Technology/>} />
</Routes>
    </div>
  );
} 

export default App;
