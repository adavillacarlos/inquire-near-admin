import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import UserList from "./pages/userSummary/Users";
import UserDetails from "./pages/userView/User";
import Message from "./pages/messageUser/messageUser";
import Admins from "./pages/adminSummary/adminSummary";
import Single from "./pages/adminView/Single";
import New from "./pages/adminNew/New";
import Reports from "./pages/reports/Reports";
import ReportDetails from "./pages/reports/ReportDetails";
import {adminInputs } from "./formSource";
import Transactions from "./pages/transactions/Transactions";
import TransactionDetails from "./pages/transactions/TransactionDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {AuthContext} from "./context/AuthContext"; 
import {useContext } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const {currentUser} = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/signin" />;
  };
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="signin" element={<SignIn />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <UserList />
                  </RequireAuth>
                }
              />
                 <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <UserDetails />
                  </RequireAuth>
                }
              />
                <Route
                path="/users/message"
                element={
                  <RequireAuth>
                    <Message title="Compose Message" />
                  </RequireAuth>
                }
              />    
            </Route>
            <Route path="transactions">
              <Route
                index
                element={
                  <RequireAuth>
                    <Transactions />
                  </RequireAuth>
                }
              />
              <Route
                path=":transactionId"
                element={
                  <RequireAuth>
                    <TransactionDetails />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="reports">
              <Route
                index
                element={
                  <RequireAuth>
                    <Reports />
                  </RequireAuth>
                }
              />
             <Route
                path=":reportId"
                element={
                  <RequireAuth>
                    <ReportDetails />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="admins">
              <Route
                index
                element={
                  <RequireAuth>
                    <Admins />
                  </RequireAuth>
                }
              />
              <Route
                path=":adminId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={adminInputs} title="Add New Admin" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
