import { faBell, faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SocialNav = () => {
  return (
    <nav className="SocialNav">
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
