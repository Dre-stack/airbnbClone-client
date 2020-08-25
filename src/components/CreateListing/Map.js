import React from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(
  ({ location, setListingData, listingData }) => {
    const setNewCoordinates = (e) => {
      //Must be reversed because mongoose GEOJSON starts with longitude and not latitude
      const coordinates = Object.values(e.latLng.toJSON()).reverse();
      setListingData({
        ...listingData,
        addressCoordinates: {
          ...listingData.addressCoordinates,
          coordinates,
        },
      });
    };

    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: location[0], lng: location[1] }}
      >
        {location && (
          <Marker
            position={{ lat: location[0], lng: location[1] }}
            draggable
            onDragEnd={(e) => setNewCoordinates(e)}
          />
        )}
      </GoogleMap>
    );
  }
);

export default Map;
