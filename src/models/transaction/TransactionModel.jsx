import React from "react";
import {
  doc,
  query,
  where,
  collection,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { db } from "../../app/firebase";
const TransactionModel = (setTransactionData, setInquiryData, setImage) => {
  const getTransactionData = async (transactionId) => {
    try {
      let list = [];

      const transactionRef = doc(db, "transaction", transactionId);
      const transactionSnap = await getDoc(transactionRef);
      // console.log(docSnap.data().clientID);
      const clientRef = doc(db, "users", transactionSnap.data().clientID);
      const clientSnap = await getDoc(clientRef);

      const inquirerRef = doc(db, "users", transactionSnap.data().inquirerID);
      const inquirerSnap = await getDoc(inquirerRef);

      // const inquirerListRef = doc(
      //   db,
      //   "inquirylist",
      //   docSnap.data().inquiryListID
      // );
      // const inquirerListSnap = await getDoc(inquirerListRef);

      const inquiryListQuery = query(
        collection(db, "inquiry"),
        where("inquiryListID", "==", transactionSnap.data().inquiryListID)
      );
      const inquiryListData = await getDocs(inquiryListQuery);
      inquiryListData.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });

      if (transactionSnap.exists()) {
        setTransactionData({
          id: transactionSnap.id,
          client: clientSnap.data(),
          inquirer: inquirerSnap.data(),
          ...transactionSnap.data(),
        });
        setInquiryData(list);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getImage = (inquiryListID, inquiryId,kindImage) => {
    // Create a reference to the file we want to download
    setImage([]);
    const storage = getStorage();
    const pathReference = ref(storage, 'gs://inquire-near-2022.appspot.com/' + inquiryListID + '/' + inquiryId + '_' + kindImage);
    // console.log('gs://inquire-near-2022.appspot.com/' + inquiryListID + '/' + inquiryId + '_' + kindImage + '.jpeg'); 
    // Get the download URL
    getDownloadURL(pathReference)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        setImage(url); 
        // console.log(url); 
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            console.log("not found"); 
            // File doesn't exist
            break;
          case "storage/unauthorized":
            console.log("not access"); 
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            console.log("cancelled"); 
            // User canceled the upload
            break;
          // ...
          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break;
          default:
            break;
        }
      });
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
    getImage,
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
    field: "id",
    headerName: "Id",
    headerAlign: "center",
    flex: 1,
    align: "center",
    hide: true,
  },
  {
    field: "question",
    headerName: "Question",
    headerAlign: "center",
    flex: 1,
    align: "center",
  },
  {
    field: "answerMessage",
    headerName: "Answer",
    headerAlign: "center",
    flex: 1,
    align: "center",
  },
];
