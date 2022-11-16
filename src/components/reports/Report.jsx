import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import StarRateIcon from '@mui/icons-material/StarRate';
import { useParams } from "react-router-dom";
import ReportController from "../../controllers/reports/ReportController";

const Report = () => {
  const { reportId } = useParams();
  const { reportData } = ReportController(reportId);

  return (
    <div >
      {reportData.length === 0 ? (
        <div></div>
      ) : (
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
                          reportData.client
                            ? reportData.client.firstName +
                              " " +
                              reportData.client.lastName
                            : ""
                        } `}
                      </b>
                      <b className="d-block">{reportData.clientID}</b>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      Inquirer
                      <b className="d-block">
                        {`${
                          reportData.inquirer
                            ? reportData.inquirer.firstName +
                              " " +
                              reportData.inquirer.lastName
                            : ""
                        } `}
                      </b>
                      <b className="d-block">{reportData.inquirerId}</b>
                    </p>
                  </Col>
                </Row>

                <Row>
                <Col>
                    <p className="text-sm">
                      Report Id
                      <b className="d-block">{reportId}</b>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      Transaction Id
                      <b className="d-block">{reportData.transactionID}</b>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>Date Created</b>
                      <p className="d-block">
                        {`${
                          reportData.dateTimeCreated? new Date(reportData.dateTimeCreated.seconds * 1000).toLocaleString() : ""
                        }`}
                      </p>
                    </p>
                  </Col>

                  <Col>
                    <p className="text-sm">
                      <b>Date Resolved</b>
                      <p className="d-block">
                        {`${
                          reportData.dateResolved? new Date(reportData.dateResolved.seconds * 1000).toLocaleString() : ""
                        }`}
                      </p>
                    </p>
                  </Col>
                </Row>

                <Row>
                <Col>
                    <p className="text-sm">
                      <b>Category</b>
                      <p className="d-block">{reportData.category}
                      </p>
                    </p>
                  </Col>

                  <Col>
                    <p className="text-sm">
                      <b>Status</b>
                      <p className="d-block">{"" + reportData.isCompleted}</p>
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>Title</b>
                      <p className="d-block">{reportData.title}</p>
                    </p>
                  </Col>
                  </Row>

                <Row>
                <p className="text-sm">
                      <b>Reason</b>
                      <p className="d-block">{reportData.description}</p>
                    </p>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Report;
