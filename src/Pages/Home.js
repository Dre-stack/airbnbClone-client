import React from 'react';
import Showcase from '../components/Showcase';
import Highlight from '../components/Highlight';
import OnlineExperiences from '../components/OnlineExperience';

function Home() {
  return (
    <div className="home">
      <Showcase />
      <Highlight />
      <OnlineExperiences />
      <div className="message">
        <div className="left">
          <p>
            We embrace a world where everyone belongs, and stand with
            #BlackLivesMatter.
          </p>
        </div>
        <div className="right">
          <p>
            No one should have to encounter racism—no matter who you
            are, where you’re from, who you love, or who you worship.
            Discrimination is not tolerated in our community. Which is
            why when you agree to book or host on Airbnb, you pledge
            not to tolerate it either.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
