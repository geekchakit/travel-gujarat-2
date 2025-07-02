import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../_auth/Auth";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AboutUs from "../pages/AboutUs";
import GujaratTempleTour from "../pages/gujurat-temple-tour";

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
    path: "*",
    element: <div>404</div>,
  },
]);

export default AppRouter;
