import React from "react";
import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../app/firebase";

const UserModel = (setUsers, setUser) => {
  const getAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (userId) => {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // setUser({ id: docSnap.id, ...docSnap.data() });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllUsers,
    getUser,
  };
};

export default UserModel;


