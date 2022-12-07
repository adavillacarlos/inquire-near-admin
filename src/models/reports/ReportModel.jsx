import {doc,getDoc,} from "firebase/firestore";
import { db } from "../../app/firebase";
const ReportModel = (setReportData) => {
  const getReportData = async (reportId) => {
    try {
      const reportRef = doc(db, "reports", reportId);
      const reportSnap = await getDoc(reportRef);

      if (reportSnap.exists()) {

        const reporterRef = doc(db, "users", reportSnap.data().reporterId);
        const reporterSnap = await getDoc(reporterRef);
        
        const recepientRef = doc(db, "users", reportSnap.data().recepientId);
        const recepientSnap = await getDoc(recepientRef);

        setReportData({
          id: reportSnap.id,
          reporter: reporterSnap.data(), 
          recepient: recepientSnap.data(), 
          ...reportSnap.data(),
        });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getReportData,
  };
};

export default ReportModel;





// import {
//   doc,
//   // query,
//   // where,
//   // collection,
//   getDoc,
//   // getDocs,
// } from "firebase/firestore";
// // import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { db } from "../../app/firebase";

// const ReportModel = (setReportData, setInquiryData, setImage) => {
//   const getReportData = async (reportId) => {
//     try {
//      // let list = []; 
//       const reportRef = doc(db, "reports", reportId);
//       const reportSnap = await getDoc(reportRef);
//       if (reportSnap.exists()) {

        // const reporterRef = doc(db, "users", reportSnap.data().id);
        // const reporterSnap = await getDoc(reporterRef);
        
        // const recepientRef = doc(db, "users", reportSnap.data().id);
        // const recepientSnap = await getDoc(recepientRef);

//         // const inquiryListQuery = query(
//         //   collection(db, "inquiries"),
//         //   where("inquiryListId", "==", reportSnap.data().inquiryListId)
//         // );

//         // const inquiryListData = await getDocs(inquiryListQuery);
//         // inquiryListData.forEach((doc) => {
//         //   list.push({ id: doc.id, ...doc.data() });
//         // });

//         setReportData({
//           id: reportId,
//           reporter: reporterSnap.data(), 
//           recepient: recepientSnap.data(), 
//           ...reportSnap.data(),
//         });
//       //  setInquiryData(list);
//       } 
//     } catch{

//     }
//   };
// //   const getImage = (inquiryListId, inquiryId,kindImage) => {
// //     // Create a reference to the file we want to download
// //     setImage([]);
// //     const storage = getStorage();
// //     const pathReference = ref(storage, 'gs://inquire-near-2022.appspot.com/' + inquiryListId + '/' + inquiryId + '_' + kindImage);
// //     // console.log('gs://inquire-near-2022.appspot.com/' + inquiryListID + '/' + inquiryId + '_' + kindImage + '.jpeg'); 
// //     // Get the download URL
// //     getDownloadURL(pathReference)
// //       .then((url) => {
// //         // Insert url into an <img> tag to "download"
// //         setImage(url); 
// //         // console.log(url); 
// //       })
// //       .catch((error) => {
// //         // A full list of error codes is available at
// //         // https://firebase.google.com/docs/storage/web/handle-errors
// //         switch (error.code) {
// //           case "storage/object-not-found":
// //             console.log("not found"); 
// //             // File doesn't exist
// //             break;
// //           case "storage/unauthorized":
// //             console.log("not access"); 
// //             // User doesn't have permission to access the object
// //             break;
// //           case "storage/canceled":
// //             console.log("cancelled"); 
// //             // User canceled the upload
// //             break;
// //           // ...
// //           case "storage/unknown":
// //             // Unknown error occurred, inspect the server response
// //             break;
// //           default:
// //             break;
// //         }
// //       });
// //   };

//   return {
//     getReportData,
//     // getImage,
//   };
// };

//  export default ReportModel;


// // export const inquiryRows = [
// //   {
// //     id: 1,
// //     inquiryMessage: "hello",
// //     inquiryAnswer: "goodbye",
// //     requireProof: "true",
// //     inquiryImage: "",
// //   },
// // ];

// // export const inquiryColumns = [
// //   {
// //     field: "id",
// //     headerName: "Id",
// //     headerAlign: "center",
// //     flex: 1,
// //     align: "center",
// //     hide: true,
// //   },
// //   {
// //     field: "question",
// //     headerName: "Question",
// //     headerAlign: "center",
// //     flex: 1,
// //     align: "center",
// //   },
// //   {
// //     field: "answerMessage",
// //     headerName: "Answer",
// //     headerAlign: "center",
// //     flex: 1,
// //     align: "center",
// //   },
// // ];

