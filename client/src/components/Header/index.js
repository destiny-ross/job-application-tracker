import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import SocialNav from "./SocialNav";
import UserInformation from "./UserInformation";
const Header = () => {
  let location = useLocation();

  console.log(location);
  return (
    <header className="App-header">
      <div className="NavBar-header"></div>
      <div className="Page-header">
        <h2>{displayTitle[location.pathname]}</h2>
        <section>
          <input />
          <button>Search</button>
        </section>
      </div>
      <div className="Tray-header">
        <SocialNav />
        <UserInformation />
      </div>
    </header>
  );
};

export default Header;

const displayTitle = {
  "/dashboard": "Dashboard Home",
  "/dashboard/applications": "Applications",
  "/dashboard/companies": "Companies",
  "/dashboard/contacts": "Contacts",
  "/dashboard/documents": "Documents",
  "/dashboard/settings": "Settings",
};
