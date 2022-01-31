import "./applications.css";
import { Route, Routes } from "react-router-dom";
import ApplicationsList from "./ApplicationsList";
import NewApplication from "./NewApplication";
import Application from "./Application";

const ApplicationsPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ApplicationsList />} />
      <Route path="/:id" element={<Application />} />
      <Route path="/new" element={<NewApplication />} />
    </Routes>
  );
};

export default ApplicationsPage;
