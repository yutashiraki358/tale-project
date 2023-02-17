import CssBaseline from "@mui/material/CssBaseline";
import { TopPage } from "./pages/TopPage";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/registration";
function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
