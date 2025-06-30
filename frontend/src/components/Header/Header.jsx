import React, { useState } from 'react';
import headerImg from '../../assets/header.png';
import { useNavigate } from 'react-router-dom';
import '../../styles/Header.css';
import FeedbackModal from './FeedbackModal';
import SitemapModal from './SitemapModal';
import LoginModal from './LoginModal';
import AccessibilityLanguageBar from './AccessibilityLanguageBar';
import { useTranslation } from 'react-i18next';

const sectionMap = [
  { id: 'gallery', keywords: ['gallery', 'photos', 'slider'] },
  { id: 'notice-board', keywords: ['notice', 'notices', 'announcement', 'board'] },
  { id: 'vision-mission', keywords: ['vision', 'mission', 'about'] },
  { id: 'director-info', keywords: ['director', 'profile', 'head'] },
  // Add more as needed
];

function Header() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSitemap, setShowSitemap] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBackToPXE = () => {
    navigate('/');
  };

  const handleHeaderClick = () => {
    navigate('/'); // Redirects to the main page ("/")
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = search.trim().toLowerCase();
    if (!query) return;
    // Find section by keyword
    const found = sectionMap.find(section =>
      section.keywords.some(keyword => query.includes(keyword))
    );
    if (found) {
      const el = document.getElementById(found.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert('Section not found!');
    }
    setSearch('');
  };

  return (
    <header className="pxe-header">
      {/* Top Utility Bar */}
      <div className="pxe-header__utility-bar">
        <div style={{ flex: 1 }} />
        <div className="pxe-header__utility-links">
          <button className="pxe-header__utility-link" onClick={handleBackToPXE} type="button">
            {t('Back to PXE website')}
          </button>
          <span>|</span>
          <button className="pxe-header__utility-link" onClick={() => setShowFeedback(true)} type="button">
            {t('Feedback')}
          </button>
          <span>|</span>
          <button className="pxe-header__utility-link" onClick={() => setShowSitemap(true)} type="button">
            {t('Sitemap')}
          </button>
          <span>|</span>
          <button className="pxe-header__login-btn" onClick={() => setShowLogin(true)} type="button">
            {t('Login')}
          </button>
        </div>
      </div>

      {/* Main Header: Image Left, Text Right (Clickable) */}
      <div
        className="pxe-header__main"
        style={{ cursor: 'pointer' }}
        onClick={handleHeaderClick}
        title="Go to main page"
      >
        <img src={headerImg} alt="PXE DRDO Header" className="pxe-header__logo" />
        <div className="pxe-header__title">
          {t('Proof & Experimental Establishment (PXE)')}
        </div>
      </div>

      {/* Accessibility, Language, and the ONLY Search bar */}
      <div className="pxe-header__access" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <AccessibilityLanguageBar />
        <form
          className="pxe-header__search"
          onSubmit={handleSearch}
          style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}
        >
          <input
            type="text"
            placeholder="Search section"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search section"
            style={{
              padding: '4px 8px',
              borderRadius: 4,
              border: '1px solid #ccc',
              marginRight: 4,
              flex: '1 1 auto'
            }}
          />
          <button
            type="submit"
            title="Search"
            style={{
              padding: '4px 8px',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            🔍
          </button>
        </form>
      </div>

      {/* Modals */}
      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
      {showSitemap && <SitemapModal onClose={() => setShowSitemap(false)} />}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </header>
  );
}

export default Header;
