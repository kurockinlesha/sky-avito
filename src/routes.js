import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Auth } from "./pages/auth/auth";
import { Main } from "./pages/main/main";
import { Reg } from "./pages/reg/reg";

export const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Main />} />
        <Route path="/reg" element={<Reg />} />

      </Routes>
    </BrowserRouter>
  );
};