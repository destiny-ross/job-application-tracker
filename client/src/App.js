import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/auth/authSlice";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Drawer from "./components/Drawer";
import Page from "./components/Page";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import ApplicationsPage from "./pages/applications";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };
  return (
    <div className="App">
      {isAuthenticated && <Navigation />}
      <Page>
        {isAuthenticated && (
          <div className="Page-header">
            <h1>{pageDisplayTitle[location.pathname]}</h1>
            <section>
              <input />
              <button>Search</button>
            </section>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={<button onClick={handleLogin}>Login</button>}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="dashboard" element={<ProtectedRoute />}>
            <Route index element={<DashboardPage />} />
            <Route path="applications" element={<ApplicationsPage />} />
          </Route>
        </Routes>
      </Page>
      {isAuthenticated && (
        <Drawer>
          <Routes>
            <Route path="/" element={null} />
          </Routes>
        </Drawer>
      )}
    </div>
  );
};

export default App;

const pageDisplayTitle = {
  "/dashboard": "Dashboard Home",
  "/dashboard/applications": "Applications",
  "/dashboard/companies": "Companies",
  "/dashboard/contacts": "Contacts",
  "/dashboard/documents": "Documents",
  "/dashboard/settings": "Settings",
};
