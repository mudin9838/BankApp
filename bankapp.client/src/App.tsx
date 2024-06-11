import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Tag";
import Create from "./Create";

import "bootstrap/dist/css/bootstrap.min.css";
import Account from "./component/Account";
import Transactions from "./component/Transactions";
import Tags from "./component/Tag";
import EditTag from "./component/EditTag";
import AddTag from "./component/AddTag";
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
        <Route path="/tag/add-tag" element={<AddTag />} />
        <Route path="/tag/edit-tag/:id" element={<EditTag />} />
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
