import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inquiries from "./Inquiries";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import TransactionModel, {
  inquiryRows,
  inquiryColumns,
} from "../../models/transaction/TransactionModel";
import TransactionController from "../../controllers/transactions/TransactionController";
import { useEffect } from "react";

const Transaction = () => {
  const { transactionId } = useParams();
  const { transactionData, actionColumn, setTransactionData } =
    TransactionController(transactionId);

  const { getTransactionData } = TransactionModel(setTransactionData);
  console.log(transactionData.inquirerList);

  return (
    <div>
      <Row>
        <Col>
          <div className="text-muted">
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
                  <b className="d-block">{transactionData.clientID}</b>
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
                  <b className="d-block">{transactionData.inquirerID}</b>
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
                  <b className="d-block">{"" + transactionData.isCompleted}</b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-sm">
                  PayPal Id
                  <b className="d-block">{transactionData.payPalID}</b>
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
                      transactionData.dateTimeStarted
                        ? new Date(
                            transactionData.dateTimeStarted.seconds * 1000
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
                      transactionData.inquirerList
                        ? transactionData.inquirerList.store
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
          <div className="datatable" style={{ width: "80%", height: "400px" }}>
            <DataGrid
              rows={inquiryRows}
              columns={inquiryColumns.concat(actionColumn)}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Transaction;
