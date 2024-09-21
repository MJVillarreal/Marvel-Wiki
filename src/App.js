import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/globals.css";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Movie from "./pages/movie";
import AllMovies from "./pages/allMovies";
import Character from "./pages/character";
import Footer from "./components/footer";

export default function Index() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
