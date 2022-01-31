import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { faCalendar } from "@fortawesome/pro-regular-svg-icons";
import "./SocialNav.css";

const SocialNav = () => {
  return (
    <nav className="SocialNav">
      <Link className="SocialNavLink" to="dashboard/calendar">
        <FontAwesomeIcon icon={faCalendar} size="2x" />
      </Link>
      <Link className="SocialNavLink" to="dashboard/messages">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </Link>
      <Link className="SocialNavLink" to="dashboard/notifications">
        <FontAwesomeIcon icon={faBell} size="2x" />
      </Link>
    </nav>
  );
};

export default SocialNav;
