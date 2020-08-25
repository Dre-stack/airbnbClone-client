import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../actions';
import { LOG_IN, LOAD_USER } from '../../actions/types';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

function Signup({ display, isOpen }) {
  // const [dateFocused, setDateFocused] = useState(false);
  const [birthday, setBirthday] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const data = { ...values, birthday };
    signupUser(data)
      .then((data) => {
        dispatch({ type: LOG_IN, payload: data.token });
        dispatch({ type: LOAD_USER, payload: data.user });
        // console.log(data.user);
        isOpen(false);
        history.push('/');
        setSubmitting(false);
      })
      .catch((err) => {
        // console.log(err.data);
        setSubmissionError({ status: true, message: err.message });
        setSubmitting(false);
      });
  };

  return (
    <div className="login modal signup">
      <div className="top">
        <button onClick={() => isOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <h3>Sign up</h3>
      </div>
      <div className="form">
        <div className="form-error">{submissionError.message}</div>

        <Formik
          initialValues={{
            email: '',
            password: '',
            firstname: '',
            lastname: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                values.email.toLowerCase().trim()
              )
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }
            if (!values.firstname) {
              errors.firstname = 'Firstname is required';
            }
            if (!values.lastname) {
              errors.lastname = 'Lastname is required';
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="form-wrapper">
              <div className="input-wrapper">
                <Field
                  type="tex"
                  name="firstname"
                  className={
                    touched & errors.email
                      ? 'form-input  error'
                      : 'form-input bb'
                  }
                  placeholder="Firstname"
                />
                <Field
                  type="text"
                  name="lastname"
                  className={
                    touched & errors.password
                      ? 'form-input  error'
                      : 'form-input'
                  }
                  placeholder="Lastname"
                />
              </div>
              {touched &&
              (errors.firstname || errors.lastname) ? null : (
                <div className="form-message">
                  {' '}
                  Make sure it matches the names on your government ID
                </div>
              )}
              <ErrorMessage
                name="firstname"
                component="div"
                className="form-error"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="form-error"
              />
              <div>
                <div className="single-input-wrapper">
                  <label className="form-label">Birthday</label>
                  <input
                    type="date"
                    name="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className={
                      errors.birthday
                        ? 'form-input  error full-width'
                        : 'form-input full-width'
                    }
                    placeholder="Birthday"
                  />
                </div>

                {errors.birthday ? null : (
                  <div className="form-message">
                    To sign up, you need to be at least 18. Your
                    birthday won’t be shared with other people who use
                    Airbnb.
                  </div>
                )}
              </div>
              <div className="input-wrapper">
                <Field
                  type="email"
                  name="email"
                  className={
                    touched & errors.email
                      ? 'form-input  error'
                      : 'form-input bb'
                  }
                  placeholder="Email"
                />
                <Field
                  type="password"
                  name="password"
                  className={
                    touched & errors.password
                      ? 'form-input  error'
                      : 'form-input'
                  }
                  placeholder="Password"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="form-error"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="form-error"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn mt2 full-width"
              >
                Sign Up
              </button>
              {/* <div className="forgot-password">
                <a href="##"> Forgot password?</a>
              </div>
              <div className="signup">
                <span>Don't have an account?</span>
                <a href="" onClick={()}> Sign up</a>
              </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
