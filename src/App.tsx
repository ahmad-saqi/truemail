import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
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
