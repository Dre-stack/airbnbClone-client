import React from 'react';
import Header from '../Header';
import Search from '../Search';

function Showcase() {
  return (
    <div className="showcase">
      <Header />
      <Search className="search" />
      <div className="cta">
        <h3 className="heading">
          Get out and stretch <br /> your imagination
        </h3>
        <p className="text">
          Plan a different kind of getaway to uncover <br /> the
          hidden gems near you{' '}
        </p>
        <button>Explore nearby</button>
      </div>
    </div>
  );
}

export default Showcase;
