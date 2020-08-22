import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SideNav({
  display,
  setDisplay,
  displayLogin,
  displaySignup,
  isLogedIn,
}) {
  const navRef = useRef(null);
  const history = useHistory();

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

  const handleSignout = () => {
    localStorage.removeItem('authToken');
    history.push('/');
    window.location.reload();
  };

  return (
    <div
      className={display ? 'side-nav' : 'side-nav disabled'}
      ref={navRef}
    >
      <div className="top">
        {!isLogedIn ? (
          <ul>
            <li onClick={() => displayLogin(true)} className="bold">
              <Link to="##">Log in</Link>
            </li>
            <li
              className="with-border"
              onClick={() => {
                displayLogin(false);
                displaySignup(true);
              }}
            >
              <Link to="##">Sign up</Link>
            </li>
            <li>
              <Link to="##">Host your home</Link>
            </li>
            <li>
              <Link to="##">Host an experience</Link>
            </li>
            <li>
              <Link to="##">Help</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="bold">
              <Link to="##">Account</Link>
            </li>

            <li>
              <Link to="##">Host your home</Link>
            </li>
            <li className="with-border">
              <Link to="##">Host an experience</Link>
            </li>
            <li>
              <Link to="##">Help</Link>
            </li>
            <li onClick={handleSignout}>
              <Link to="##">Signout</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogedIn: state.auth.isLogedIn,
});

export default connect(mapStateToProps)(SideNav);
