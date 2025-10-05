import React from 'react'
import p1 from '../assets/project1.svg'
import p2 from '../assets/project2.svg'
import p3 from '../assets/project3.svg'

function Card({img, title, desc}){
  return (
    <article className="project-card">
      <img src={img} alt={`${title} illustration`} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <p className="links"><a href="#">Live</a> · <a href="#">Source</a></p>
    </article>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="projects container">
      <div className="content">
        <h3>Projects</h3>
        <div className="project-grid">
          <Card img={p1} title="" desc="" />
          <Card img={p2} title="" desc="" />
          <Card img={p3} title="" desc="" />
        </div>
      </div>
    </section>
  )
}
