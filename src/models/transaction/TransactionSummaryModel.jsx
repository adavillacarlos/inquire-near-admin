import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../app/firebase";

const TransactionSummaryModel = (data, setData) => {
  //LISTEN  (realtime)
  const fetchData = onSnapshot(
    collection(db, "transaction"),
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
      await deleteDoc(doc(db, "transaction", id));
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

export default TransactionSummaryModel;

// export const transactionRows = [
//   {
//     id: "1",
//     clientID: "1",
//     inquirerID: "2",
//     inquiryListID: 1,
//     isCompleted: true,
//     amount: 3000,
//     payPalID: 4,
//     dateTimeStarted: "2 Apr 2022",
//     dateTimeEnded: "2 Apr 2022",
//     store: "H&M",
//   },
//   {
//     id: "2",
//     clientID: "1",
//     inquirerID: "2",
//     inquiryListID: 2,
//     isCompleted: false,
//     amount: 3000,
//     payPalID: 5,
//     dateTimeStarted: "2 Apr 2022",
//     dateTimeEnded: "2 Apr 2022",
//     store: "Bureau of Internal Revenue Cebu South Branch",
//   },
//   {
//     id: "3",
//     clientID: "2",
//     inquirerID: "1",
//     inquiryListID: "3",
//     isCompleted: true,
//     amount: 3000,
//     payPalID: 6,
//     dateTimeStarted: "2 Apr 2022",
//     dateTimeEnded: "2 Apr 2022",
//     store: "H&M",
//   },
// ];

export const transactionColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "ClientID",
    headerName: "Client Id",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "inquirerID",
    headerName: "Inquirer Id",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "isCompleted",
    headerName: "Status",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "store",
    headerName: "Store",
    width: 500,
    headerAlign: "center",
    align: "center",
  },
];
