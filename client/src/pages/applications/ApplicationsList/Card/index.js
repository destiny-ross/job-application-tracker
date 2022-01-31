import formatDate from "../../../../utils/formatDate";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ app }) => {
  return (
    <Link to={app.application_id}>
      <article className="Card">
        <section className="companyLogo">
          <img
            src={`//logo.clearbit.com/${app.company}.com?size=70`}
            alt="company logo"
          />
        </section>
        <section className="jobInfoContainer">
          <section className="titleSection">
            <h3 className="title">
              {app.title} @ {app.company}
            </h3>
          </section>
          <section className="descSection">
            <p className="eventDate">
              Applied: {formatDate(app.applicationDate)}
            </p>
            <p className="salary">
              Salary Range: ${app.salaryMin.toString()}-$
              {app.salaryMax.toString()}
            </p>
          </section>
        </section>
      </article>
    </Link>
  );
};

export default Card;
