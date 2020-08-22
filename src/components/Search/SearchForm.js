import React, { useState } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GuestInput from './GuestInput';

function SearchForm({ layout }) {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [focusedInput, setFocusedInput] = useState(null);
  const [guests, setGuests] = useState('');
  const [displayGuestInput, setDisplayGuestInput] = useState(false);

  const setGuestsTotal = (adults, children, infants) => {
    const total = adults + children;
    if (total <= 0) {
      setGuests('');
    } else {
      let infantMessage = '';
      if (infants > 0) {
        infantMessage = `, ${infants} i...`;
      }
      setGuests(
        `${total} ${total > 1 ? 'guests' : 'guest'}${infantMessage}`
      );
    }
  };

  // const data = {
  //   location,
  //   startDate: date.startDate,
  //   endDate: date.endDate,
  // };
  // // console.log(data);

  // console.log(location);
  const handleSelect = (address) => {
    setLocation(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log('Success', latLng))
      .catch((error) => console.error('Error', error));
  };

  // const renderAutoComplete = ;

  return (
    <div className="search-form">
      <div className="form-wrapper">
        <div className="location">
          <PlacesAutocomplete
            value={location}
            onChange={(address) => setLocation(address)}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <React.Fragment>
                <label className="location-label">Location</label>
                <input
                  {...getInputProps({
                    placeholder: 'Where are you going?',
                    className: 'location-search-input',
                  })}
                />
                {suggestions.length > 0 && (
                  <div className="autocomplete-dropdown-container">
                    {/* {loading && <div>Loading...</div>} */}
                    {suggestions.map((suggestion, i) => {
                      return (
                        <div
                          className="suggestion"
                          {...getSuggestionItemProps(suggestion, {})}
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
        <div className="date">
          <DateRangePicker
            displayFormat="MMM D"
            startDate={date.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={date.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              setDate({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) =>
              setFocusedInput(focusedInput)
            } // PropTypes.func.isRequired,
            startDatePlaceholderText="Check In"
            endDatePlaceholderText="Check Out"
            startDateAriaLabel="Check In"
            showClearDates={true}
            noBorder={true}
            small={true}
            hideKeyboardShortcutsPanel={true}
          />
        </div>
        <div className="guest-search">
          <div
            className="guest"
            onClick={() => setDisplayGuestInput(!displayGuestInput)}
          >
            <h3>Guests</h3>
            <h4>{guests ? guests : 'Add Guests'}</h4>
          </div>
          <div className="search-icons">
            <i className="fas fa-search"></i>
            <p>Search</p>
          </div>
          <GuestInput
            setGuestsTotal={setGuestsTotal}
            display={displayGuestInput}
            setDisplay={setDisplayGuestInput}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SearchForm;
