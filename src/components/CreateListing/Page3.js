import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {
  CountryDropdown,
  RegionDropdown,
} from 'react-country-region-selector';

function Page3({ setListingData, setPage, listingData }) {
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });
  const handlePageSubmit = () => {
    setSubmissionError({ status: false, message: '' });
    const { streetAddress, region, country } = listingData.address;

    if (!streetAddress || !region || !country) {
      window.scrollTo(0, 0);
      setSubmissionError({
        status: true,
        message:
          'Please enter the listing address, region and country to continue',
      });
      return;
    }
    setPage(4);
  };

  const selectCountry = (val) => {
    setListingData({
      ...listingData,
      address: {
        ...listingData.address,
        country: val,
      },
    });
  };

  const selectRegion = (val) => {
    setListingData({
      ...listingData,
      address: {
        ...listingData.address,
        region: val,
      },
    });
  };
  const handleSelect = (address) => {
    const addressCoordinates = { ...listingData.addressCoordinates };
    addressCoordinates.name = address;
    setListingData({
      ...listingData,
      address: {
        ...listingData.address,
        streetAddress: address,
      },
    });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        const cord = Object.values(latLng).reverse();
        addressCoordinates.coordinates = cord;

        setListingData({
          ...listingData,
          addressCoordinates: { ...addressCoordinates },
          address: { ...listingData.address, streetAddress: address },
        });
      })
      .catch((error) => console.error('Error', error));
  };
  return (
    <div className="pages">
      <div className="left">
        <div className="heading"></div>
        <div className="heading-sub">Step 3</div>
        <h3>Where's your place located?</h3>
        <div className="form">
          <div className="form-error">
            {submissionError.message && submissionError.message}
          </div>
          <div className="location">
            <PlacesAutocomplete
              value={listingData.address.streetAddress}
              // onChange={(address) => setLocationName(address)}
              onSelect={handleSelect}
              onChange={(address) =>
                setListingData({
                  ...listingData,
                  address: {
                    ...listingData.address,
                    streetAddress: address,
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
                  <label className="form-label">Street Address</label>
                  <input
                    style={{ marginTop: '1rem' }}
                    {...getInputProps({
                      placeholder: 'Street Address',
                      className: 'location-input',
                    })}
                    autoComplete="none"
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
          <label className="form-label">
            {' '}
            Apartment/Suite (optional)
          </label>
          <input
            type="text"
            className="location-input"
            value={listingData.address.apartment}
            onChange={(e) =>
              setListingData({
                ...listingData,
                address: {
                  ...listingData.address,
                  apartment: e.target.value,
                },
              })
            }
          />
          <label className="form-label">Country</label>
          <CountryDropdown
            className="form-select"
            value={listingData.address.country}
            onChange={(val) => selectCountry(val)}
          />
          <label className="form-label">Region/state</label>
          <RegionDropdown
            className="form-select"
            value={listingData.address.region}
            country={listingData.address.country}
            onChange={(val) => selectRegion(val)}
          />
        </div>
        <div className="buttons">
          <button
            className="listing-btn back"
            onClick={() => setPage(2)}
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

export default Page3;
