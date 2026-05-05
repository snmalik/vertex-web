import Navbar from "../components/common/Navbar";
import Footer from "../components/common/footer/Footer";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <Navbar /> 
   


      <Outlet />
      <Footer />
    </>
  );
}
