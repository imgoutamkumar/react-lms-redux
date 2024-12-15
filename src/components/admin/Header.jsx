import React from "react";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <header className="bg-white h-[60px] border-b shadow-sm w-full flex items-center z-10">
      <SidebarTrigger /> <span className="flex-1"></span>
    </header>
  );
};

export default Header;
