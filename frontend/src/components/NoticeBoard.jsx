import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoticeCard from './NoticeCard';
import AlphabetNav from './AlphabetNav';
import CalendarBox from './CalendarBox';

const notices = [
  {
    type: 'Important',
    title: 'Security Protocol Update',
    date: 'Dec 15, 2024',
    description: 'New security protocols have been implemented. All personnel must update their access credentials by December 20, 2024.',
    color: 'danger'
  },
  {
    type: 'Meeting',
    title: 'Quarterly Technical Review',
    date: 'Dec 17, 2024',
    description: 'All project teams are required to attend the quarterly technical review at 10:00 AM in Conference Hall A.',
    color: 'primary'
  },
  {
    type: 'Training',
    title: 'Advanced Systems Training',
    date: 'Jan 5, 2025',
    description: 'Registration now open for Advanced Systems Training. Program for all technical staff.',
    color: 'success'
  }
];

function NoticeBoard() {
  return (
    <section className="bg-light py-4">
      <Container fluid>
        <Row className="align-items-stretch justify-content-center">
          {/* Left: Alphabet Navigation */}
          <Col xs={12} md={3} lg={3} className="mb-4 mb-md-0">
            <AlphabetNav />
          </Col>
          {/* Center: Notice Cards (narrower now) */}
          <Col xs={12} md={5} lg={6} className="mb-4 mb-md-0">
            <h4 className="mb-4 text-danger">Official Notice Board</h4>
            <Row xs={1} md={1} className="g-4">
              {notices.map((notice, idx) => (
                <Col key={idx}>
                  <NoticeCard {...notice} />
                </Col>
              ))}
            </Row>
          </Col>
          {/* Right: Calendar */}
          <Col xs={12} md={4} lg={3}>
            <CalendarBox />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NoticeBoard;