import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </div>
  );
};
export default Homelayout;
