import React from "react";
import "./Category.css";

export default function Category() {
  return (
    <div className="mt-5 pt-5">
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src="./media/images/smily.jpg"
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(0, 0, 50, 0.6), rgba(0, 0, 0, 0.8))",
            backdropFilter: "blur(5px)",
            zIndex: -1,
          }}
        />

        {/* Content on Top */}
        <div className="position-relative text-white text-center px-3 py-5">
          <h5 className="mt-5">WHAT WE DO</h5>
          <h3 className="mx-auto" style={{ maxWidth: "500px" }}>
            We Provide Experts Create Great Value For Visa Categories
          </h3>

          {/* Cards */}
          <div className="container mt-5  ">
            <div className="row g-4 justify-content-center">
              {[
                {
                  icon: "fa-user-gear",
                  title: "Skilled Worker Visa",
                  desc:
                    "For a person whose jobs require a minimum work experience that are not temporary and seasonal.",
                },
                {
                  icon: "fa-credit-card",
                  title: "Business Immigration Visa",
                  desc:
                    "People who want to invest in, or start businesses abroad. Expected to support the development.",
                },
                {
                  icon: "fa-id-card-clip",
                  title: "Green Card",
                  desc:
                    "We consult for the permanent residents visa documents issued to immigrants under the immigration.",
                },
                {
                  icon: "fa-users",
                  title: "Student Visa",
                  desc:
                    "We guide our client for the perception & better career opportunities for the students, Overseas services.",
                },
                {
                  icon: "fa-plane-departure",
                  title: "Visitor Visa",
                  desc:
                    "Visas for people who want to travel to and enter as a visitor for up to 6 months. We stick the visitor visa.",
                },
                {
                  icon: "fa-users-gear",
                  title: "Skilled Worker Visa",
                  desc:
                    "For a person whose jobs require a minimum work experience that are not temporary and seasonal.",
                },
              ].map((item, idx) => (
                <div className="col-12 col-md-6 col-lg-4 " key={idx}>
                  <div className="card bg-transparent dotted-border text-white h-100 text-center p-3">
                    <div className="card-body">
                      <i className={`fa-solid ${item.icon} text-primary fs-3`}></i>
                      <h5 className="card-title mt-3 fs-4">{item.title}</h5>
                      <p className="card-text mt-4 mb-3">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
