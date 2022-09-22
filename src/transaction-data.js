export const userColumns = [
    {
      field: "title",
      headerName: "Report Title",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 230,
    },
    {
      field: "status",
      headerName: "Category",
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
  export const userRows = [
    {
      id: 1,
      title: "I got scammed!",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 2,
      title: "Rating dispute",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 3,
      title: "Refund! Scam! Not worth!",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 4,
      title: "I got scammed!",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 5,
      title: "Rating dispute",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 6,
      title: "Refund! Scam! Not worth!",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 7,
      title: "I got scammed!",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 8,
      title: "Rating dispute",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 9,
      title: "Refund! Scam! Not worth!",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
    {
      id: 10,
      title: "I got scammed!",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: '2 Apr 2022',
      status:"active",
    },
  ];