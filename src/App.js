import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./globals.css"

import Home from "./components/home";
import Character from "./components/character";

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
