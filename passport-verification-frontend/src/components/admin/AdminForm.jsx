import React, { useState } from "react";
import axios from "axios";

export default function AdminUploadForm() {
  const [formData, setFormData] = useState({
    name: "",
    passportNumber: "",
    referenceNumber: "",
    file: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("passportNumber", formData.passportNumber);
    data.append("referenceNumber", formData.referenceNumber);
    data.append("file", formData.file);

    try {
      await axios.post("http://localhost:5000/api/admin/upload", data);
      alert("Document uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-4 gap-2">
      <h2>Admin Document Upload</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="passportNumber"
          type="text"
          placeholder="Passport Number"
          onChange={handleChange}
          required
        />
        <input
          name="referenceNumber"
          type="text"
          placeholder="Reference Number"
          onChange={handleChange}
          required
        />
        <input
          name="file"
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={handleChange}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
