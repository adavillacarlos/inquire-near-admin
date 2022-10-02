import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn"
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Admins from "./pages/Admins";
import Transactions from "./pages/transactions/Transactions";
import TransactionDetails from "./pages/transactions/TransactionDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="users">
              <Route index element={<Users />} />
              {/* <Route path=":userId" element={<User />} />
              <Route path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>
            <Route path="transactions">
              <Route index element={<Transactions />} />
              <Route path=":transactionId" element={<TransactionDetails />} />
            </Route>
            <Route path="reports">
              <Route index element={<Reports />} />
              {/* <Route path=":reportId" element={<Report />} /> */}
            </Route>
            <Route path="admins">
              <Route index element={<Admins />} />
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
