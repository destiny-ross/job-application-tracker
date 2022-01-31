import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/auth/authSlice";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Drawer from "./components/Drawer";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  DashboardPage,
  LoginPage,
  ApplicationsPage,
  CompaniesPage,
  ContactsPage,
  DocumentsPage,
  MessagesPage,
  NotificationsPage,
  SettingsPage,
  NotFoundPage,
} from "./pages";
import { useState } from "react";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };
  return (
    <div className="App">
      {isAuthenticated && <Navigation />}
      <Routes>
        <Route
          path="/"
          element={<button onClick={handleLogin}>Login</button>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<DashboardPage />} />
          <Route path="applications/*" element={<ApplicationsPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Drawer
        isAuthenticated={isAuthenticated}
        isOpen={drawerIsOpen}
        setIsOpen={setDrawerIsOpen}
      ></Drawer>
    </div>
  );
};

export default App;
