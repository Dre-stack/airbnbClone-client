import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';

function GuestInput({ setGuestsTotal, display, setDisplay }) {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const guestInputRef = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (
        guestInputRef.current &&
        !guestInputRef.current.contains(e.target)
      ) {
        setDisplay(false);
      }
    },
    [setDisplay]
  );
  useEffect(() => {
    if (display) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [guestInputRef, handleClickOutside, display]);

  useEffect(() => {
    const { adults, children, infants } = guests;
    if (adults === 0 && (children > 0 || infants > 0)) {
      setGuests({ ...guests, adults: 1 });
    }
    setGuestsTotal(adults, children, infants);
  }, [setGuestsTotal, guests]);

  return (
    <div
      className={display ? 'guest-input active' : 'guest-input'}
      ref={guestInputRef}
    >
      <div className="item">
        <div className="left">
          <h3>Adults</h3>
          <h5>Ages 13 and Above</h5>
        </div>
        <div className="right">
          <button
            className={
              guests.adults > 0 ? 'guest-btn' : 'guest-btn inactive'
            }
            onClick={(e) =>
              guests.adults < 1
                ? e.preventDefault()
                : setGuests({ ...guests, adults: guests.adults - 1 })
            }
          >
            <i className="fas fa-minus"></i>
          </button>
          <span>{guests.adults}</span>
          <button
            className={
              guests.adults < 16 ? 'guest-btn' : 'guest-btn inactive'
            }
            onClick={(e) =>
              guests.adults > 15
                ? e.preventDefault()
                : setGuests({ ...guests, adults: guests.adults + 1 })
            }
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="item">
        <div className="left">
          <h3>Children</h3>
          <h5>Ages 2 to 12</h5>
        </div>
        <div className="right">
          <button
            className={
              guests.children > 0 ? 'guest-btn' : 'guest-btn inactive'
            }
            onClick={(e) =>
              guests.children < 1
                ? e.preventDefault()
                : setGuests({
                    ...guests,
                    children: guests.children - 1,
                  })
            }
          >
            <i className="fas fa-minus"></i>
          </button>
          <span>{guests.children}</span>
          <button
            className={
              guests.children < 5 ? 'guest-btn' : 'guest-btn inactive'
            }
            onClick={(e) =>
              guests.children > 4
                ? e.preventDefault()
                : setGuests({
                    ...guests,
                    children: guests.children + 1,
                  })
            }
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="item">
        <div className="left">
          <h3>1nfants</h3>
          <h5>Under 2</h5>
        </div>
        <div className="right">
          <button
            className={
              guests.infants > 0 ? 'guest-btn' : 'guest-btn inactive'
            }
            onClick={(e) =>
              guests.infants < 1
                ? e.preventDefault()
                : setGuests({
                    ...guests,
                    infants: guests.infants - 1,
                  })
            }
          >
            <i className="fas fa-minus"></i>
          </button>
          <span>{guests.infants}</span>
          <button
            className={
              guests.infants < 5 ? 'guest-btn' : 'guest-btn inactive'
            }
            onClick={(e) =>
              guests.infants > 4
                ? e.preventDefault()
                : setGuests({
                    ...guests,
                    infants: guests.infants + 1,
                  })
            }
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestInput;
