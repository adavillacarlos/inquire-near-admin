export const userColumns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign:'center',
      align:'center',
      width: 150,
      autoHeight: 'true'
    },
    {
      field: "name",
      headerName: "User Name",
      headerAlign:'center',
      align:'center',
      width: 500,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date Joined",
      headerAlign:'center',
      align:'center',
      width: 300,
    },
    {
      field: "transactions",
      headerName: "No. of Transactions",
      headerAlign:'center',
      align:'center',
      width: 300,
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 2,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 3,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 4,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 5,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 6,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 7,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 8,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 9,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 10,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 11,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
    {
      id: 12,
      img: "https://images.news18.com/ibnlive/uploads/2022/07/cats-2-16571883604x3.png",
      name: "Ada Pauline P. Villacarlos",
      date:"2 Apr 2022",
      transactions:"5",
    },
  ];
  
  
  
  
  