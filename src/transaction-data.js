export const transactionColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.id}
          </div>
        );
      },
    },
    {
      field: "location",
      headerName: "Location",
      width: 500,
    },
    {
      field: "date",
      headerName: "Date",
      width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 230,
      renderCell: (params) => {
        return (
          <div className={`cellWithCategory${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const transactionRows = [
    {
      id: 1,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 2,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 3,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 4,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 5,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 6,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 7,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 8,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 9,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
    {
      id: 10,
      location: "Bureau of Internal Revenue Cebu South Branch",
      date: '2 Apr 2022',
      status:"Completed",
    },
  ];