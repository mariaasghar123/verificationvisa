import React from 'react';

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#001f3f" }} className="text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center text-md-start">
            <h2>About Us</h2>
            <div
              style={{
                height: "2px",
                backgroundColor: "red",
                width: "50px",
                marginBottom: "10px",
                marginInline: "auto",
                marginLeft: "0"
              }}
            ></div>

            <p>
                The Most Eminent Visas and Immigration Consultant service provider
                in major metros and overseas with reliability since 1987. We are
                committed to provide reliable client support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
