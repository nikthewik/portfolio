// LIBRARIES
import { Outlet } from "react-router-dom";
// COMPONENTS
import Navbar from "../Navbar/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default AppLayout;
