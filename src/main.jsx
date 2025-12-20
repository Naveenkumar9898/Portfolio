import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/home" element={< Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/Skill' element={<Skill />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path='/About' element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>


  </StrictMode>
)
