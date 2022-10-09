export const transactionRows = [
  {
    id: "1",
    clientID: "1",
    inquirerID: "2",
    inquiryListID: 1,
    isCompleted: true,
    amount: 3000,
    payPalID: 4,
    dateTimeStarted: "2 Apr 2022",
    dateTimeEnded: "2 Apr 2022",
    store: "H&M",
  },
  {
    id: "2",
    clientID: "1",
    inquirerID: "2",
    inquiryListID: 2,
    isCompleted: false,
    amount: 3000,
    payPalID: 5,
    dateTimeStarted: "2 Apr 2022",
    dateTimeEnded: "2 Apr 2022",
    store: "Bureau of Internal Revenue Cebu South Branch",
  },
  {
    id: "3",
    clientID: "2",
    inquirerID: "1",
    inquiryListID: "3",
    isCompleted: true,
    amount: 3000,
    payPalID: 6,
    dateTimeStarted: "2 Apr 2022",
    dateTimeEnded: "2 Apr 2022",
    store: "H&M",
  },
];

export const transactionColumns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  // {
  //   field: "clientID",
  //   headerName: "Client Id",
  //   flex: 1,
  //   headerAlign: "center",
  //   align: "center",
  // },
  // {
  //   field: "inquirerID",
  //   headerName: "Inquirer Id",
  //   flex: 1,
  //   headerAlign: "center",
  //   align: "center",
  // },
  {
    field: "isCompleted",
    headerName: "Status",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "store",
    headerName: "Store",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

// const TransactionModel = () => {};

// export default TransactionModel;
