import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/Signup";
import OtpVerification from "./pages/auth/OtpVerification";
import NotFound from "./pages/auth/NotFound";
import AuthLayout from "./components/layout/authLayout";
import MainLayout from "./components/layout/MainLayout";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AuthGuard from "./guard/AuthGuard";
import Home from "./pages/main/Home";
import UnAuthorized from "./pages/auth/UnAuthorized";
import { useSelector } from "react-redux";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to={"/auth/login"} />}></Route>

        {/*pages wrap inside auth layout */}
        <Route
          path="/auth"
          element={
            <AuthGuard isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </AuthGuard>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="verify-otp" element={<OtpVerification />}></Route>
        </Route>

        {/*pages wrap inside main layout */}
        <Route
          path="/main"
          element={
            <AuthGuard isAuthenticated={isAuthenticated} user={user}>
              <MainLayout />
            </AuthGuard>
          }
        >
          <Route path="home" element={<Home />} />
        </Route>

        {/*pages wrap inside admin layout */}
        <Route
          path="/admin"
          element={
            <AuthGuard isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </AuthGuard>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* unauthorized page */}
        <Route path="/unauthorized" element={<UnAuthorized />}></Route>

        {/* not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
