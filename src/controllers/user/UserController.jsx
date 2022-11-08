import { useState, useEffect } from "react";
import UserModel from "../../models/user/UserModel";
const UserController = (userId) => {
  const [userData, setUserData] = useState([]);
  const { getUserData } = UserModel(
    setUserData,
  );

  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = getUserData(userId);
    return () => {
      setUserData([]);
    };
  }, []);

  return {
    userData,
  };
};

export default UserController;
