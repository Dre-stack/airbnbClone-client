import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../actions';
import { ReactComponent as PersonalIcon } from '../../img/svg/001-contact.svg';
import { ReactComponent as SecurityIcon } from '../../img/svg/002-shield.svg';
import { ReactComponent as MoneyIcon } from '../../img/svg/003-money.svg';
import { ReactComponent as SettingsIcon } from '../../img/svg/004-levels.svg';
import { ReactComponent as NotificationIcon } from '../../img/svg/005-megaphone.svg';
import { ReactComponent as PrivacyIcon } from '../../img/svg/preview.svg';
import { ReactComponent as HostIcon } from '../../img/svg/007-house.svg';
import { ReactComponent as FriendsIcon } from '../../img/svg/002-bucket.svg';
import { ReactComponent as TravelIcon } from '../../img/svg/001-appartment.svg';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function AccountSummarty({ user, loadUser }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      // console.log(user);
      setLoading(false);
      // console.log(currentUser.email.charAt[0]);
    }
  }, [user, loadUser]);
  return (
    <div className="container">
      {loading ? (
        <div>
          {' '}
          <div className="loader">
            <BeatLoader
              css={override}
              size={20}
              color={'#008489'}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="top">
            <h1 className="title">Account</h1>
            <p>
              <strong>
                {currentUser.firstname}
                {''} {currentUser.lastname},
              </strong>{' '}
              {currentUser.email} <span>Go to profile</span>
            </p>
          </div>
          <div className="content">
            <div className="card">
              <div className="icon">
                <PersonalIcon className="svg" />
              </div>
              <div className="heading">
                <span>Personal info</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>Provide personal details and how we can reach you</p>
            </div>
            <div className="card">
              <div className="icon">
                <SecurityIcon className="svg" />
              </div>
              <div className="heading">
                <span>Login & security </span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>Update your password and secure your account</p>
            </div>
            <div className="card">
              <div className="icon">
                <MoneyIcon className="svg" />
              </div>
              <div className="heading">
                <span>Payments & Payouts</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>
                Review payments, payouts, coupons, gift cards and
                taxes
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <NotificationIcon className="svg" />
              </div>
              <div className="heading">
                <span>Notifications</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>
                Choose notification preferences and how you want to be
                contacted
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <PrivacyIcon className="svg" />
              </div>
              <div className="heading">
                <span>Privacy & sharing</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>
                Control connected apps, what you share, and who sees
                it
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <SettingsIcon className="svg" />
              </div>
              <div className="heading">
                <span>Global preferences</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>Set your default language, currency and timezone</p>
            </div>
            <div className="card">
              <div className="icon">
                <TravelIcon className="svg" />
              </div>
              <div className="heading">
                <span>Travel for work</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>Add a work email for business trip benefits</p>
            </div>
            <div className="card">
              <div className="icon">
                <HostIcon className="svg" />
              </div>
              <div className="heading">
                <span>Professional hosting tools</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>
                Get professional hosting tools if you manage several
                properties on Airbnb
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <FriendsIcon className="svg" />
              </div>
              <div className="heading">
                <span>Invite friends</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              <p>Get up to $58 off your next trip</p>
            </div>
          </div>
          <div className="bottom">
            <h3>Need to deactivate your account?</h3>
            <h2>Take care of that now</h2>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(
  AccountSummarty
);
