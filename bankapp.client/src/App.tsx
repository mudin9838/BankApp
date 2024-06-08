import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Tag";
import Create from "./Create";
import Update from "./Update";
import { Read } from "./Read";
import "bootstrap/dist/css/bootstrap.min.css";
import Account from "./component/Account";
import Transactions from "./component/Transactions";
import Tags from "./component/Tag";
const buildMode = import.meta.env.MODE;

export const BASE_URL =
  buildMode === "development"
    ? "https://localhost:5118"
    : "https://usermsapi.azurewebsites.net";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tags />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
