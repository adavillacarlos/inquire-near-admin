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
    field: "uid",
    headerName: "User Id",
    width: 220,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
    headerAlign: "center",
   
  },
  {
    field: "firstName",
    headerName: "User Name",
    width: 220,
    headerAlign: "center",
    align: "center"
    
  },
  {
    field: "dateJoined",
    headerName: "Date Joined",
    width: 220,
    headerAlign: "center",
  },
  
];
