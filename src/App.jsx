import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Welcome from './components/wellcome/Welcome'
import Skill from './components/skill/Skill'
import About from './components/about/About'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Welcome/>
      <Navbar/>


       <section>
        <Home/>
       </section>

      <section>
        <Skill/>
      </section>

      <section>
        <About/>
      </section>


      <section>
        <Project/>
      </section>

      <section >
        <Contact/>
      </section>



    </div>
  )
}

export default App
