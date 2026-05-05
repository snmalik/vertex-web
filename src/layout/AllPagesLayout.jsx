import React from 'react';
import BlackNavbar from "../components/common/BlackNavbar/BlackNavbar";
import BlackFooter from "../components/common/BlackFooter/BlackFooter"
import { Outlet } from "react-router-dom";

export default function AllPagesLayout() {
  return (
    <>
      <BlackNavbar />  {/* BLACK NAVBAR */}
      <Outlet />
      <BlackFooter />
    </>
  );
}
