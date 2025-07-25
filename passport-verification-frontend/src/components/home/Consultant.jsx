import React from "react";

export default function Consultant() {
  return (
    <div className="mt-5 pt-5 flex flex-wrap gap-3">
      <div className="card border-0 z-n1 position-relative shadow ps-5 bg-white lg-w-50 h-100">
        <h5 className="text-danger">About Consultant</h5>
        <p className="fs-4">
          Your Trusted Expert <b>Consultancy Partner.</b>{" "}
        </p>
        <div className="flex ps-3">
          <div><i class="fa-solid fa-receipt text-primary fs-3 mt-2"></i></div>
          <div className="ps-3">
            <h3>Accurate Guidance</h3>
            <p>
              Skilled professionals are always ready to provide reliable
              services to our clients!
            </p>
          </div>
        </div>
        <div className="flex ps-3">
          <div><i class="fa-solid fa-chalkboard-user text-primary fs-3 mt-2"></i></div>
          <div className="ps-3">
            <h3>Our Presence</h3>
            <p>
              Branches are situated in major metro cities and overseas, always
              open for you!
            </p>
          </div>
        </div>
      </div>
      <div><img src="./media/images/StudentVisa.jpg" style={{ width: "500px" }}/></div>
      <div className="flex flex-column mt-5 gap-2">
            <img src="./media/images/passport.jpg" style={{ width: "280px" }}/>
            <img src="./media/images/tourist.jpg" style={{ width: "280px" }}/>
      </div>
    </div>
  );
}
