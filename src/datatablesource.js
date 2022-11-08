export const reportColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
    headerAlign:'center',
    align: 'center',
  },
  {
    field: "title",
    headerName: "Report Title",
    width: 500,
    headerAlign:'center',
    align: 'center',
    
  },
  {
    field: "date",
    headerName: "Date",
    width: 300,
    headerAlign:'center',
    align:'center',
  },
  {
    field: "status",
    headerName: "Category",
    width: 300,
    headerAlign:'center',
    align:'center',
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const adminColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
];


//temporary data
export const reportRows = [
  {
    id: 1,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 2,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 3,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 4,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 5,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 6,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 7,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 8,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 9,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
  {
    id: 10,
    title: "I got scammed!",
    date: '2 Apr 2022',
    status:"Completed",
  },
];