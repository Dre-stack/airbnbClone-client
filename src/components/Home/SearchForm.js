import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

function SearchForm({ layout }) {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState({ startDate: '', endDate: '' });
  const [focusedInput, setFocuseInput] = useState('');
  const [guests, setQuests] = useState('');

  return (
    <div className="search-form">
      <div className="form-wrapper">
        <div className="location">
          <label classname="location-label">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where are you going?"
          />
        </div>
        <div className="date">
          <DateRangePicker
            startDate={date.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={date.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              setDate({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) =>
              setFocuseInput(focusedInput)
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
          <div className="guest">
            <h3>Guests</h3>
            <h4>Add Guests</h4>
          </div>
          <div className="search-icons">
            <i className="fas fa-search"></i>
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
