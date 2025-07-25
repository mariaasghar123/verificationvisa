// src/pages/AdminPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminDocumentList from "./AdmingetDocument";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      // 💡 yahan apna real password rakhna
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password!");
    }
  };

  if (authenticated) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold">Welcome Admin</h2>
        <Link
          to="/api/admin/upload"
          className="ms-5 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-green-700 no-underline mb-5"
        >
          New Document
        </Link>
        <AdminDocumentList />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-xl font-semibold mb-4">Admin Verification</h2>
      <form onSubmit={handleCheck} className="flex flex-col gap-3 w-1/3">
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 mb-5">
          Verify
        </button>
      </form>
    </div>
  );
}
