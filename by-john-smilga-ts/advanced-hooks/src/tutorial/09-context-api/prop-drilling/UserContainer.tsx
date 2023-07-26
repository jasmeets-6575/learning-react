interface UserProp {
  name: string;
}
interface UserContainerProps {
  user: UserProp | null;
  logout: () => void;
}

const UserContainer: React.FC<UserContainerProps> = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
