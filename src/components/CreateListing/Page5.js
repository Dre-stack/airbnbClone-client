import React, { useState } from 'react';

function Page5({ setListingData, setPage, listingData }) {
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });
  const handlePageSubmit = () => {
    setSubmissionError({ status: false, message: '' });
    const { title } = listingData;

    if (!title) {
      setSubmissionError({
        status: true,
        message: 'Please give your listing a title to continue',
      });
      return;
    }
    if (title.length > 50) {
      setSubmissionError({
        status: true,
        message:
          'You have exceeded the maximum number of characters allowed, please review your title to continue',
      });
      return;
    }
    setPage(6);
  };

  return (
    <div className="pages">
      <div className="left">
        <div className="heading-sub">Step 4</div>
        <div className="heading">Create a title for your listing</div>
        <div className="form">
          <div className="form-error">
            {submissionError.message && submissionError.message}
          </div>
          <label className="form-label">
            Catch guests' attenton with a listing title that
            highlights what makes your place special <br />
            <br />
            50 characters maximum
          </label>
          <input
            type="text"
            className="location-input"
            value={listingData.title}
            onChange={(e) =>
              setListingData({
                ...listingData,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="buttons">
          <button
            className="listing-btn back"
            onClick={() => setPage(4)}
          >
            <i className="fas fa-chevron-left"></i> Back
          </button>
          <button className="listing-btn" onClick={handlePageSubmit}>
            Continue
          </button>
        </div>
      </div>
      {/* <div>
        <pre>{JSON.stringify(listingData, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default Page5;
