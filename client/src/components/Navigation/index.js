import { useDispatch } from "react-redux";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArrowRightFromBracket,
  faBuilding,
  faCog,
  faFiles,
  faHouse,
  faPenField,
} from "@fortawesome/pro-solid-svg-icons";
import { logout } from "../../redux/auth/authSlice";
import "./Navigation.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav className="Navigation">
      <div className="NavBar-header"></div>
      <Link className={`NavLink`} to="dashboard" end title="Dashboard Home">
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </Link>
      <Link
        to="dashboard/applications"
        className="NavLink"
        title="Applications"
      >
        <FontAwesomeIcon icon={faPenField} size="2x" />
      </Link>
      <Link to="/dashboard/companies" className="NavLink" title="Companies">
        <FontAwesomeIcon icon={faBuilding} size="2x" />
      </Link>
      <Link to="/dashboard/contacts" className="NavLink" title="Contacts">
        <FontAwesomeIcon icon={faAddressBook} size="2x" />
      </Link>
      <Link to="/dashboard/documents" className="NavLink" title="Documents">
        <FontAwesomeIcon icon={faFiles} size="2x" />
      </Link>
      <Link to="/dashboard/settings" className="NavLink" title="Settings">
        <FontAwesomeIcon icon={faCog} size="2x" />
      </Link>
      <div className="NavLink">
        <FontAwesomeIcon
          onClick={handleLogout}
          icon={faArrowRightFromBracket}
          size="2x"
        />
      </div>
    </nav>
  );
};

export default Navigation;
