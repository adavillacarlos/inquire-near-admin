import "./layout.scss";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReportController from "../../controllers/reports/ReportController";

const ReportTitle = ({ title }) => {  
    const { reportId } = useParams();
    const { reportData } = ReportController(reportId);
    
  return (
    <div className="title-bar">
            <h1 className="title">{title}</h1>
        <div className="btn-right">
        <Stack spacing={2} direction="row">
        <Link
                      to={`/transactions/${reportData.transactionId}`}
                      style={{ textDecoration: "none" }}
                    >
                       <div className="message-btn">View Inquiries</div>
            </Link>
           
            {/* <div className="ban-btn">Ban User</div> */}
        </Stack>
        </div>

    </div>
  );
};

export default ReportTitle;
