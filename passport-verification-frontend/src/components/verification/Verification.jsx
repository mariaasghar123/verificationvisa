import React, { useState } from "react";

export default function Verify() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/verify-document",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ referenceNumber, passportNumber }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResult(data);
        setError("");
      } else {
        const res = await response.json();
        setResult(null);
        setError(res.message || "No document found.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div>
      <div className="w-100 h-50 bg-body-secondary mx-auto ps-5 mt-5 pt-5">
        <h2 className="underline">Enquire Verification:</h2>
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter Reference Number</label>
            <input
              type="text"
              className="form-control"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Passport Number</label>
            <input
              type="text"
              className="form-control"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn text-white mb-5"
            style={{ backgroundColor: "#001f3f" }}
          >
            verification
          </button>
        </form>

        {result && (
          <div className="alert alert-success">
            <h5>✅ Document Found:</h5>
            <p>
              <strong>Name:</strong> {result.name}
            </p>
            <p>
              <strong>Reference:</strong> {result.referenceNumber}
            </p>
            <p>
              <strong>Passport:</strong> {result.passportNumber}
            </p>
            <p>
              <strong>Uploaded File:</strong>
            </p>
            <img
              src={`http://localhost:5000/uploads/${result.file}`}
              alt="Document"
              width="300"
            />
            {/* Add other details as needed */}
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}
