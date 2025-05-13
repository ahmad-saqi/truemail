import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";
import Single from "./pages/single";
import Profile from "./pages/profilePage";
import Billing from "./pages/billing";
import Home from "./pages/home";
import Bulk from "./pages/bulk";
import Records from "./pages/records";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/single" element={<Single />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bulk" element={<Bulk />} />
      <Route path="/records" element={<Records />} />
      {/* <Route
        element={
          <RouteGuard>
            <GlobalLayout />
          </RouteGuard>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  );
};

export default App;
