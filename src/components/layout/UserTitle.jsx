import "./layout.scss";
import Stack from '@mui/material/Stack';
const UserTitle = ({ title }) => {  
  return (
    <div className="title-bar">
            <h1 className="title">{title}</h1>
        <div className="btn-right">
        <Stack spacing={2} direction="row">
            <div className="message-btn">Message User</div>
            <div className="ban-btn">Ban User</div>
        </Stack>
        </div>

    </div>
  );
};

export default UserTitle;
