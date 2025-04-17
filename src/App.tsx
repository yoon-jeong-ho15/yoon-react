import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Board from "./pages/board";

function App() {
  return (
    <div className="w-[100dvw]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/board" element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
