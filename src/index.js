import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import 'firebase/compat/auth';

import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);



