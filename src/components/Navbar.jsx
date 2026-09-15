import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('about');
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      return undefined;
    }

    const sections = ['about', 'services', 'projects']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    function updateActiveSection() {
      const marker = window.innerHeight * 0.38;
      const current = sections.reduce((active, section) => {
        const top = section.getBoundingClientRect().top;
        return top <= marker ? section.id : active;
      }, sections[0]?.id || 'about');

      setActiveSection(current);
    }

    const frame = requestAnimationFrame(updateActiveSection);
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isHome]);

  useEffect(() => {
    if (!isHome || !location.hash) {
      return undefined;
    }

    const frame = requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ block: 'start' });
    });

    return () => cancelAnimationFrame(frame);
  }, [isHome, location.hash]);

  return (
    <header className="navbar">
      <Link to="/" className="brand" aria-label="Joy Simes home">
        <span>JOY SIMES</span>
        <small>ARCHITECT</small>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        <Link className={isHome && activeSection === 'about' ? 'active' : ''} to="/#about">About</Link>
        <Link className={isHome && activeSection === 'services' ? 'active' : ''} to="/#services">Services</Link>
        <Link className={isHome && activeSection === 'projects' ? 'active' : ''} to="/#projects">Projects</Link>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
