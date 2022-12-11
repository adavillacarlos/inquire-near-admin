import "./layout.scss";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

const UserTitle = ({ title }) => {  

  return (
    <div className="title-bar">
            <h1 className="title">{title}</h1>
        <div className="btn-right">
        <Stack spacing={2} direction="row">
            <Link to='/users/message'
            className="link">
            <div className="message-btn">
              Message User 
            </div>
            </Link>
        </Stack>
        </div>

    </div>
  );
};

export default UserTitle;
