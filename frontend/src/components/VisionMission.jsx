import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VisionMission = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Vision & Mission</h2>
      <div className="row g-4">
        {/* Vision */}
        <div className="col-md-6">
          <div className="p-4 rounded border shadow-sm" style={{ backgroundColor: '#fff7f2' }}>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning-subtle rounded-circle p-2 me-2">
                <i className="bi bi-eye-fill fs-4 text-warning"></i>
              </div>
              <h4 className="mb-0 fw-bold">Our Vision</h4>
            </div>
            <p>
              To establish India as a global leader in defence technology through cutting-edge research, innovation,
              and development of advanced defence systems that ensure national security and contribute to global peace
              and stability.
            </p>
            <ul className="text-danger fw-semibold">
              <li>Technological Supremacy</li>
              <li>National Security Excellence</li>
              <li>Global Defence Leadership</li>
            </ul>
          </div>
        </div>

        {/* Mission */}
        <div className="col-md-6">
          <div className="p-4 rounded border shadow-sm" style={{ backgroundColor: '#f4f8ff' }}>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary-subtle rounded-circle p-2 me-2">
                <i className="bi bi-bullseye fs-4 text-primary"></i>
              </div>
              <h4 className="mb-0 fw-bold">Our Mission</h4>
            </div>
            <p>
              To provide technological solutions for the defence services through research and development in critical
              defence technologies, fostering innovation, and building strategic partnerships to strengthen India's
              defence capabilities and achieve self-reliance in defence systems.
            </p>
            <ul className="text-primary fw-semibold">
              <li>Defence Innovation</li>
              <li>Strategic Partnerships</li>
              <li>Self-Reliant Defence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;