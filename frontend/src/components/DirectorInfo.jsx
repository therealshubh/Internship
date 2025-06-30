import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function DirectorInfo() {
  return (
    <section className="py-0 bg-white" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <Row className="justify-content-center m-0">
        <Col xs={12} className="p-0">
          <Card className="shadow-sm w-100" style={{ borderRadius: 0 }}>
            <Card.Body>
              <Row className="align-items-center">
                {/* Profile Image */}
                <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
                  <img
                    src="/images/director.jpg"
                    alt="Director Shri Subodh Kumar Nayak"
                    style={{
                      width: 110,
                      height: 110,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto'
                    }}
                  />
                </Col>
                {/* Director Info */}
                <Col xs={12} md={9}>
                  <h3 className="mb-1">Shri Subodh Kumar Nayak</h3>
                  <div style={{ color: '#4e73df', fontWeight: 500 }}>
                    <Link to="/director" className="director-link" style={{ color: '#4e73df', textDecoration: 'underline', cursor: 'pointer' }}>
                      Director, DRDO PXE
                    </Link>
                  </div>
                  <div className="mb-2" style={{ fontSize: '1rem', color: '#6c757d' }}>
                    Proof & Experimental Establishment (PXE)
                  </div>
                  <div className="mb-3">
                    <Badge bg="primary" className="me-2 mb-1">B.Tech Mechanical (VSSUT, Burla)</Badge>
                    <Badge bg="success" className="me-2 mb-1">M.Tech Aerospace (IIT Mumbai)</Badge>
                    <Badge bg="warning" text="dark" className="mb-1">Warhead Systems Expert</Badge>
                  </div>
                  <div style={{ fontSize: '1rem', color: '#333' }}>
                    Shri Subodh Kumar Nayak, Scientist 'G', has been Director of PXE since January 19, 2024. An alumnus of VSSUT Burla (B.Tech, Mechanical Engineering, 1991) and IIT Mumbai (M.Tech, Aerospace Engineering), he joined DRDO in 1994 and has decades of hands-on experience in the manufacturing and development of warhead systems. He has contributed to several key projects in various DRDO capacities and now leads PXE, Chandipur.
                  </div>
                  <div className="mt-4" style={{ fontSize: '0.95rem' }}>
                    <strong>Contact Information</strong><br />
                    Proof & Experimental Establishment (PXE)<br />
                    Chandipur, Balasore - 756025, Odisha<br />
                    Phone: 06782-273105<br />
                    Email: <a href="mailto:director.pxe@gov.in">director.pxe@gov.in</a>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default DirectorInfo;
