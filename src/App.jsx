import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./Components-LandingPage/landingpage";
import ForgotPassword from "./Components-LoginPage/ForgotPassword";
import CheckEmail from "./Components-LoginPage/CheckEmail";
import RegistrationPage from "./Components-RegistrationPage/RegistrationPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/check-email",
      element: <CheckEmail />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
  ],
  {
    basename: "/PRP_Portal",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;