import React, { useState } from 'react';

function Page6({ setListingData, setPage, listingData }) {
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });
  const handlePageSubmit = () => {
    setSubmissionError({ status: false, message: '' });
    const { description } = listingData;

    if (!description) {
      setSubmissionError({
        status: true,
        message: 'Please give your listing a description to continue',
      });
      return;
    }
    if (description.length > 500) {
      setSubmissionError({
        status: true,
        message:
          'You have exceeded the maximum number of characters allowed, please review your description to continue',
      });
      return;
    }
    setPage(7);
  };

  return (
    <div className="pages">
      <div className="left">
        <div className="heading-sub">Step 5</div>
        <div className="heading">Describe your place to guests</div>
        <div className="form">
          <div className="form-error">
            {submissionError.message && submissionError.message}
          </div>
          <label className="form-label">
            Mention the best features of your space, any special
            amenuties like fst wifi or parking, and whoat you love
            about the neighbourhood <br />
            <br />
            500 characters maximum
          </label>
          <textarea
            cols="50"
            rows="6"
            className="text-area"
            value={listingData.description}
            onChange={(e) =>
              setListingData({
                ...listingData,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="buttons">
          <button
            className="listing-btn back"
            onClick={() => setPage(5)}
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

export default Page6;
