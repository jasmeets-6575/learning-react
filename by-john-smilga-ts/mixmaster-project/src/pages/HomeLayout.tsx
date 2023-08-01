import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      <h1>Homelayout</h1>
      <Outlet />
    </div>
  );
};
export default Homelayout;
