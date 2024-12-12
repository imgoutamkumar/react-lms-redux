import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <Outlet />
    </div>
  );
};

export default MainLayout;
