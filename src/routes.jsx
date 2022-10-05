import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import RegisterScreen from "./pages/RegisterScreen";
import { GlobalStyles } from "./styles/globalStyles";
import Homepage from "./pages/Homepage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/RegisterScreen" element={<RegisterScreen />} />
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};
