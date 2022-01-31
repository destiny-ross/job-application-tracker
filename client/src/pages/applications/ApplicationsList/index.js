import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../../../components/Page";
import { getApplications } from "../../../redux/applications/applicationsSlice";
import "./ApplicationsList.css";
import Card from "./Card";
const ApplicationList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplications());
  }, []);

  const applicationsList = useSelector(
    (state) => state.applications.applications
  );

  return (
    <Page title="Applications" displayHeader={true} displaySubheader={true}>
      <section className="ApplicationsListContainer">
        {applicationsList?.map((app) => {
          return <Card app={app} key={app.application_id} />;
        })}
      </section>
    </Page>
  );
};

export default ApplicationList;
