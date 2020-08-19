import React, { useState } from 'react';
import SearchOptions from './SearchOptions';
import SearchForm from './SearchForm';

function Header() {
  const [searchFormLayout, setSearchFormLayout] = useState(1);

  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <img src={require('../../img/whitetrans.png')} alt="" />
        </div>
        <SearchOptions setSearchFormLayout={setSearchFormLayout} />
        <div className="icons">
          <div className="icon-1">
            <i className="fas fa-globe icon-1_a"></i>
            <i className="fas fa-angle-down icon-1_a"></i>
          </div>
          <div className="icon-2">
            <i className="fas fa-bars icon-2_a"></i>
            <i className="fas fa-user-circle icon-2_b"></i>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <SearchForm layout={searchFormLayout} />
      </div>
    </div>
  );
}

export default Header;
