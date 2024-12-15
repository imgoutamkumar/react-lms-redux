import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/AdminSidebar";
import Header from "../admin/Header";
import { SidebarProvider } from "../ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* admin sidebar */}
        <AdminSidebar />
        <div className="flex flex-1 flex-col h-screen overflow-hidden">
          {/* admin header */}
          <Header />
          <main className="flex-1 flex px-3 pt-3 min-h-[calc(100vh-60px)] overflow-y-auto mb-3">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
