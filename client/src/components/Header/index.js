import "./Header.css";
import UserInformation from "./UserInformation";
const Header = () => {
  return (
    <header className="App-header">
      <div className="NavBar-header"></div>
      <div className="Page-header"></div>
      <div className="Tray-header">
        <UserInformation />
      </div>
    </header>
  );
};

export default Header;
