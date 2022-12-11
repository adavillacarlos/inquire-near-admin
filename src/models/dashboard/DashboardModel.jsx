import { db } from "../../app/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
const DashboardModel = (setSummary) => {
  const getSummary = async () => {
    const users = await getDocs(collection(db, "users"));
    const transactions = await getDocs(collection(db, "transactions"));
    const reports = await getDocs(collection(db, "reports"));

    const year = new Date().getFullYear();
    const sept = new Date(new Date(year, 8, 1, 1, 1, 0, 0));
    const oct = new Date(new Date(year, 9, 1, 1, 1, 0, 0));
    const nov = new Date(new Date(year, 10, 1, 1, 1, 0, 0));
    const dec = new Date(new Date(year, 11, 1, 1, 1, 0, 0));
    const jan = new Date(new Date(year + 1, 0, 1, 1, 1, 0, 0));

    const septQuery = query(
      collection(db, "transactions"),
      where("dateTimeEnded", "<", oct),
      where("dateTimeEnded", ">=", sept)
    );

    const octQuery = query(
      collection(db, "transactions"),
      where("dateTimeEnded", "<", nov),
      where("dateTimeEnded", ">=", oct)
    );

    const novQuery = query(
      collection(db, "transactions"),
      where("dateTimeEnded", "<", dec),
      where("dateTimeEnded", ">=", nov)
    );

    const decQuery = query(
      collection(db, "transactions"),
      where("dateTimeEnded", "<", jan),
      where("dateTimeEnded", ">=", dec)
    );

    const septData = await getDocs(septQuery);
    const octData = await getDocs(octQuery);
    const novData = await getDocs(novQuery);
    const decData = await getDocs(decQuery);

    setSummary({
      usersData: users.docs.length,
      transactionsData: transactions.docs.length,
      reportsData: reports.docs.length,
      data: [
        {name:"Sept", Total:septData.docs.length}, 
        {name:"Oct", Total:octData.docs.length}, 
        {name:"Nov", Total:novData.docs.length}, 
        {name:"Dec", Total:decData.docs.length}, 
      ],
    });
  };

  return { getSummary };
};

export default DashboardModel;
