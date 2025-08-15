import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
   <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
       <main className="container pt-5 mt-4">
          <Outlet />
        </main>
    </div>
    </div>
  )
}

export default Layout