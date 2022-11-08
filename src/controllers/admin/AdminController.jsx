import { useState, useEffect } from "react";
import AdminModel from "../../models/admin/AdminModel";
const AdminController = (adminId) => {
  const [adminData, setAdminData] = useState([]);
  const { getAdminData } = AdminModel(
    setAdminData,
  );

  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = getAdminData(adminId);
    return () => {
      setAdminData([]);
    };
  }, []);

  return {
    adminData,
  };
};

export default AdminController;
