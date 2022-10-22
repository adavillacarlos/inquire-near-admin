import React from "react";
import { useState, useEffect } from "react";
import TransactionModel from "../../models/transaction/TransactionModel";
import { Button } from "react-bootstrap";
const TransactionController = (transactionId) => {
  const [transactionData, setTransactionData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [inquirerData, setInquirerData] = useState([]);
  const [inquiryData, setInquiryData] = useState([]);
  const [modalTitle, setModalTitle] = useState(""); 
  const [image, setImage] = useState([]); 

  const { getTransactionData, getImage } = TransactionModel(
    setTransactionData,
    setInquiryData, 
    setImage
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const unsubscribe = getTransactionData(transactionId);
    return () => {
      setTransactionData([]);
      setInquirerData([]);
    };
  }, []);

  //Proof AnswerURL
  const handleAnswerUrl = (row) => {
    setModalTitle("Proof Image"); 
    setShow(true); 
    //TO DO: to change to answer_image once it is saved
    getImage(row.inquiryListID, row.id,"inquiry_image"); 

  };

  //Image URL - client 
  const handleImageUrl = (row) => {
    setModalTitle("Client Image"); 
    setShow(true); 
    getImage(row.inquiryListID, row.id,"inquiry_image"); 
    // console.log("Client");
    // https://firebasestorage.googleapis.com/v0/b/inquire-near-2022.appspot.com/o/client_id%2Finquiry_id_inquiry_image?alt=media&token=bbe2aa9d-a0c9-408e-807d-bb9c5bbe7eff
  };

  const actionColumn = [
    {
      field: "decision",
      headerName: "Client Image",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellDecision">
            {params.row.imageUrl === null ? (
              <div></div>
            ) : (
              <div
                className="viewButton"
                size="sm"
                onClick={() => handleImageUrl(params.row)}
              >
                View
              </div>
            )}
          </div>
        );
      },
    },
    {
      field: "proof",
      headerName: "Proof",
      width: 250,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellDecision">
            {params.row.requireProof === true ? (
              <div
                className="viewButton"
                size="sm"
                onClick={() => handleAnswerUrl(params.row)}
              >
                View
              </div>
            ) : (
              <div></div>
            )}
          </div>
        );
      },
    },
  ];

  return {
    image, 
    show,
    modalTitle, 
    handleAnswerUrl,
    handleImageUrl, 
    handleClose,
    transactionData,
    actionColumn,
    inquiryData,
    setTransactionData,
    setInquirerData,
    setClientData,
  };
};

export default TransactionController;
