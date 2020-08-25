import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

function Page1({ user, setListingData, setPage, listingData }) {
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });

  const handlePageSubmit = () => {
    setSubmissionError({ status: false, message: '' });
    if (!listingData.location.locationName) {
      setSubmissionError({
        status: true,
        message: 'Please enter a location to continue',
      });
      return;
    }
    setPage(2);
  };

  const handleSelect = (address) => {
    const location = { ...listingData.location };
    location.locationName = address;
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        const cord = Object.values(latLng).reverse();
        location.coordinates = cord;

        setListingData({ ...listingData, location: { ...location } });
      })
      .catch((error) => console.error('Error', error));
  };
  return (
    <div className="pages">
      <div className="left">
        <div className="heading">
          Hi, {user.firstname}! Let's get started listing your space.
        </div>
        <div className="heading-sub">Step 1</div>
        <h3>What kind of place do you have?</h3>
        <div className="form">
          <div className="form-error">
            {submissionError.message && submissionError.message}
          </div>
          <div className="top">
            <select
              className="form-select"
              name="spaceType"
              onChange={(e) =>
                setListingData({
                  ...listingData,
                  spaceType: e.target.value,
                })
              }
            >
              <option value="Entire place">Entire place</option>
              <option value="Private room">Private room</option>
              <option value="Shared room">Shared room</option>
            </select>
            <select
              className="form-select"
              name="guestNumber"
              value={listingData.questNumber}
              onChange={(e) =>
                setListingData({
                  ...listingData,
                  guestNumber: e.target.value,
                })
              }
            >
              <option value={1}>for 1 guest</option>
              <option value={2}>for 2 guests</option>
              <option value={3}>for 3 guests</option>
              <option value={4}>for 4 guests</option>
              <option value={5}>for 5 guests</option>
              <option value={6}>for 6 guests</option>
              <option value={7}>for 7 guests</option>
              <option value={8}>for 8 guests</option>
              <option value={9}>for 9 guests</option>
              <option value={10}>for 10 guests</option>
            </select>
          </div>
          <div className="location">
            <PlacesAutocomplete
              value={listingData.location.locationName}
              // onChange={(address) => setLocationName(address)}
              onSelect={handleSelect}
              onChange={(address) =>
                setListingData({
                  ...listingData,
                  location: {
                    ...listingData.oacion,
                    locationName: address,
                  },
                })
              }
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <React.Fragment>
                  <input
                    {...getInputProps({
                      placeholder: 'Location',
                      className: 'location-input',
                    })}
                  />
                  {suggestions.length > 0 && (
                    <div
                      className="drop-down listing"
                      style={{ zIndex: '30', cursor: 'pointer' }}
                    >
                      {/* {loading && <div>Loading...</div>} */}
                      {suggestions.map((suggestion, i) => {
                        return (
                          <div
                            className="suggestion"
                            {...getSuggestionItemProps(
                              suggestion,
                              {}
                            )}
                            key={i}
                          >
                            <div className="marker">
                              <i className="fas fa-map-marker-alt "></i>
                            </div>
                            <div>{suggestion.description}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </React.Fragment>
              )}
            </PlacesAutocomplete>
          </div>
        </div>
        <button className="listing-btn" onClick={handlePageSubmit}>
          Continue
        </button>
      </div>
      {/* <div>
        <pre>{JSON.stringify(listingData, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default Page1;
