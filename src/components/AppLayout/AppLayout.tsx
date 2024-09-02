// Libraries
import React from "react";
import { Outlet } from "react-router-dom";
// Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function AppLayout(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
