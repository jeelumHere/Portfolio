import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

const App = () => {
  return (
    <div>
      <Navbar/>


       <Home style={{height:"100vh"}} id="home"/* home content *//>

      <section style={{height:'100vh'}} id="about">
        {/* about content */} i am about section
      </section>

      <section style={{height:'100vh'}} id="skills">
        {/* skills content */} i am skill section
      </section>

      <section style={{height:'100vh'}} id="projects">
        {/* projects content */} i am project section
      </section>

      <section style={{height:'100vh'}} id="contact">
        {/* contact content */} i am contact section
      </section>



    </div>
  )
}

export default App
