import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback } from "react";
import { auth } from "../../app/firebase.js";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignInModel = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const authenticateEmailPassword = useCallback((email, password, setError) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       // return db.collection('users').doc(userCredential.user.uid).set({})
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "SIGNIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  const authenticateGmailPassword = useCallback((email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      dispatch({ type: "SIGNIN", payload: user });
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
  },[])

  return {
    authenticateEmailPassword,
    authenticateGmailPassword, 
  };
};

export default SignInModel;

