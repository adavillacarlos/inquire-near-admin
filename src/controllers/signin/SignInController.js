import { useState } from "react";
import SignInModel from "../../models/auth/SignInModel.js";
import jwt_decode from "jwt-decode";

const SignInController = () => {
  const { authenticateEmailPassword, authenticateGmailPassword } = SignInModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    authenticateEmailPassword(email, password, setError);
  };

  //Required Sign Up with Google Sign In for the Admin
  const handleGoogleSignIn = (credentialResponse) => {
    // console.log(credentialResponse);
    // console.log(credentialResponse.credential);
    var decoded = jwt_decode(credentialResponse.credential);
    // console.log(decoded);
    const password = "generic123"; 
    authenticateGmailPassword(decoded.email,password); 
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleSignIn,
    handleGoogleSignIn,
  };
};

export default SignInController;
