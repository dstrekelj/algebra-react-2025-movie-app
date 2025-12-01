import { Routes, Route } from "react-router";
import { MovieListPage } from "./pages/MovieListPage";
import { MovieDetailPage } from "./pages/MovieDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<MovieListPage />} />
      <Route path="/movies/:id" element={<MovieDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
