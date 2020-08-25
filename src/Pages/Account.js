import React from 'react';
import Header from '../components/Header';
import AccountSummary from '../components/AccountSummary';

function Account() {
  return (
    <div>
      <Header mode="account" />
      <div className="account-details">
        <AccountSummary />
      </div>
    </div>
  );
}

export default Account;
