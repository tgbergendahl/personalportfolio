import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer container">
      <div className="content">
        <p>© <span id="year">{new Date().getFullYear()}</span> Thomas Bergendahl.</p>
      </div>
    </footer>
  )
}
