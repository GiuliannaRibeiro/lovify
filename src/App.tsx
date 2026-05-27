import { Routes, Route } from "react-router-dom";

import HomePage from "./routes";
import PlaylistPage from "./routes/playlist.$id";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/playlist/:id"
        element={<PlaylistPage />}
      />
    </Routes>
  );
}