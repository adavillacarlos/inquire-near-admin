import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../app/firebase";

const ReportSummaryModel = (data, setData) => {
  //LISTEN  (realtime)
  const fetchData = onSnapshot(
    collection(db, "reports"),
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
      await deleteDoc(doc(db, "reports", id));
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

export default ReportSummaryModel;

export const reportColumns = [
  {
    field: "id",
    headerName: "Report Id",
    width: 220,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "reporterId",
    headerName: "Reporter ID",
    width: 220,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "recepientId",
    headerName: "Recipient ID",
    width: 220,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "title",
    headerName: "Report Title",
    width: 220,
    headerAlign: "center",
    align: "center",
  },
  
  
];
