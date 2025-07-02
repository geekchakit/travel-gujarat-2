import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../_auth/Auth";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import GujaratTempleTour from "../pages/gujurat-temple-tour";
import PanchaDwarkaDarshan from "../pages/pancha-dwarka-darshan";
import GujaratTempleTour7N8D  from "../pages/gujurat-temple-tour-7n-8d";
import SaurashtraDarshanTour from "../pages/saurashtra-darshan-tour";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/gujarat-temple-tour",
    element: <GujaratTempleTour />,
  },
  {
    path: "/pancha-dwarka-darshan",
    element: <PanchaDwarkaDarshan />,
  },
  {
    path: "/gujarat-temple-tour-7n-8d",
    element: <GujaratTempleTour7N8D />,
  },
  {
    path: "/saurashtra-darshan-tour",
    element: <SaurashtraDarshanTour />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default AppRouter;
