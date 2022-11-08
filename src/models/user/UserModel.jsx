import {doc,getDoc,} from "firebase/firestore";
import { db } from "../../app/firebase";
const UserModel = (setUserData) => {
  const getUserData = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserData({
          id: userSnap.id,
          ...userSnap.data(),
        });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUserData,
  };
};

export default UserModel;


