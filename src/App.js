import MainPage from "./Components/MainPage.js";
import SearchPage from "./Components/SearchPage.js";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [max, setMax] = useState(undefined);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Book" element={<SearchPage />} />
      </Routes>
    </>
  );
}
