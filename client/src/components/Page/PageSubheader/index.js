import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./PageSubheader.css";

const PageSubheader = ({ location }) => {
  location.pathname.substring(10);
  const count = useSelector((state) => state.applications.count);

  if (location.pathname === "/dashboard" || location.pathname.includes("new")) {
    return null;
  }

  return (
    <section className="PageSubheader">
      <div>
        <span>Displaying 2 of {count}</span>
        <span>Limit 12 24 36</span>
        <span>Sorting by Most Recent</span>
      </div>
      <div>
        <Link to="new">
          <button>Add New</button>
        </Link>
      </div>
    </section>
  );
};

export default PageSubheader;
