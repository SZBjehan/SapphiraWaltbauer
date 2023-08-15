import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: scrolled ? '#e0fff5' : 'transparent',
  };

  return (
    <div className='nav' style={navStyle}>
      <div className='nav-name'>
        <Link
          to={{
            pathname: '/'
          }}
          className='header-name'
        >
          Sapphira Waltbauer
        </Link>
        <br />
        <Link
          to={{
            pathname: '/cold-immersion'
          }}
          className='header-name cold-immersion-link'
        >
          Cold Immersion
        </Link>
      </div>
    </div>
  );
}

export default Nav;
