import React from "react";
import { useState, useEffect } from "react";
import TransactionModel from "../../models/transaction/TransactionModel";

const TransactionController = (transactionId) => {
  const [transactionData, setTransactionData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [inquirerData, setInquirerData] = useState([]);
  const [inquiryData, setInquiryData] = useState([]);
  const { getTransactionData } = TransactionModel(setTransactionData);

  const fetchUserNames = () => {};

  useEffect(() => {
    const unsubscribe = getTransactionData(transactionId);
    return () => {
      setTransactionData([]);
    };
  }, []);

  const actionColumn = [
    {
      field: "decision",
      headerName: "Decision",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellDecision">
            <div className="viewButton">View</div>
          </div>
        );
      },
    },
  ];

  return {
    transactionData,
    actionColumn,
    setTransactionData,
    setInquirerData,
    setClientData,
  };
};

export default TransactionController;
