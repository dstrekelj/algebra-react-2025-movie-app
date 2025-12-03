import { Routes, Route } from "react-router";
import { SeriesListPage } from "./pages/SeriesListPage";
import { SeriesDetailPage } from "./pages/SeriesDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SearchPage } from "./pages/SearchPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<SeriesListPage />} />
      <Route path="/series/:id" element={<SeriesDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
