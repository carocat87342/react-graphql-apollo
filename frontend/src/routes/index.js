import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// components
import LoadingScreen from "../components/LoadingScreen";
// import GuestGuard from "../guards/GuestGuard";
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Authentication Routes

    {
      path: "/",
      children: [
        { element: <Navigate to="/host/discover" replace /> },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        // { path: "login-unprotected", element: <Login /> },
        // { path: "register-unprotected", element: <Register /> },
        // { path: "reset-password", element: <ResetPassword /> },
        // { path: "verify", element: <VerifyCode /> },
      ],
    },

    //Host Dashboard Routes
    {
      path: "/host",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/host/discover" replace /> },
        { path: "/host/discover", element: <Discover /> },
        { path: "/host/mypartners", element: <Mypartner /> },
      ],
    },

    //Guest Dashboard Routes
    {
      path: "/guest",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/mypartners" replace /> },
        { path: "mypartners", element: <GuestMypartner /> },
      ],
    },
    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },

    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
// Authentication
const Login = Loadable(lazy(() => import("../pages/Auth/Login")));
const Register = Loadable(lazy(() => import("../pages/Auth/Register")));
// const ResetPassword = Loadable(
//   lazy(() => import("../pages/Auth/ResetPassword"))
// );
// const VerifyCode = Loadable(lazy(() => import("../pages/Auth/VerifyCode")));
// Host
const Discover = Loadable(lazy(() => import("../pages/Discover")));
const Mypartner = Loadable(lazy(() => import("../pages/Mypartner")));
//Guest
const GuestMypartner = Loadable(
  lazy(() => import("../pages/guest/GuestMypartner"))
);
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
