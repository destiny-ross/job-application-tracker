import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/auth/authSlice";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Tray from "./components/Tray";
import Page from "./components/Page";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };
  return (
    <div className="App">
      {isAuthenticated && <Header />}
      <Navigation />
      <Page>
        <Routes>
          <Route
            path="/"
            element={<button onClick={handleLogin}>Login</button>}
          />
          <Route path="dashboard" element={<ProtectedRoute />}>
            <Route index element={<h1>Dashboard</h1>} />
          </Route>
        </Routes>
      </Page>

      <Tray>
        <Routes>
          <Route path="/" element={null} />
        </Routes>
      </Tray>
    </div>
  );
};

export default App;