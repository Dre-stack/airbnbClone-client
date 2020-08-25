import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { connect, useDispatch } from 'react-redux';
import { createNewListing } from '../actions';
import { NEW_LISTING } from '../actions/types';
import Page1 from '../components/CreateListing/Page1';
import Page2 from '../components/CreateListing/Page2';
import Page3 from '../components/CreateListing/Page3';
import Page4 from '../components/CreateListing/Page4';
import Page5 from '../components/CreateListing/Page5';
import Page6 from '../components/CreateListing/Page6';
import Page7 from '../components/CreateListing/Page7';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function CreateAListing({ user, history }) {
  //Component State

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState();
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });
  const [page, setPage] = useState(1);
  const [listingData, setListingData] = useState({
    location: {
      locationName: '',
      coordinates: [],
    },
    spaceType: 'Entire place',
    guestNumber: 4,
    houseType: '',
    hostType: '',
    bedrooms: '',
    bathrooms: '',

    accessibility: '',
    title: '',
    description: '',
    price: '',
    photos: '',
    address: {
      streetAddress: '',
      apartment: '',
      city: '',
      region: '',
      country: '',
    },
    addressCoordinates: {
      name: '',
      coordinates: [],
    },
  });

  //Hooks

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      setLoading(false);
    }
  }, [user]);

  //Format formdata objects

  const formatFormData = (formData, filesIgnore = []) => {
    let data = new FormData();

    let files = filesIgnore;

    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'object' && !files.includes(key)) {
        data.append(key, JSON.stringify(value) || null);
      } else if (files.includes(key)) {
        if (value) {
          for (let i = 0; i < value.length; i++) {
            data.append(key, value[i]);
          }
        }
      } else {
        data.append(key, value || null);
      }
    });

    return data;
  };

  //Submit for to the back end for creating listing

  const handleSubmit = () => {
    setLoading(true);
    const formData = formatFormData(listingData, ['photos']);

    createNewListing(formData)
      .then((res) => {
        dispatch({ type: NEW_LISTING, payload: res.listing });
        setPreviewUrl(`/listing/${res.listing._id}`);
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setSubmissionError({ status: true, message: err.message });
        setLoading(false);
      });
  };

  //render form Pages

  const renderForm = () => {
    if (success) {
      return (
        <div className="create-listing">
          <div className="success-message">
            <div className="message">
              Your Space has been successfully listed <br /> Click on
              the button bellow to preview it
            </div>
            <button
              className="listing-btn"
              onClick={() => history.push(previewUrl)}
            >
              Preview Listing
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="create-listing">
          <div className="progress-bar">
            <div
              className="content"
              style={{ width: `${(page / 7) * 100}%` }}
            ></div>
          </div>
          <div className="form-error">
            {submissionError.message && submissionError.message}
          </div>
          <div className="content">
            {page === 1 && (
              <Page1
                listingData={listingData}
                setListingData={setListingData}
                user={currentUser}
                setPage={setPage}
              />
            )}
            {page === 2 && (
              <Page2
                listingData={listingData}
                setListingData={setListingData}
                setPage={setPage}
              />
            )}
            {page === 3 && (
              <Page3
                listingData={listingData}
                setListingData={setListingData}
                setPage={setPage}
              />
            )}
            {page === 4 && (
              <Page4
                listingData={listingData}
                setListingData={setListingData}
                setPage={setPage}
              />
            )}
            {page === 5 && (
              <Page5
                listingData={listingData}
                setListingData={setListingData}
                setPage={setPage}
              />
            )}
            {page === 6 && (
              <Page6
                listingData={listingData}
                setListingData={setListingData}
                setPage={setPage}
              />
            )}
            {page === 7 && (
              <Page7
                listingData={listingData}
                setListingData={setListingData}
                setPage={setPage}
                submitForm={handleSubmit}
              />
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Header mode="account" />
      {loading ? (
        <div className="create-listing">
          <div className="loader">
            <BeatLoader
              css={override}
              size={20}
              color={'#008489'}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        renderForm()
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(CreateAListing);
