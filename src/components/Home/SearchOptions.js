import React, { useState, useEffect } from 'react';

function SearchOptions({ setSearchFormLayout }) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    setSearchFormLayout(active);
  }, [active, setSearchFormLayout]);

  return (
    <nav className="search">
      <ul className="links">
        <li
          className={active === 1 ? 'link-item active' : 'link-item'}
          onClick={() => setActive(1)}
        >
          Places to stay
        </li>
        <li
          className={active === 2 ? 'link-item active' : 'link-item'}
          onClick={() => setActive(2)}
        >
          Monthly Stays
        </li>
        <li
          className={active === 3 ? 'link-item active' : 'link-item'}
          onClick={() => setActive(3)}
        >
          Experiences
        </li>
        <li className="link-item">Online Experiences</li>
      </ul>
    </nav>
  );
}

export default SearchOptions;
