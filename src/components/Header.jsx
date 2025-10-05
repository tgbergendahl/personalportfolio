import React, { useState } from 'react'

export default function Header({themeDark, setThemeDark}){
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
    }
  };
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="brand">Thomas Bergendahl</h1>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(m => !m)}>
          <span className="hamburger"></span>
        </button>
        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
          <button
            id="theme-toggle"
            aria-pressed={themeDark}
            onClick={() => setThemeDark(!themeDark)}
            aria-label="Toggle theme"
            className="theme-switch"
            type="button"
          >
            <span className="switch-track" aria-hidden="true">
              <span className="switch-thumb" aria-hidden="true">
                {!themeDark ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="3.5" fill="#fff"/>
                    <g stroke="#fff" strokeWidth="1">
                      <line x1="7" y1="1.3" x2="7" y2="0"/>
                      <line x1="7" y1="12.7" x2="7" y2="14"/>
                      <line x1="1.3" y1="7" x2="0" y2="7"/>
                      <line x1="12.7" y1="7" x2="14" y2="7"/>
                      <line x1="2.8" y1="2.8" x2="1.5" y2="1.5"/>
                      <line x1="11.2" y1="11.2" x2="12.5" y2="12.5"/>
                      <line x1="2.8" y1="11.2" x2="1.5" y2="12.5"/>
                      <line x1="11.2" y1="2.8" x2="12.5" y2="1.5"/>
                    </g>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.8a9.796 9.796 0 0 1-1.245-19.513l1.286-.163-.843.984a8.285 8.285 0 0 0 8.519 13.383l1.252-.347-.696 1.096A9.755 9.755 0 0 1 12 21.8zM9.647 3.526a8.796 8.796 0 1 0 9.031 14.196 9.048 9.048 0 0 1-1.178.078A9.293 9.293 0 0 1 9.647 3.526z" fill="#fff"/>
                  </svg>
                )}
              </span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}
