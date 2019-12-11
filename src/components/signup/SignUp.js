import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.scss";
import Form from "../form/Form";
import Button from "../button/Button";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        setConfirmedPass(value);
        break;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmedPass) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      alert("Sign up successfully");
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmedPass("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email & password</span>
      <form onSubmit={handleSubmit}>
        <Form
          type="text"
          name="displayName"
          value={displayName}
          label="Display name"
          onChange={handleChange}
          required
        />
        <Form
          type="text"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <Form
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />
        <Form
          type="password"
          name="confirmedPass"
          value={confirmedPass}
          label="Confirm password"
          onChange={handleChange}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
