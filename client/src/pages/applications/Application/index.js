import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Page from "../../../components/Page";
import findObjByKey from "../../../utils/findObjByKey";

const Application = () => {
  const appArr = useSelector((state) => state.applications.applications);
  const [app, setApp] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getApp();
  });

  const getApp = () => {
    const app = findObjByKey(appArr, "application_id", id);
    setApp(app);
  };
  return (
    <Page
      title={`${app?.title} - ${app?.company}`}
      displayHeader={true}
      displaySearch={false}
    ></Page>
  );
};
export default Application;
