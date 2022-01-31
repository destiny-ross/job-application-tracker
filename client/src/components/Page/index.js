import { useLocation } from "react-router-dom";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageSubheader from "./PageSubheader";

const Page = ({
  children,
  title,
  displayHeader,
  displaySubheader,
  displaySearch,
}) => {
  const location = useLocation();
  return (
    <main className="Page">
      {displayHeader && (
        <PageHeader
          displaySearch={displaySearch}
          location={location}
          title={title}
        />
      )}
      {displaySubheader && <PageSubheader location={location} />}
      {children}
    </main>
  );
};

export default Page;

const pageDisplayTitle = {
  "/dashboard": "Dashboard Home",
  "/dashboard/applications": "Applications",
  "/dashboard/applications/new": "New Application",
  "/dashboard/companies": "Companies",
  "/dashboard/contacts": "Contacts",
  "/dashboard/documents": "Documents",
  "/dashboard/settings": "Settings",
  "/dashboard/messages": "Messages",
  "/dashboard/calendar": "Calendar",
  "/dashboard/notifications": "Notifications",
};
