import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing";

const App = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
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
