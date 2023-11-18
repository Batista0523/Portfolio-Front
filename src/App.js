import React from 'react'
import {About,Skills,Footer,Work,Testimonial,Header} from './container/index';
import { NavBar } from './components/NavBar';
import './App.scss'
function App() {
  return (
    <div className='app'>
      {/* <NavBar/> */}
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Footer/>
      <Testimonial/>

    </div>
      
   
  )
}

export default App
