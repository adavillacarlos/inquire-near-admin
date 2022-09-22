export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
    headerAlign:'center',
    align: 'center',
  },
    {
      field: "admin",
      headerName: "Admin",
      width: 500,
      headerAlign:'center',
      align: 'center',
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
   
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     
    },
    {
      id: 2,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
    },
    {
      id: 3,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   
    },
    {
      id: 4,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  
    },
    {
      id: 5,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     
    },
    {
      id: 6,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
    },
    {
      id: 7,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   
    },
    {
      id: 8,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  
    },
    {
      id: 9,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
    },
    {
      id: 10,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
    },
    {
      id: 11,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     
    },
    {
      id: 12,
      name: "Fleurdelisse H. Rabanes",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
    },
  ];
  
  
  
  
  