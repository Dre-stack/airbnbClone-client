import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinUser } from '../../actions';
import { LOG_IN, LOAD_USER } from '../../actions/types';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

function Login({ display, isOpen, signupOpen }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [submissionError, setSubmissionError] = useState({
    status: false,
    message: '',
  });

  const handleSubmit = (values, { setSubmitting }) => {
    signinUser(values)
      .then((data) => {
        dispatch({ type: LOG_IN, payload: data.token });
        dispatch({ type: LOAD_USER, payload: data.user });

        isOpen(false);
        history.push('/');
        setSubmitting(false);
      })
      .catch((err) => {
        setSubmissionError({ status: true, message: err.message });
        setSubmitting(false);
      });
  };

  return (
    <div className="login modal">
      <div className="top">
        <button onClick={() => isOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <h3>Log in</h3>
      </div>
      <div className="form">
        <div className="form-error">{submissionError.message}</div>

        <Formik
          initialValues={{ email: '', password: '' }}
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
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="form-wrapper">
              <div className="input-wrapper">
                <Field
                  type="email"
                  name="email"
                  className={
                    errors.email
                      ? 'form-input  error'
                      : 'form-input bb'
                  }
                  placeholder="Email"
                />
                <Field
                  type="password"
                  name="password"
                  className={
                    errors.password
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
                Sign In
              </button>
              <div className="forgot-password">
                <a href="##"> Forgot password?</a>
              </div>
              <div className="signup">
                <span>Don't have an account?</span>
                <h3
                  onClick={() => {
                    isOpen(false);
                    signupOpen(true);
                  }}
                >
                  Sign up
                </h3>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
