import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ApartmentPage from "./pages/ApartmentPage";
import BlockPage from "./pages/BlockPage";
import FloorPlanPage from "./pages/FloorPlanPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/block/:blockId" element={<BlockPage />} />
        <Route
          path="/block/:blockId/floors/:floorId"
          element={<FloorPlanPage />}
        />
        <Route
          path="/block/:blockId/floors/:floorId/:entranceName/apartments/:apartmentId"
          element={<ApartmentPage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
