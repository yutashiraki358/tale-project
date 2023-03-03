import { Routes, Route } from "react-router-dom";
import RegistrationForm from "../pages/registration";
import { TopPage } from "../pages/TopPage";

export const Providers = () => {
  <>
    <Routes>
      <Route index element={<TopPage />} />
      <Route path="/registration" element={<RegistrationForm />} />
    </Routes>
  </>;
};
