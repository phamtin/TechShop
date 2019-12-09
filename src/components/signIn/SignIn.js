import React, { useState } from "react";

import "./signIn.scss";
import Form from "../form/Form";
import Button from "../button/Button";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassWord = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {};

  return (
    <div className="sign-in">
      <h2>I already have a account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <Form
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmail}
          required
        />
        <Form
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassWord}
          required
        />
        <Button type="submit" clicked={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
