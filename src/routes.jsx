import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import { GlobalStyles } from "./styles/globalStyles";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
};
