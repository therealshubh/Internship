import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavbarMenu from './components/NavbarMenu';
import NoticeBoard from './components/NoticeBoard';
import VisionMission from './components/VisionMission';
import DirectorInfo from './components/DirectorInfo';
import Footer from './components/Footer';
import ImgSlider from './components/ImgSlider';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Gallery from './components/Gallery';
import User from './components/User';

// Navbar pages
const AimsPage = () => <div className="container py-5"><h2>AIMS Page</h2></div>;
const DronaPage = () => <div className="container py-5"><h2>DRONA Page</h2></div>;
const PemsPage = () => <div className="container py-5"><h2>PeMS Page</h2></div>;
const HappyBirthdayPage = () => <div className="container py-5"><h2>Happy Birthday Page</h2></div>;

// AlphabetNav pages
const AboutUs = () => <div className="container py-5"><h2>About Us</h2></div>;
const Blog = () => <div className="container py-5"><h2>Blog</h2></div>;
const Contact = () => <div className="container py-5"><h2>Contact</h2></div>;
const Dashboard = () => <div className="container py-5"><h2>Dashboard</h2></div>;
const Events = () => <div className="container py-5"><h2>Events</h2></div>;
const FAQ = () => <div className="container py-5"><h2>FAQ</h2></div>;
const Help = () => <div className="container py-5"><h2>Help</h2></div>;
const Information = () => <div className="container py-5"><h2>Information</h2></div>;
const Jobs = () => <div className="container py-5"><h2>Jobs</h2></div>;

function App() {
  return (
    <Router>
      <Header />
      <NavbarMenu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="gallery"><ImgSlider /></div>
              <div id="notice-board"><NoticeBoard /></div>
              {/* If you have AlphabetNav or Calendar, add them here with unique IDs */}
              {/* <div id="alphabet-nav"><AlphabetNav /></div> */}
              {/* <div id="calendar"><Calendar /></div> */}
              <div id="vision-mission"><VisionMission /></div>
              <div id="director-info"><DirectorInfo /></div>
            </>
          }
        />
        <Route path="/aims" element={<AimsPage />} />
        <Route path="/drona" element={<DronaPage />} />
        <Route path="/pems" element={<PemsPage />} />
        <Route path="/happy-birthday" element={<HappyBirthdayPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/images" element={<ImgSlider />} />
        <Route path="/help" element={<Help />} />
        <Route path="/information" element={<Information />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/user" element={<User />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;