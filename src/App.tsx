import CssBaseline from "@mui/material/CssBaseline";
import { TopPage } from "./pages/TopPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<TopPage />} />
      </Routes>
    </>
  );
}

export default App;
