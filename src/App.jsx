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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth/slices/authSlice";
import Courses from "./pages/admin/Courses";
import CreateNewCourse from "./pages/admin/CreateNewCourse";
function App() {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
          <Route path="courses" element={<Courses />} />
          <Route path="create-new-course" element={<CreateNewCourse />} />
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
