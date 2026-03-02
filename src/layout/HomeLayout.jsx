import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
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
