import ForgotPassword from "./component/ForgotPassword";
import SignIn from "./component/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPasswordOTP from "./component/ForgotPasswordOTP";
import RegistrationPage from "./component/RegistrationPage";
import ForgotPasswordLoginPage from "./component/ForgotPasswordLoginPage";
import Dashboard from "./component/Dashboard";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/forgotpassword",
      Component: ForgotPassword,
    },
    {
      path: "/forgotpasswordotp",
      Component: ForgotPasswordOTP,
    },
    {
      path: "/registration",
      Component: RegistrationPage,
    },
    {
      path: "/forgotlogin",
      element: <ForgotPasswordLoginPage />,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
