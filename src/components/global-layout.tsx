import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Navbar from "./navbar";

const GlobalLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Navbar />
      <div className="flex h-[calc(100vh-128px)] w-full items-center justify-center p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
