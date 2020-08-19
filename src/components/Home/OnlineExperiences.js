import React from 'react';

function OnlineExperiences() {
  return (
    <div className="online">
      <div className="online-top">
        <div className="title">
          <h3>Broadway Online Experiences</h3>
          <p>
            Join live, interactive performances and conversations with
            people from Broadway and beyond, Without leaving home
          </p>
        </div>
        <button>Explore All</button>
      </div>
      <div className="online-bottom">
        <div className="item allison">
          <div className="title">
            <p>Day in the life of Las Vegas dancer</p>
          </div>
        </div>
        <div className="item allegra">
          <div className="title">
            <p>Learn Balinese dance and culture</p>
          </div>
        </div>
        <div className="item merv">
          <div className="title">
            <p>Night of magic and mind-reading</p>
          </div>
        </div>
        <div className="item pedro">
          <div className="title">
            <p>Take part in live musical</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineExperiences;
