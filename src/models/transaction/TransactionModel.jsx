const initState = {
  transactions: [
    {
      id: 1,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: "2 Apr 2022",
      status: "Completed",
    },
    {
      id: 2,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: "2 Apr 2022",
      status: "Completed",
    },
    {
      id: 3,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: "2 Apr 2022",
      status: "Completed",
    },
  ],
};

const TransactionModel = (state = initState, action) => {
  return state;
};

export default TransactionModel;
