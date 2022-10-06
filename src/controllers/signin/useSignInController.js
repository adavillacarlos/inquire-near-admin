import { useState } from "react";
import useSignInModel from "../../models/auth/useSignInModel";
import { useNavigate } from "react-router-dom";

const useSignInController = () => {
  const {authenticateEmailPassword} =  useSignInModel(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false); 
  const navigate = useNavigate(); 


  const handleSignIn = (e) => {
    e.preventDefault(); 
    authenticateEmailPassword(email,password,setError,navigate); 
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleSignIn,
  };
};

export default useSignInController;
