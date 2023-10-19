import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// components
import LoadingScreen from "../components/LoadingScreen";
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
    // Dashboard Routes
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/host/discover" replace /> },
        { path: "/host/discover", element: <Discover /> },
        { path: "/host/mypartners", element: <Mypartner /> },
      ],
    },

    // Dashboard Routes
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

const Discover = Loadable(lazy(() => import("../pages/Discover")));
const Mypartner = Loadable(lazy(() => import("../pages/Mypartner")));
const GuestMypartner = Loadable(
  lazy(() => import("../pages/guest/GuestMypartner"))
);
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
