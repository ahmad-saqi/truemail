import { Route, Routes } from "react-router-dom";

import GlobalLayout from "./components/global-layout";
import RouteGuard from "./components/route-guard";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        element={
          <RouteGuard>
            <GlobalLayout />
          </RouteGuard>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
