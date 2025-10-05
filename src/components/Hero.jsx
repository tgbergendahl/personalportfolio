import React from 'react'
import profile from '../assets/profile-placeholder.svg'

export default function Hero(){
  const handleSeeMyWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="hero container">
      <div className="content">
        <div className="hero-content">
          <h2>Hi, I'm Thomas Bergendahl.</h2>
          <p>I am a recent college graduate with a Master's degree in computer science. I am interested in developing new methods and techniques primarily in machine learning, data analysis, and computational biology.</p>
          <p><a className="cta" href="#projects" onClick={handleSeeMyWork}>See my work</a></p>
        </div>
        <div className="hero-figure">
          <img src={profile} alt="Profile placeholder illustration" />
        </div>
      </div>
    </section>
  )
}
