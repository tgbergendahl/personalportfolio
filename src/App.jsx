import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [themeDark, setThemeDark] = useState(true)

  useEffect(()=>{
    const stored = localStorage.getItem('theme')
    if(stored) setThemeDark(stored === 'dark')
  },[])

  useEffect(()=>{
    localStorage.setItem('theme', themeDark ? 'dark' : 'light')
    if(themeDark){
      // dark: black + sky blue accent
      document.documentElement.style.setProperty('--bg', '#000000')
      document.documentElement.style.setProperty('--card', '#050505')
      document.documentElement.style.setProperty('--text', '#ffffff')
      document.documentElement.style.setProperty('--accent', '#0ea5ff')
      document.documentElement.style.setProperty('--bg-end', '#000000')
    } else {
      // light: soft neutrals
      document.documentElement.style.setProperty('--bg', '#f6f8fb')
      document.documentElement.style.setProperty('--card', '#ffffff')
      document.documentElement.style.setProperty('--text', '#0b1220')
      document.documentElement.style.setProperty('--accent', '#0ea5ff')
      document.documentElement.style.setProperty('--bg-end', '#f6f8fb')
    }
  },[themeDark])

  return (
    <div>
      <div className="background-art">
        <svg className="bg1" viewBox="0 0 600 600"><circle cx="300" cy="300" r="300"/></svg>
        <svg className="bg2" viewBox="0 0 600 600"><ellipse cx="400" cy="400" rx="200" ry="180"/></svg>
        <svg className="bg3" viewBox="0 0 600 600"><rect x="100" y="100" width="400" height="400" rx="120"/></svg>
      </div>
      <Header themeDark={themeDark} setThemeDark={setThemeDark} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
