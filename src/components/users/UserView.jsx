import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import UserController from "../../controllers/user/UserController";

const User = () => {
  const { userId } = useParams();
  const { userData } = UserController(userId);

  return (
    <div >
      {userData.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <Row>
            <Col>
              <div className="text-muted">
                <Row>
                  <Col>
                    <p className="text-sm">
                     <b>User Name</b> 
                      <p className="d-block">
                        {`${
                          userData
                            ? userData.firstName +
                              " " +
                              userData.lastName
                            : ""
                        } `}
                      </p>
                      
                    </p>
                  </Col>
                  <Col>
                  <p className="text-sm">
                      <b>User Id</b>
                      <p className="d-block">{userData.id}</p>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>Email Address</b>
                      <p className="d-block">{userData.emailAddress}</p>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      <b>Role</b>
                      <p className="d-block">{userData.role}</p>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>Paypal Address</b>
                      <p className="d-block">{userData.paypalAddress}</p>
                    </p>
                  </Col>
                  
                  <Col>
                    <p className="text-sm">
                      <b className="d-block">
                        Status (Is User Active?)
                      </b>                     
                        {"" + userData.isActive}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>Date & Time Joined</b>
                      <p className="d-block">
                        {`${
                          userData.dateTimeCreated? new Date(userData.dateTimeCreated.seconds * 1000).toLocaleString() : ""
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

export default User;
