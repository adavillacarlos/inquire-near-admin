import React from "react";
import { db } from "../../app/firebase";
import { collection, query, where, getDoc, getDocs } from "firebase/firestore";
const DashboardModel = (setSummary) => {
  const getSummary = async () => {

    const users = await getDocs(collection(db, "users"));
    const transactions = await getDocs(collection(db, "transaction"));
    // const reports = await getDocs(collection(db, "reports"));
    // console.log(users.docs.length);
    setSummary({
      usersData: users.docs.length,
      transactionsData: transactions.docs.length,
      transactionsDataPerMonth: {

      }
    });
  };

  return { getSummary };
};

export default DashboardModel;
