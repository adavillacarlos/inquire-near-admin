import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarRateIcon from '@mui/icons-material/StarRate';
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
                      <p className="d-block">{userData.uid}</p>
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>No. of Transaction as a Client</b>
                      <p className="d-block">{userData.transactionAsClient}</p>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                    <b>No. of Transaction as an Inquiree</b>
                      <p className="d-block">{userData.transactionAsInquiree}</p>
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>Date & Time Joined</b>
                      <p className="d-block">
                        {`${
                          userData.dateJoined? new Date(userData.dateJoined.seconds * 1000).toLocaleString() : ""
                        }`}
                      </p>
                    </p>
                  </Col>

                  <Col>
                    <p className="text-sm">
                      <b>Average Rating</b>
                      <p className="d-block">{userData.aveRating}
                      <StarRateIcon  sx={{color:'gold', height: 18}}/>
                      </p>
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p className="text-sm">
                      <b>Email Address</b>
                      <p className="d-block">{userData.email}</p>
                    </p>
                  </Col>
                  <Col>
                    <p className="text-sm">
                      <b>Password</b>
                      <p className="d-block">{"**********"}</p>
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
