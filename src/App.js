import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/globals.css";

import Home from "./pages/home";
import Character from "./pages/character";

export default function Index() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
