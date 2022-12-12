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
                    <b className="d-block">  Reporter</b>
                     
                        {`${
                          reportData.reporter
                            ? reportData.reporter.firstName +
                              " " +
                              reportData.reporter.lastName
                            : ""
                        } `}
                      
                      <p className="d-block">{reportData.reporterId}</p>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                    <b className="d-block">Recipient </b>
                      
                        {`${
                          reportData.recepient
                            ? reportData.recepient.firstName +
                              " " +
                              reportData.recepient.lastName
                            : ""
                        } `}
                     
                     <p className="d-block">{reportData.recepientId}</p>
                    </p>
                  </Col>
                </Row>
                
              <Row>
                <Col>
                    <p className="text-sm">
                    <b className="d-block"> Report Id</b>
                      {reportId}
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                    <b className="d-block"> Transaction Id</b>
                  
                      {reportData.transactionId}
          
                     
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

