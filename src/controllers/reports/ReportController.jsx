import { useState, useEffect } from "react";
import ReportModel from "../../models/reports/ReportModel";
const ReportController = (reportId) => {
  const [reportData, setReportData] = useState([]);
  const { getReportData } = ReportModel(
    setReportData,
  );

  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = getReportData(reportId);
    return () => {
      setReportData([]);
    };
  }, []);

  return {
    reportData,
  };
};

export default ReportController;
