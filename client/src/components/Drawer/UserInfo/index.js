import { useSelector } from "react-redux";
import "./UserInfo.css";

const UserInfo = () => {
  const user = useSelector((state) => state.auth.user);

  if (user !== null) {
    return (
      <div className="UserInfo">
        <div>
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <h4>{user.title}</h4>
        </div>
        <img src={user.imgUrl} alt="" />
      </div>
    );
  } else return null;
};

export default UserInfo;
