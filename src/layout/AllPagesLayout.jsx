import BlackNavbar from "../components/BlackNavbar/BlackNavbar";
import BlackFooter from "../components/BlackFooter/BlackFooter"
import AllPAgesHero from "../components/AllPagesHero/AllPagesHero"
import { Outlet } from "react-router-dom";

export default function AllPagesLayout() {
  return (
    <>
      <BlackNavbar />  {/* BLACK NAVBAR */}
      <AllPAgesHero  />
      <Outlet />
      <BlackFooter />
    </>
  );
}
