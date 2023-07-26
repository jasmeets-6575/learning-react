import UserContainer from "./UserContainer";

interface UserProp {
  name: string;
}
interface NavLinksProps {
  user: UserProp | null;
  logout: () => void;
}
const NavLinks: React.FC<NavLinksProps> = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
export default NavLinks;
