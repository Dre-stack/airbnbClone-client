import React, { useState, useEffect } from 'react';
import Map from './Map';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

function Page4({ listingData, setPage, setListingData }) {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const coord = listingData.addressCoordinates.coordinates;
    if (coord && coord.length > 1) {
      setCoordinates(coord.reverse());
    } else {
      const address = listingData.address.streetAddress;
      Geocode.fromAddress(address).then((res) => {
        const { lat, lng } = res.results[0].geometry.location;
        // console.log(lat, lng);
        setCoordinates([lat, lng]);
      });
    }
  }, [listingData]);

  return (
    <div className="pages">
      <div className="left">
        <div className="heading">Is the pin in the write place?</div>
        <p>
          If needed, you can adjust the pin to the right location.{' '}
          <br />
          Only confirmed guests will see this, so they know how to get
          to your place
        </p>
        {coordinates && (
          <div className="map">
            <Map
              isMarkerShown
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              location={coordinates}
              setListingData={setListingData}
              listingData={listingData}
            />
          </div>
        )}
        <div className="buttons ">
          <button
            className="listing-btn back"
            onClick={() => setPage(3)}
          >
            <i className="fas fa-chevron-left"></i> Back
          </button>
          <button className="listing-btn" onClick={() => setPage(5)}>
            Yes, that's right
          </button>
        </div>
      </div>
      {/* <div>
        <pre>{JSON.stringify(listingData, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default Page4;
