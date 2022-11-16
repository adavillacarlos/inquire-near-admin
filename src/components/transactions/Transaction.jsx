import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
//import Inquiries from "./Inquiries";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  inquiryRows,
  inquiryColumns,
} from "../../models/transaction/TransactionModel";
import TransactionController from "../../controllers/transactions/TransactionController";

const Transaction = () => {
  const { transactionId } = useParams();
  const {
    image, 
    show,
    modalTitle,
    handleClose,
    transactionData,
    actionColumn,
    inquiryData,
  } = TransactionController(transactionId);

  const inquiryList = inquiryData ? inquiryData : inquiryRows;
  // const inquiryList = transactionData.inquiryListData.inquiryList ? transactionData.inquiryListData.inquiryList.map((value, index) => ({id: index, ...value})) : [];
  // console.log(transactionData ? transactionData.inquiryListData : "");

  return (
    <div >
      {transactionData.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <Row >
            <Col>
              <div style={{ display: 'block', padding: 30 }}>
                <Row>
                  <Col>
                    <p className="text-sm">
                      Client
                      <b className="d-block">
                        {`${
                          transactionData.client
                            ? transactionData.client.firstName +
                              " " +
                              transactionData.client.lastName
                            : ""
                        } `}
                      </b>
                      <b className="d-block">{transactionData.clientId}</b>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      Inquirer
                      <b className="d-block">
                        {`${
                          transactionData.inquirer
                            ? transactionData.inquirer.firstName +
                              " " +
                              transactionData.inquirer.lastName
                            : ""
                        } `}
                      </b>
                      <b className="d-block">{transactionData.inquirerId}</b>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      Transaction Id
                      <b className="d-block">{transactionId}</b>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      Status (Is it Completed?)
                      <b className="d-block">
                        {"" + transactionData.isCompleted}
                      </b>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      PayPal Id
                      <b className="d-block">{transactionData.payPalId}</b>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      Amount
                      <b className="d-block">{transactionData.amount}</b>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      Date & Time Started
                      <b className="d-block">
                        {`${
                          transactionData.dateTimeCreated
                            ? new Date(
                                transactionData.dateTimeCreated.seconds * 1000
                              ).toLocaleString()
                            : ""
                        }`}
                      </b>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      Date & Time Ended
                      <b className="d-block">
                        {`${
                          transactionData.dateTimeEnded
                            ? new Date(
                                transactionData.dateTimeEnded.seconds * 1000
                              ).toLocaleString()
                            : ""
                        }`}
                      </b>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      Location
                      <b className="d-block">
                        {`${
                          transactionData.store
                            ? transactionData.store
                            : ""
                        } `}
                      </b>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="">
        
              <div className="datatable" style={{ height: 400 }}>
                <DataGrid
                  rows={inquiryList}
                  // rows={transactionData ? transactionData.inquiryListData : inquiryRows}

                  columns={inquiryColumns.concat(actionColumn)}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
              </div>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="img-fluid" src={image} alt="Loading" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Transaction;
