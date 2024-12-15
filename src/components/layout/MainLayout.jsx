import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../main/Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full">
      {/* admin sidebar */}
      {/* <Sidebar /> */}
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <Header />
        <main className="flex-1 flex p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
