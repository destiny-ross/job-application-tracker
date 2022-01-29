import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
