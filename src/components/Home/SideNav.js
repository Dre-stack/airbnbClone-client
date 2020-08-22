import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

function SideNav({ display, setDisplay, displayLogin }) {
  const navRef = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDisplay(false);
      }
    },
    [setDisplay]
  );
  useEffect(() => {
    if (display) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navRef, handleClickOutside, display]);

  return (
    <div
      className={display ? 'side-nav' : 'side-nav disabled'}
      ref={navRef}
    >
      <div className="top">
        <ul>
          <li onClick={() => displayLogin(true)} className="bold">
            <Link>Log in</Link>
          </li>
          <li className="with-border">
            <Link>Sign up</Link>
          </li>
          <li>
            <Link>Host your home</Link>
          </li>
          <li>
            <Link>Host an experience</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
