import "./style.scss";
const Title = ({title}) => {

    return (
      <div className="title-bar">
		<h1 className="title">{title}</h1>
      </div>
    );
  };
  
  export default Title;