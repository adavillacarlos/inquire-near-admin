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
                    <b className="d-block">Recepient </b>
                      
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

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useParams } from "react-router-dom";
// import ReportController from "../../controllers/reports/ReportController";

// const Report = () => {
//   const { reportId } = useParams();
//   const { reportData } = ReportController(reportId);
//   return (
//     <div >
//       {reportData.length === 0 ? (
//         <div></div>
//       ) : (
//         <div>
//           <Row>
//             <Col>
//               <div className="text-muted">
//               <Row>
//                   <Col>
//                     <p className="text-sm">
//                     Reporter
//                       <b className="d-block">
//                         {`${
//                           reportData.reporterId
//                             ? reportData.reporter.firstName +
//                               " " +
//                               reportData.reporter.lastName
//                             : ""
//                         } `}
//                       </b>
//                       <b className="d-block">{reportData.reporterId}</b>
//                     </p>
//                   </Col>
//                   <Col>
//                     <p className="text-sm">
//                     Recepient
//                       <b className="d-block">
//                         {`${
//                           reportData.recepientId
//                             ? reportData.recepientId.firstName +
//                               " " +
//                               reportData.recepientId.lastName
//                             : ""
//                         } `}
//                       </b>
//                       <b className="d-block">{reportData.recepientId}</b>
//                     </p>
//                   </Col>
//                 </Row>

//                 <Row>
//                 <Col>
//                     <p className="text-sm">
//                       Report Id
//                       <b className="d-block">{reportId}</b>
//                     </p>
//                   </Col>
//                   <Col>
//                     <p className="text-sm">
//                       Transaction Id
//                       <b className="d-block">{reportData.transactionId}</b>
//                     </p>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col>
//                     <p className="text-sm">
//                       <b>Date Reported</b>
//                       <p className="d-block">
//                         {`${
//                           reportData.dateTimeCreated? new Date(reportData.dateTimeCreated.seconds * 1000).toLocaleString() : ""
//                         }`}
//                       </p>
//                     </p>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col>
//                     <p className="text-sm">
//                       <b>Title</b>
//                       <p className="d-block">{reportData.title}</p>
//                     </p>
//                   </Col>
//                   </Row>
//                 <Row>
//                 <p className="text-sm">
//                       <b>Reason</b>
//                       <p className="d-block">{reportData.description}</p>
//                     </p>
//                 </Row>
//               </div>
//             </Col>
//           </Row>
//           {/* <Row className="mt-5">
//             <Col className="">
        
//               <div className="datatable" style={{ height: 400 }}>
//                 <DataGrid
//                   rows={inquiryList}
//                   // rows={transactionData ? transactionData.inquiryListData : inquiryRows}

//                   columns={inquiryColumns.concat(actionColumn)}
//                   pageSize={5}
//                   rowsPerPageOptions={[5]}
//                 />
//               </div>
//             </Col>
//           </Row> */}
//           {/* <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>{modalTitle}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <img className="img-fluid" src={image} alt="Loading" />
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal> */}
//         </div>
        
//       )}
//     </div>
//   );
// };

// export default Report;
