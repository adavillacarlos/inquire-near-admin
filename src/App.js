import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Admins from "./pages/Admins";
import Transactions from "./pages/transactions/Transactions";
import TransactionDetails from "./pages/transactions/TransactionDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {AuthContext} from "./context/AuthContext"; 
import { useContext } from "react";

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
                    <Users />
                  </RequireAuth>
                }
              />
              {/* <Route path=":userId" element={<User />} />
              <Route path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
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
              {/* <Route path=":reportId" element={<Report />} /> */}
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
              {/* <Route path=":reportId" element={<Admin />} />
              <Route path="new"
                element={<New inputs={adminInputs} title="Add New Admin" />}
              /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
