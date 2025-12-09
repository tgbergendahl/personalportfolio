import React from 'react'
import honorThesis from '../assets/papers/Honors_Thesis.pdf'
import masterThesis from '../assets/papers/Masters_Thesis.pdf'

function ThesisCard({title, desc, pdfLink}){
  return (
    <article className="thesis-card">
      <h4>{title}</h4>
      <p>{desc}</p>
      <p className="links">
        <a href={pdfLink} target="_blank" rel="noopener noreferrer">View PDF</a>
      </p>
    </article>
  )
}

export default function Theses(){
  return (
    <section id="theses" className="theses container">
      <div className="content">
        <h3>Theses & Research</h3>
        <div className="thesis-grid">
          <ThesisCard 
            title="Honors Thesis" 
            desc="View my undergraduate honors thesis research."
            pdfLink={honorThesis}
          />
          <ThesisCard 
            title="Master's Thesis" 
            desc="Explore my graduate research work."
            pdfLink={masterThesis}
          />
        </div>
      </div>
    </section>
  )
}
