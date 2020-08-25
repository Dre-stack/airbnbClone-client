import React, { useState } from 'react';

function Page2({ setPage, listingData, setListingData }) {
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });
  const handlePageSubmit = () => {
    setSubmissionError({ status: false, message: '' });
    const {
      houseType,
      bedrooms,
      bathrooms,
      hostType,
      accessibility,
    } = listingData;

    if (
      !houseType ||
      !bedrooms ||
      !bathrooms ||
      !hostType ||
      !accessibility
    ) {
      window.scrollTo(0, 0);
      setSubmissionError({
        status: true,
        message: 'All fields are required ',
      });
      return;
    }
    setPage(3);
  };

  return (
    <div className="pages">
      <div className="left">
        <div className="heading"></div>
        <div className="heading-sub">Step 2</div>
        <h3>Tell us a little more about your place</h3>
        <div className="form">
          <div className="form-error">
            {submissionError.message && submissionError.message}
          </div>
          <label className="form-label">
            How would you describe your place
          </label>
          <select
            className="form-select"
            name="houseType"
            onChange={(e) =>
              setListingData({
                ...listingData,
                houseType: e.target.value,
              })
            }
          >
            <option>Select one</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Secondary unit">Secondary unit</option>
            <option value="Unique space">Unique space</option>
            <option value="Bed Space">Bed Space</option>
            <option value="Boutique hotel">Boutique hotel</option>
          </select>
          <label className="form-label">
            How many bedrooms will guests have access to?
          </label>
          <select
            className="form-select"
            name="bedrooms"
            value={listingData.questNumber}
            onChange={(e) =>
              setListingData({
                ...listingData,
                bedrooms: e.target.value,
              })
            }
          >
            <option value=""> Select one</option>
            <option value={1}> 1 bedroom</option>
            <option value={2}> 2 bedrooms</option>
            <option value={3}> 3 bedrooms</option>
            <option value={4}> 4 bedrooms</option>
            <option value={5}> 5 bedrooms</option>
            <option value={6}> 6 bedrooms</option>
            <option value={7}> 7 bedrooms</option>
            <option value={8}> 8 bedrooms</option>
            <option value={9}> 9 bedrooms</option>
            <option value={10}>10 bedrooms</option>
          </select>
          <label className="form-label">
            How many bathrooms will guests have access to?
          </label>
          <select
            className="form-select"
            name="bathrooms"
            value={listingData.questNumber}
            onChange={(e) =>
              setListingData({
                ...listingData,
                bathrooms: e.target.value,
              })
            }
          >
            <option value=""> Select one</option>
            <option value={1}> 1 bathroom</option>
            <option value={2}> 2 bathrooms</option>
            <option value={3}> 3 bathrooms</option>
            <option value={4}> 4 bathrooms</option>
            <option value={5}> 5 bathrooms</option>
            <option value={6}> 6 bathrooms</option>
            <option value={7}> 7 bathrooms</option>
            <option value={8}> 8 bathrooms</option>
            <option value={9}> 9 bathrooms</option>
            <option value={10}>10 bathrooms</option>
          </select>
          <label className="form-label">
            What type of host are you, Please select on below
          </label>
          <div className="radio-group">
            <input
              type="radio"
              name="hostType"
              value="business"
              onChange={(e) =>
                setListingData({
                  ...listingData,
                  hostType: e.target.value,
                })
              }
            />
            <span>I'm hosting as a registered business</span>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="hostType"
              value="individual"
              onChange={(e) =>
                setListingData({
                  ...listingData,
                  hostType: e.target.value,
                })
              }
            />
            <span>I'm hosting as an individual or sole owner</span>
          </div>
          <label className="form-label">
            Does your place have accessibily features?
          </label>
          <select
            className="form-select"
            name="bedrooms"
            value={listingData.questNumber}
            onChange={(e) =>
              setListingData({
                ...listingData,
                accessibility: e.target.value,
              })
            }
          >
            <option value=""> Select one</option>
            <option value={true}> Yes</option>
            <option value={false}> No</option>
          </select>
          <div className="location"></div>
        </div>
        <div className="buttons">
          <button
            className="listing-btn back"
            onClick={() => setPage(1)}
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

export default Page2;
