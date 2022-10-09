import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inquiries from "./Inquiries";
import { useParams } from "react-router-dom";

const Transaction = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <Row>
        <Col className="text-end">
          <Button>View Inquiries</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-muted">
            <Row>
              <Col>
                <p className="text-sm">
                  Client
                  <b className="d-block">Cymmer Maranga</b>
                </p>
              </Col>
              <Col>
                <p className="text-sm">
                  Inquirer
                  <b className="d-block">Mel Jefferson Gabutan</b>
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
                  <b className="d-block">False</b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-sm">
                  PayPal Id
                  <b className="d-block">{transactionId}</b>
                </p>
              </Col>
              <Col>
                <p className="text-sm">
                  Amount
                  <b className="d-block">800</b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-sm">
                  Date & Time Started
                  <b className="d-block">April 2, 2022 08:00</b>
                </p>
              </Col>
              
              <Col>
                <p className="text-sm">
                  Location
                  <b className="d-block">
                    Bureau of Internal Revenue - Cebu South Branch
                  </b>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>{/* <Inquiries /> */}</Col>
      </Row>
    </div>
  );
};

export default Transaction;
