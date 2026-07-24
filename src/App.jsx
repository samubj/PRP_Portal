import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./Components-LandingPage/landingpage";
import ForgotPassword from "./Components-LoginPage/ForgotPassword";
import CheckEmail from "./Components-LoginPage/CheckEmail";
import RegistrationPage from "./Components-RegistrationPage/RegistrationPage";
import StudentDashboard from "./Components-Dashboards/Student-Dashboard";
import AdminDashboard from "./Components-Dashboards/Admin-Dashboard";

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
    {
      path: "/student-dashboard",
      element: <StudentDashboard />,
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard />,
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