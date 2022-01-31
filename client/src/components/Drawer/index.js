import "./Drawer.css";
import SocialNav from "./SocialNav";
import UserInfo from "./UserInfo";

const Tray = ({ children }) => {
  return (
    <div className="Drawer">
      <div className="Drawer-header">
        <SocialNav />
        <UserInfo />
      </div>
      {children}
    </div>
  );
};

export default Tray;
