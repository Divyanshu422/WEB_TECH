import ForgotPassword from "./component/ForgotPassword";
import SignIn from "./component/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPasswordOTP from "./component/ForgotPasswordOTP";
import RegistrationPage from "./component/RegistrationPage";
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
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
