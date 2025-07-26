import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminDocumentList() {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = () => {
    axios
      .get("https://verifypassword-avy6.vercel.app/api/admin")
      .then((res) => {
        setDocuments(res.data);
      })
      .catch((err) => {
        console.error("Error fetching documents:", err);
      });
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      axios
        .delete(`https://verifypassword-avy6.vercel.app/api/admin/delete/${id}`)
        .then((res) => {
          alert("Deleted successfully");
          fetchDocuments(); // refresh list
        })
        .catch((err) => {
          console.error("Error deleting document:", err);
        });
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl mb-4">Uploaded Documents</h2>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Passport #</th>
            <th className="border px-2 py-1">Reference #</th>
            <th className="border px-2 py-1">File</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{doc.name}</td>
              <td className="border px-2 py-1">{doc.passportNumber}</td>
              <td className="border px-2 py-1">{doc.referenceNumber}</td>
              <td className="border px-2 py-1">
                <a
                  href={`https://verifypassword-avy6.vercel.app/uploads/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View File
                </a>
              </td>
              <td className="border px-2 py-1">
                <button
                  className="bg-danger border-0 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(doc._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
