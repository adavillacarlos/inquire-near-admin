import React from "react";
import { db } from "../../app/firebase";
import { collection, query, where, getDoc, getDocs } from "firebase/firestore";
const DashboardModel = (setSummary) => {
  const getSummary = async () => {
    const users = await getDocs(collection(db, "users"));
    const transactions = await getDocs(collection(db, "transaction"));
    const reports = await getDocs(collection(db, "reports"));

    const year = new Date().getFullYear();
    const sept = new Date(new Date(year, 8, 1, 1, 1, 0, 0));
    const oct = new Date(new Date(year, 9, 1, 1, 1, 0, 0));
    const nov = new Date(new Date(year, 10, 1, 1, 1, 0, 0));
    const dec = new Date(new Date(year, 11, 1, 1, 1, 0, 0));
    const jan = new Date(new Date(year + 1, 0, 1, 1, 1, 0, 0));

    const septQuery = query(
      collection(db, "transaction"),
      where("dateTimeEnded", "<", oct),
      where("dateTimeEnded", ">=", sept)
    );

    const octQuery = query(
      collection(db, "transaction"),
      where("dateTimeEnded", "<", nov),
      where("dateTimeEnded", ">=", oct)
    );

    const novQuery = query(
      collection(db, "transaction"),
      where("dateTimeEnded", "<", dec),
      where("dateTimeEnded", ">=", nov)
    );

    const decQuery = query(
      collection(db, "transaction"),
      where("dateTimeEnded", "<", jan),
      where("dateTimeEnded", ">=", dec)
    );

    const septData = await getDocs(septQuery);
    const octData = await getDocs(octQuery);
    const novData = await getDocs(novQuery);
    const decData = await getDocs(decQuery);


    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // const today = new Date();
    // const thisMonth = new Date(new Date().setMonth(today.getMonth()));
    // const currentMonth = new Date(new Date().setMonth(today.getMonth() - 1)); //last month orignally but used the term current month for the current month's data
    // const lastMonth = new Date(new Date().setMonth(today.getMonth() - 2));
    // const last2Month = new Date(new Date().setMonth(today.getMonth() - 3));
    // const last3Month = new Date(new Date().setMonth(today.getMonth() - 4));
    // const last4Month = new Date(new Date().setMonth(today.getMonth() - 5));

    // //October - 10 / 9
    // const currentMonthQuery = query(
    //   collection(db, "transaction"),
    //   where("dateTimeEnded", "<=", thisMonth),
    //   where("dateTimeEnded", ">", currentMonth)
    // );

    // //September - 8
    // const lastMonthQuery = query(
    //   collection(db, "transaction"),
    //   where("dateTimeEnded", "<=", currentMonth),
    //   where("dateTimeEnded", ">", lastMonth)
    // );

    // //Aug
    // const last2MonthQuery = query(
    //   collection(db, "transaction"),
    //   where("dateTimeEnded", "<=", lastMonth),
    //   where("dateTimeEnded", ">", last2Month)
    // );

    // //Jul
    // const last3MonthQuery = query(
    //   collection(db, "transaction"),
    //   where("dateTimeEnded", "<=", last2Month),
    //   where("dateTimeEnded", ">", last3Month)
    // );

    // //June
    // const last4MonthQuery = query(
    //   collection(db, "transaction"),
    //   where("dateTimeEnded", "<=", last3Month),
    //   where("dateTimeEnded", ">", last4Month)
    // );

    // const currentMonthData = await getDocs(currentMonthQuery); //current month
    // const lastMonthData = await getDocs(lastMonthQuery); //last month
    // const last2MonthData = await getDocs(last2MonthQuery);
    // const last3MonthData = await getDocs(last3MonthQuery);
    // const last4MonthData = await getDocs(last4MonthQuery);

    setSummary({
      usersData: users.docs.length,
      transactionsData: transactions.docs.length,
      reportsData: reports.docs.length,
      data: [
        {name:"Sept", Total:septData.docs.length}, 
        {name:"Oct", Total:octData.docs.length}, 
        {name:"Nov", Total:novData.docs.length}, 
        {name:"Dec", Total:decData.docs.length}, 
        // {
        //   name: months[last3Month.getMonth()],
        //   Total: last4MonthData.docs.length,
        // },
        // {
        //   name: months[last2Month.getMonth()],
        //   Total: last3MonthData.docs.length,
        // },
        // {
        //   name: months[lastMonth.getMonth()],
        //   Total: last2MonthData.docs.length,
        // },
        // {
        //   name: months[currentMonth.getMonth()],
        //   Total: lastMonthData.docs.length,
        // },
        // {
        //   name: months[thisMonth.getMonth()],
        //   Total: currentMonthData.docs.length,
        // },
      ],
    });
  };

  return { getSummary };
};

export default DashboardModel;
