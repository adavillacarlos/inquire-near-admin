import { signInWithEmailAndPassword  } from "firebase/auth";
import { useCallback } from "react";
import { auth } from "../../app/firebase.js";
import {AuthContext} from "../../context/AuthContext"
import { useContext } from "react";

const useSignInModel = () => {
  const {dispatch} = useContext(AuthContext); 
  const authenticateEmailPassword = useCallback((email, password,setError,navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"SIGNIN",payload:user});
        navigate("/");
      })
      .catch((error) => {
        setError(true); 
      });
  }, []);

  return {
    authenticateEmailPassword,
  };
};

export default useSignInModel;

//   // Sign Up User
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log("Error");
//   });
// }, []);
