import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div
      class="container text-center"
      style={{ background: "#171717", width: "50%" }}
    >
      <h1>Sign Up</h1>
      <form>
        <div class="form-group">
          <label for="Email1">Email</label>
          <input type="email" class="form-control " id="Email1" />
        </div>
        <div class="form-group">
          <label for="Email2">Confirm email</label>
          <input type="email" class="form-control" id="Email2" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="password1" />
        </div>
        <div class="form-group">
          <label for="password2">Confirm Password</label>
          <input type="password" class="form-control" id="password" />
        </div>

        <button
          type="submit"
          class="btn btn-danger"
          style={{ background: "#FF0000", width: "50%", marginTop: "10px" }}
        >
          Sign Up
        </button>
        <p style={{ color: "#808584" }}>
          already have an account? <a href={"#"}>Sign in</a> instead
        </p>
      </form>
    </div>
  );
}

export default Signup;
