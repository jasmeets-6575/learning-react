import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </div>
  );
};
export default Homelayout;
