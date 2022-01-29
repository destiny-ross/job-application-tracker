import { useSelector } from "react-redux";

const UserInformation = () => {
  const user = useSelector((state) => state.auth.user);

  if (user !== null) {
    return (
      <div className="UserInfo">
        <div>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <h5>{user.title}</h5>
        </div>
        <img src={user.imgUrl} alt="" />
      </div>
    );
  } else return null;
};

export default UserInformation;
