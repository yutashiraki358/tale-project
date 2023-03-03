import CssBaseline from "@mui/material/CssBaseline";
import { TopPage } from "./pages/TopPage";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/registration";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
