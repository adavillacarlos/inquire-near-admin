import React from "react";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../../app/firebase";
const TransactionModel = (setTransactionData) => {
  const getTransactionData = async (transactionId) => {
    try {
      const docRef = doc(db, "transaction", transactionId);
      const docSnap = await getDoc(docRef);
      // console.log(docSnap.data().clientID);
      const clientRef = doc(db, "users", docSnap.data().clientID);
      const clientSnap = await getDoc(clientRef);

      const inquirerRef = doc(db, "users", docSnap.data().inquirerID);
      const inquirerSnap = await getDoc(inquirerRef);

      const inquirerListRef = doc(
        db,
        "inquirylist",
        docSnap.data().inquiryListID
      );
      const inquirerListSnap = await getDoc(inquirerListRef);

      if (docSnap.exists()) {
        setTransactionData({
          id: docSnap.id,
          client: clientSnap.data(),
          inquirer: inquirerSnap.data(),
          inquirerList: inquirerListSnap.data(),
          ...docSnap.data(),
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getClientData = async (cid) => {
  //   try {
  //     const docRef = doc(db, "users", cid);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setClientData({ id: docSnap.id, ...docSnap.data() });
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getInquirerData = async (iid) => {
  //   try {
  //     const docRef = doc(db, "users", iid);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setInquirerData({ id: docSnap.id, ...docSnap.data() });
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return {
    getTransactionData,
  };
};

export default TransactionModel;

export const inquiryRows = [
  {
    id: 1,
    inquiryMessage: "hello",
    inquiryAnswer: "goodbye",
    requireProof: "true",
    inquiryImage: "",
  },
];

export const inquiryColumns = [
  {
    field: "inquiryMessage",
    headerName: "Message",
    headerAlign: "center",
    flex: 1,
    align: "center",
  },
  {
    field: "inquiryAnswer",
    headerName: "Answer",
    headerAlign: "center",
    flex: 1,

    align: "center",
  },
  {
    field: "requireProof",
    headerName: "Require Proof ",
    headerAlign: "center",
    flex: 1,
    align: "center",
  },
];
