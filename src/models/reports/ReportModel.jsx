import {doc,getDoc,} from "firebase/firestore";
import { db } from "../../app/firebase";
const ReportModel = (setReportData) => {
  const getReportData = async (reportId) => {
    try {
      const reportRef = doc(db, "reports", reportId);
      const reportSnap = await getDoc(reportRef);

      if (reportSnap.exists()) {
        setReportData({
          id: reportSnap.id,
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


