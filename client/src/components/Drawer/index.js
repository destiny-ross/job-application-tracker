import "./Drawer.css";
import SocialNav from "./SocialNav";
import UserInfo from "./UserInfo";

const Drawer = ({ children, isOpen, setIsOpen, isAuthenticated }) => {
  //  should only render once authenticated user is viewing dashboard
  if (!isAuthenticated) {
    return null;
  }

  const drawerClassName = isOpen ? "Drawer open" : "Drawer";
  return (
    <aside aria-hidden={isOpen ? "false" : "true"} className={drawerClassName}>
      <div className="toggleWrapper">
        <div onClick={() => setIsOpen(!isOpen)} className="openToggle"></div>
        <div className="Drawer-header">
          <SocialNav />
          <UserInfo />
        </div>
      </div>
      {children}
    </aside>
  );
};

export default Drawer;
