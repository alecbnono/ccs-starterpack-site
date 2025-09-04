import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="bg-slate-900 font-(family-name:--font-body)">
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
