import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../app/firebase";

const UserSummaryModel = (data, setData) => {
  //LISTEN  (realtime)
  const fetchData = onSnapshot(
    collection(db, "users"),
    (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    },
    (error) => {
      console.log(error);
    }
  );
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return {
    fetchData,
    deleteData,
  };
};

export default UserSummaryModel;

export const userColumns = [
  {
    field: "id",
    headerName: "User Id",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 120,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 120,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
    headerAlign: "center",
    align: "center",
  },

];
