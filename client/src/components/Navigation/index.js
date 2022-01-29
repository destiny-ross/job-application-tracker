import { useDispatch } from "react-redux";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faArrowRightFromBracket,
  faBuilding,
  faFile,
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
      <Link className={`NavLink`} to="dashboard">
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </Link>
      <Link to="/dashboard/applications" className="NavLink">
        <FontAwesomeIcon icon={faPenField} size="2x" />
      </Link>
      <Link to="/dashboard/companies" className="NavLink">
        <FontAwesomeIcon icon={faBuilding} size="2x" />
      </Link>
      <Link to="/dashboard/contacts" className="NavLink">
        <FontAwesomeIcon icon={faAddressBook} size="2x" />
      </Link>
      <Link to="/dashboard/documents" className="NavLink">
        <FontAwesomeIcon icon={faFile} size="2x" />
      </Link>
      <ul className="NavLink">
        <FontAwesomeIcon
          onClick={handleLogout}
          icon={faArrowRightFromBracket}
          size="2x"
        />
      </ul>
    </nav>
  );
};

export default Navigation;
