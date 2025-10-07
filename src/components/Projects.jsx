import React from 'react'
import p1 from '../assets/project1.png'
import p2 from '../assets/ddCRP.svg'
import p3 from '../assets/bert.png'

function Card({img, title, desc, liveLink, sourceLink, attribution}){
  return (
    <article className="project-card">
      <img src={img} alt={`${title} illustration`} />
      <h4>{title}</h4>
      <p>{desc}</p>
      {attribution && (
        <p className="attribution">
          {attribution.text && (
            <>
              {attribution.text}
              {attribution.link && (
                <>
                  {' '}
                  <a href={attribution.link} target="_blank" rel="noopener noreferrer">
                    {attribution.linkText}
                  </a>
                </>
              )}
            </>
          )}
        </p>
      )}
      <p className="links">
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>}
        {liveLink && sourceLink && ' · '}
        {sourceLink && <a href={sourceLink} target="_blank" rel="noopener noreferrer">Source</a>}
      </p>
    </article>
  )
}

export default function Projects(){
  return (
    <section id="projects" className="projects container">
      <div className="content">
        <h3>Projects</h3>
        <div className="project-grid">
          <Card 
            img={p1} 
            title="pHapCompass" 
            desc="A probabilistic graphical model for polyploid haplotype assembly and uncertainty quantification. 
            A project by El GATO lab at UConn. 
            Currently preparing for publication process." 
            liveLink=""
            sourceLink=""
          />
          <Card 
            img={p2} 
            title="Python Implementation of Distance-Dependent Chinese Restaurant Process" 
            desc="A probabilistic model for non-parametric clustering with distance-dependent priors. 
            Implemented for the purpose of clustering neural embeddings from large language models in order
            to define a finite vocabulary of embeddings." 
            liveLink=""
            sourceLink="https://github.com/tgbergendahl/ddCRP"
          />
          <Card 
            img={p3} 
            title="Testing NLP Models for Predicting Continuous Outcomes" 
            desc="Drafts of code to fine-tune and evaluate BERT, examine static embeddings from GLoVe,
            and use a classical bag of words model for predicting continuous, non-sentiment outcomes, such as a price." 
            liveLink=""
            sourceLink="https://github.com/tgbergendahl/bert-regression"
            attribution={{
              text: "Image from",
              link: "https://datadrivenscience.com/building-text-classification-models-using-bert/",
              linkText: "Data Driven Science"
            }}
          />
        </div>
      </div>
    </section>
  )
}
