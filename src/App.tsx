import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";
import SearchPage from "./pages/searchPage";
import Profile from "./pages/profilePage";
import Billing from "./pages/billing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/searchPage" element={<SearchPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/billing" element={<Billing />} />
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
