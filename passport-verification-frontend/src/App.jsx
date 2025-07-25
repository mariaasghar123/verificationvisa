import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify";
import HomePage from "./components/home/HomePage";
import Verification from "./components/verification/Verification";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminForm from "./components/admin/AdminForm";
import AdminDocumentList from "./components/admin/AdmingetDocument";
import AdminPage from "./components/admin/Singup";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="api/admin/upload" element={<AdminForm />} />
          <Route path="api/admin" element={<AdminDocumentList />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
