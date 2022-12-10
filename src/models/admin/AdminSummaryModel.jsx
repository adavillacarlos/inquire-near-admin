import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../app/firebase";

const AdminSummaryModel = (data, setData) => {
  //LISTEN  (realtime)
  const fetchData = onSnapshot(
    collection(db, "admins"),
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
      await deleteDoc(doc(db, "admins", id));
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

export default AdminSummaryModel;


export const adminColumns = [
  {
    field: "id",
    headerName: "Admin Id",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    headerAlign: "center"
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
    headerAlign: "center",
  },
 
];
