import { Route, Routes } from "react-router-dom";

import Billing from "./pages/billing";
import Bulk from "./pages/bulk";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Login from "./pages/loginPage";
import Profile from "./pages/profilePage";
import Records from "./pages/records";
import Signup from "./pages/signupPage";
import Single from "./pages/single";
import HelpPage from "./pages/helpPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/single" element={<Single />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/helpPage" element={<HelpPage />} />
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
