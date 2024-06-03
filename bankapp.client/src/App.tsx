import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Create from "./Create";
import Update from "./Update";
import { Read } from "./Read";
import 'bootstrap/dist/css/bootstrap.min.css'
const buildMode = import.meta.env.MODE;

export const BASE_URL =
  buildMode === "development"
    ? "https://localhost:5118"
    : "https://usermsapi.azurewebsites.net";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
