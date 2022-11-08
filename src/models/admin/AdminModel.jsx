import {doc,getDoc,} from "firebase/firestore";
import { db } from "../../app/firebase";
const AdminModel = (setAdminData) => {
  const getAdminData = async (adminId) => {
    try {
      const adminRef = doc(db, "admins", adminId);
      const adminSnap = await getDoc(adminRef);

      if (adminSnap.exists()) {
        setAdminData({
          id: adminSnap.id,
          ...adminSnap.data(),
        });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAdminData,
  };
};

export default AdminModel;


