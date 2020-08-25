import React, { useState, useEffect, useCallback } from 'react';
import SideNav from './SideNav';
import Modal from '../utils/Modal';
import Search from '../Search';
import Login from '../Login';
import Signup from '../Signup';
import { useHistory } from 'react-router-dom';

function Header({ mode }) {
  const [displaySideNav, setDisplaySideNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const history = useHistory();

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      if (window.pageYOffset > 150) {
        setSearchBar(true);
      }
      setScroll(true);
    } else {
      setScroll(false);
      setSearchBar(false);
    }
  }, [setScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const headerClassname = `header ${scroll ? 'scroll' : ''} ${
    mode ? mode : ''
  }`;

  return (
    <div className={headerClassname}>
      <div className="header-top">
        <div className="logo" onClick={() => history.push('/')}>
          <img
            src={
              scroll || mode === 'account'
                ? require('../../img/logotrans.png')
                : require('../../img/whitetrans.png')
            }
            alt="logo"
          />
        </div>

        <div
          className={
            searchBar
              ? 'scroll-searchbar'
              : 'scroll-searchbar disabled'
          }
          onClick={() => setSearchModal(true)}
        >
          <i className="fas fa-search"></i>
          <h3>Add a location</h3>
        </div>

        <div
          className="icons"
          onClick={() => setDisplaySideNav(!displaySideNav)}
        >
          <div className="icon-1">
            <i className="fas fa-globe icon-1_a"></i>
            <i className="fas fa-angle-down icon-1_a"></i>
          </div>
          <div className="icon-2">
            <i className="fas fa-bars icon-2_a"></i>
            <i className="fas fa-user-circle icon-2_b"></i>
          </div>
          <SideNav
            display={displaySideNav}
            setDisplay={setDisplaySideNav}
            displayLogin={setLoginModal}
            displaySignup={setSignupModal}
          />
        </div>
      </div>
      {searchModal && (
        <Modal>
          <Search className="search modal" isOpen={setSearchModal} />
        </Modal>
      )}
      {loginModal && (
        <Modal>
          <Login isOpen={setLoginModal} signupOpen={setSignupModal} />
        </Modal>
      )}
      {signupModal && (
        <Modal>
          <Signup isOpen={setSignupModal} />
        </Modal>
      )}
    </div>
  );
}

export default Header;
