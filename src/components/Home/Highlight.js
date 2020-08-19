import React from 'react';

const data = [
  {
    title: 'Online Experiences',
    text:
      'Unique activities we can do together, led by a world of hosts',
    picture: require('../../img/highlight1.jpg'),
  },
  {
    title: 'Unique Stays',
    text: 'Places that are more than just a place to sleep',
    picture: require('../../img/highlight2.jpg'),
  },
  {
    title: 'Entire Homes',
    text:
      'Comfortable private places, with rooms for friends or family',
    picture: require('../../img/highlight3.jpg'),
  },
];

function Highlight() {
  return (
    <div className="highlight">
      {data.map((item) => (
        <div className="highlight-card">
          <div className="image">
            <img src={item.picture} alt={item.title} />
          </div>
          <div className="details">
            <div className="title">{item.title}</div>
            <div className="description">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Highlight;
