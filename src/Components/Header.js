import react from "react";

const Header = ({handleDarkMode}) =>{
  return(
    <div className="header">
      <h1>Quick Notes</h1>
      <button className="save" onClick={()=> handleDarkMode((previousDarkMode)=> !previousDarkMode)}>
        Toggle Theme
      </button>
    </div>
  
  );
}
export default Header;