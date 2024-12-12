import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  /* if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  } */
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/main/home" />;
      }
    }
  }

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/signup") ||
      location.pathname.includes("/verify-otp")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/signup"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/main/home" />;
    }
  }

  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauthorized" />;
  }

  if (
    isAuthenticated &&
    user?.role == "admin" &&
    location.pathname.includes("main")
  ) {
    return <Navigate to="/unauthorized" />;
  }
  return <>{children}</>;
};

export default AuthGuard;
