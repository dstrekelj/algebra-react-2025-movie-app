import { Routes, Route } from "react-router";
import { SeriesListPage } from "./pages/SeriesListPage";
import { SeriesDetailPage } from "./pages/SeriesDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<SeriesListPage />} />
      <Route path="/series/:id" element={<SeriesDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
