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
    try{
      let list = []; 
      const transactionRef = doc(db, "transactions", transactionId);
      const transactionSnap = await getDoc(transactionRef);
      if(transactionSnap.exists()){
        
        const clientRef = doc(db, "users", transactionSnap.data().clientId);
        const clientSnap = await getDoc(clientRef);
        
        const inquirerRef = doc(db, "users", transactionSnap.data().inquirerId);
        const inquirerSnap = await getDoc(inquirerRef);

        const inquiryListQuery = query(
          collection(db, "inquiries"),
          where("inquiryListId", "==", transactionSnap.data().inquiryListId)
        );

        const inquiryListData = await getDocs(inquiryListQuery);
        inquiryListData.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setTransactionData({
          id: transactionId, 
          client: clientSnap.data(), 
          inquirer: inquirerSnap.data(), 
          ...transactionSnap.data(), 
        }); 
        setInquiryData(list);
      }
    } catch {

    }
  };

  const getImage = (inquiryListId, inquiryId,kindImage) => {
    // Create a reference to the file we want to download
    setImage([]);
    const storage = getStorage();
    const pathReference = ref(storage, 'gs://inquire-near-2022.appspot.com/' + inquiryListId + '/' + inquiryId + '_' + kindImage);
    // Get the download URL
    getDownloadURL(pathReference)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        setImage(url); 
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
