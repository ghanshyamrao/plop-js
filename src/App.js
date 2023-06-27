// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Header } from './components/layout/header/index.js';
import { ABOUT, EDUCATIONS, HOME, INFO, RESUME} from './components/index.js';
import DashboardLayout from './components/layout/mainContainerApp'
import './global.css'

function App() {
  return (
    <>
  
  <DashboardLayout>
    <Router>
       <Routes>
            <Route  path='/home' element={<HOME/>}/>
           
            <Route path='/about' element={<ABOUT/>}/>
            
            <Route path='/resume' element={<RESUME/>}/>
            
            <Route path='/info' element={<INFO/>}/>

            <Route path='/educations' element={<EDUCATIONS/>}/>
            </Routes>
    </Router>
    </DashboardLayout>
    </>
  );
}

export default App;
