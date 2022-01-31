import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utils/formatDate";
import { getApplications } from "../../redux/applications/applicationsSlice";
import "./applications.css";

const ApplicationsPage = () => {
  const dispatch = useDispatch();
  const applicationsList = useSelector(
    (state) => state.applications.applications
  );
  useEffect(() => {
    dispatch(getApplications());
  }, []);
  console.log(applicationsList);
  return (
    <section className="ApplicationsListContainer">
      {applicationsList?.map((app) => {
        return (
          <article key={app.application_id}>
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
        );
      })}
    </section>
  );
};

export default ApplicationsPage;
