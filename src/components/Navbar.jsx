import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const navLinkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobile}>
          METAVERSE <span className="logo-accent">911</span>
        </NavLink>

        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={toggleMobile}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <li>
            <NavLink to="/" end className={navLinkClass} onClick={closeMobile}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/vr" className={navLinkClass} onClick={closeMobile}>
              Virtual Reality
            </NavLink>
          </li>
          <li>
            <NavLink to="/ar" className={navLinkClass} onClick={closeMobile}>
              Augmented Reality
            </NavLink>
          </li>
          <li>
            <NavLink to="/mr" className={navLinkClass} onClick={closeMobile}>
              Mixed Reality
            </NavLink>
          </li>
          <li>
            <NavLink to="/future" className={navLinkClass} onClick={closeMobile}>
              Future of Metaverse
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
