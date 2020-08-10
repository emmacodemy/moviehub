import React, { useState } from “react”;
import “./signup.css”;
const App = (props) => {
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&‘*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  console.log(‘valid’, valid)
  return valid;
};
const [fields, setFields] = useState({
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  formErrors: {
    firstName: “”,
    lastName: “”,
    email: “”,
    password: “”
  }
});
const handleSubmit = e => {
  e.preventDefault();
  if (formValid(fields)) {
    console.log(`
      --SUBMITTING--
      First Name: ${fields.firstName}
      Last Name: ${fields.lastName}
      Email: ${fields.email}
      Password: ${fields.password}
    `);
  e.target.reset();
  } else {
    console.error(“FORM INVALID - DISPLAY ERROR MESSAGE”);
  }
};
const handleChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  let formErrors = { ...fields.formErrors };
  switch (name) {
    case “firstName”:
      formErrors.firstName =
        value.length < 3 ? “minimum 3 characaters required” : “”;
      break;
    case “lastName”:
      formErrors.lastName =
        value.length < 3 ? “minimum 3 characaters required” : “”;
      break;
    case “email”:
      formErrors.email = emailRegex.test(value)
        ? “”
        : “invalid email address”;
      break;
    case “password”:
      formErrors.password =
        value.length < 6 ? “minimum 6 characaters required” : “”;
      break;
    default:
      break;
  }
  setFields({ ...fields, formErrors, [name]: value });
  console.log(‘setFields’, fields);
};
    const { formErrors } = fields;
    return (
      <div className=“wrapper”>
        <div className=“form-wrapper”>
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className=“firstName”>
              <label htmlFor=“firstName”>First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? “error” : null}
                placeholder=“First Name”
                type=“text”
                name=“firstName”
                noValidate
                onChange={handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className=“errorMessage”>{formErrors.firstName}</span>
              )}
            </div>
            <div className=“lastName”>
              <label htmlFor=“lastName”>Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? “error” : null}
                placeholder=“Last Name”
                type=“text”
                name=“lastName”
                noValidate
                onChange={handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className=“errorMessage”>{formErrors.lastName}</span>
              )}
            </div>
            <div className=“email”>
              <label htmlFor=“email”>Email</label>
              <input
                className={formErrors.email.length > 0 ? “error” : null}
                placeholder=“Email”
                type=“email”
                name=“email”
                noValidate
                onChange={handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className=“errorMessage”>{formErrors.email}</span>
              )}
            </div>
            <div className=“password”>
              <label htmlFor=“password”>Password</label>
              <input
                className={formErrors.password.length > 0 ? “error” : null}
                placeholder=“Password”
                type=“password”
                name=“password”
                noValidate
                onChange={handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className=“errorMessage”>{formErrors.password}</span>
              )}
            </div>
            <div className=“createAccount”>
              <button type=“submit”>Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
};
export default App;
