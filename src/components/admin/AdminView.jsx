
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import AdminController from "../../controllers/admin/AdminController";


const AdminView = () => {
const { adminId } = useParams();
const { adminData } = AdminController(adminId);

return (
  <div >
    {adminData.length === 0 ? (
      <div></div>
    ) : (
      <div>
        <Row>
          <Col>
            <div className="text-muted">
              <Row>
                <Col>
                  <p className="text-sm">
                   <b>Admin Name</b> 
                    <p className="d-block">
                      {`${
                        adminData
                          ? adminData.firstName +
                            " " +
                            adminData.lastName
                          : ""
                      } `}
                    </p>
                    
                  </p>
                </Col>
                <Col>
                  <p className="text-sm">
                    <b>Admin Id</b>
                    <p className="d-block">{adminData.id}</p>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-sm">
                    <b>Email Address</b>
                    <p className="d-block">{adminData.email}</p>
                  </p>
                </Col>
                <Col>
                  <p className="text-sm">
                    <b>Password</b>
                    <p className="d-block">{adminData.password}</p>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-sm">
                  <b>Date & Time Joined</b>
                  <p className="d-block">
                      {`${
                        adminData.timeStamp? new Date(adminData.timeStamp.seconds * 1000).toLocaleString() : ""
                      }`}
                    </p>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )}
  </div>
);
};

  export default AdminView;