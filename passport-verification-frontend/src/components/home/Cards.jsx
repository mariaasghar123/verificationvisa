import React from "react";

export default function Cards() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center text-center g-4">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <i className="fa-solid fa-globe text-danger fs-3"></i>
              <h5 className="card-title text-secondary mt-3">Immigration Program</h5>
              <p className="card-text mt-5 mb-5">
                To help foreign nationals find out if they may be eligible to apply as immigrants, visitors, and students abroad.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <i className="fa-solid fa-id-card text-danger fs-3"></i>
              <h5 className="card-title text-secondary mt-3">Visa Permit</h5>
              <p className="card-text mt-5 mb-5">
                Many people prioritize going abroad to pursue their careers. We guide them to better career opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <i className="fa-solid fa-location-dot text-danger fs-3"></i>
              <h5 className="card-title text-secondary mt-3">Appointment</h5>
              <p className="card-text mt-5 mb-5">
                You can directly contact us through the given details in the contact section. Our team will reach out to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
