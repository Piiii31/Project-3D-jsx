import { useState } from 'react';
import Keyboard from './Pages/Login/Keyboard'
import Welcome from './Pages/Welcome/Welcome';

import { Routes,Route } from 'react-router-dom';

export default function App() {
  
  

  return (
    <Routes>
      <Route  path='/login' element={<Keyboard/>}  /> 
      <Route path='/' element={<Welcome/>}/>
      
      
    </Routes>
    
      
  )


}

