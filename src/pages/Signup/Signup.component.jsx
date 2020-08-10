import React, { Fragment, Component } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./signup.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Fragment>
        <div className="header"></div>
        <div className="signup">
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              id="email"
              label="Email"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="confirmEmail"
              type="email"
              id="confirmEmail"
              label="Confirm Email"
              value={this.state.confirmEmail}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              id="password"
              label="Password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
              required
            />
            <CustomButton type="submit">Sign up</CustomButton>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
