import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {label ? <label className="form-input-label">{label}</label> : null}
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
      required
    />
  </div>
);

export default FormInput;
