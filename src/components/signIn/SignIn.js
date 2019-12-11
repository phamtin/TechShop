import React, { useState } from "react";

import "./signIn.scss";
import Form from "../form/Form";
import Button from "../button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassWord = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Form
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmail}
        />
        <Form
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassWord}
        />
        <Button type="submit">Sign in</Button>
        <Button clicked={signInWithGoogle}>Signin with Gmail</Button>
      </form>
    </div>
  );
};

export default SignIn;
