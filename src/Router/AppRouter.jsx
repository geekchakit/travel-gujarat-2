import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../_auth/Auth";
import PrivacyPolicy from "../pages/PrivacyPolicy";

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
    path: "*",
    element: <div>404</div>,
  },
]);

export default AppRouter;
