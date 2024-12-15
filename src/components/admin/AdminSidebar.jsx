import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ChevronUp,
  CircleUserRound,
  LogOut,
  Settings,
  User2,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/slices/authSlice";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const AdminSidebar = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const location = useLocation();
  const activeTab = location.pathname;
  const handleLogout = () => {
    dispatch(logout()).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  };

  const sidebarLinks = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Add Course",
      url: "/admin/create-new-course",
      icon: Plus,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`flex items-center gap-4 p-3 rounded-md transition-all duration-200 group ${
                        activeTab === item.url
                          ? "bg-indigo-500 text-white shadow-md"
                          : "hover:shadow-md hover:!bg-[#ea4576]"
                      }`}
                    >
                      <item.icon
                        className={`transition-transform duration-300 ${
                          activeTab === item.url
                            ? "scale-125"
                            : "group-hover:scale-110 group-hover:rotate-6"
                        }`}
                      />
                      <span className="text-sm">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span className="flex items-center gap-2 cursor-pointer">
                    <CircleUserRound />
                    Account
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex items-center gap-2 cursor-pointer">
                    <Settings />
                    Setting
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut />
                    Sign out
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
