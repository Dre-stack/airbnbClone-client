import React, { useRef, useState } from 'react';

function Page7({ setListingData, setPage, listingData, submitForm }) {
  const inputRef = useRef();

  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });

  const handlePageSubmit = () => {
    setSubmissionError({ status: false, message: '' });
    const { photos, price } = listingData;

    if (!photos) {
      setSubmissionError({
        status: true,
        message:
          'Please upload at least one photo of your listing to continue',
      });
      return;
    }
    if (!price) {
      setSubmissionError({
        status: true,
        message: 'Please enter the price per night for your listing',
      });
      return;
    }
    submitForm();
  };
  return (
    <div className="pages">
      <div className="left">
        <div className="heading-sub">Step 5</div>
        <div className="heading">
          Upload photos of your listing and set price per night
        </div>
        <div className="form">
          <div className="form-error">
            {submissionError.message && submissionError.message}
          </div>
          <label className="form-label">
            Take photos using a phone or camera. Upload at least one
            photo to pubish your listing. you can always add more or
            edit later
          </label>
          <div className="upload-box">
            <button
              className="listing-btn"
              onClick={() => inputRef.current.click()}
            >
              Upload photos
            </button>
            {listingData.photos && (
              <span>
                {listingData.photos.length}{' '}
                {listingData.photos.length > 1 ? 'photos' : 'photo'}{' '}
                selected
              </span>
            )}
          </div>
          <input
            type="file"
            style={{ display: 'none' }}
            multiple
            accept="image/*"
            ref={inputRef}
            className="file-input"
            onChange={(e) =>
              setListingData({
                ...listingData,
                photos: e.target.files,
              })
            }
          />
          <label className="form-label">Price per Night</label>
          <input
            type="number"
            className="location-input"
            value={listingData.price}
            onChange={(e) =>
              setListingData({
                ...listingData,
                price: e.target.value,
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
          <button className="btn" onClick={handlePageSubmit}>
            Create Listing
          </button>
        </div>
      </div>
      {/* <div>
        <pre>{JSON.stringify(listingData, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default Page7;
