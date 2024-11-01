import { Outlet } from "react-router-dom";

import Footer from "../Footer.jsx/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 space-y-4">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
