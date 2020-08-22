import React, { useState } from 'react';
import SearchForm from './SearchForm';

function Search({ className, isOpen }) {
  const [active, setActive] = useState(1);
  return (
    <div className={className}>
      {isOpen && (
        <button
          className="close-button"
          onClick={() => isOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>
      )}
      <nav className="search-options">
        <ul className="links">
          <li
            className={
              active === 1 ? 'link-item active' : 'link-item'
            }
            onClick={() => setActive(1)}
          >
            Places to stay
          </li>
          <li
            className={
              active === 2 ? 'link-item active' : 'link-item'
            }
            onClick={() => setActive(2)}
          >
            Monthly Stays
          </li>
          <li
            className={
              active === 3 ? 'link-item active' : 'link-item'
            }
            onClick={() => setActive(3)}
          >
            Experiences
          </li>
          <li className="link-item">Online Experiences</li>
        </ul>
      </nav>
      <SearchForm layout={active} />
    </div>
  );
}

export default Search;
