import React from "react";

import "./signInUp.scss";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signup/SignUp";

const SignInUp = () => {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
