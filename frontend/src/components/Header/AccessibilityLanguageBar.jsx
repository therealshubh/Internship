import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const THEMES = {
  salmon: { // brown theme
    '--body-bg': 'brown',
    '--body-fg': '#fff',
    '--header-bg': 'brown',
    '--header-fg': '#fff'
  },
  standard: { // blue theme
    '--body-bg': '#f7f7f7',
    '--body-fg': '#222',
    '--header-bg': '#23408e',
    '--header-fg': '#fff'
  },
  highContrast: {
    '--body-bg': '#000',
    '--body-fg': '#fff',
    '--header-bg': '#000',
    '--header-fg': '#fff'
  }
};

const THEME_LABELS = {
  salmon: 'Brown theme',
  standard: 'Blue theme',
  highContrast: 'High contrast view'
};

function AccessibilityLanguageBar() {
  const { t, i18n } = useTranslation();
  const [fontSizePercent, setFontSizePercent] = useState(100); // Use percentage for font size
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'standard');
  const [announce, setAnnounce] = useState('');
  const announceRef = useRef();
  const [brownHover, setBrownHover] = useState(false);

  // Apply theme variables to the document
  useEffect(() => {
    const themeVars = THEMES[theme];
    for (const key in themeVars) {
      document.documentElement.style.setProperty(key, themeVars[key]);
    }
    localStorage.setItem('theme', theme);
    setAnnounce(THEME_LABELS[theme]);
    // Clear announcement after a bit
    const timeout = setTimeout(() => setAnnounce(''), 2000);
    return () => clearTimeout(timeout);
  }, [theme]);

  // Font size logic using percentage
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSizePercent}%`;
  }, [fontSizePercent]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Keyboard accessibility for theme blocks
  const handleThemeKeyDown = (e, themeName) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setTheme(themeName);
    }
  };

  return (
    <div className="pxe-header__access">
      {/* Live region for screen readers */}
      <div
        ref={announceRef}
        aria-live="polite"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        {announce}
      </div>
      <div className="pxe-header__access-left">
        <span>{t('Screen Reader Access')}</span>

        {/* Font size controls */}
        <button
          className="font-size-btn-circle"
          onClick={() => setFontSizePercent(percent => Math.max(percent - 10, 50))}
          type="button"
          aria-label={t('Decrease font size')}
        >
          A-
        </button>
        <button
          className="font-size-btn-circle"
          onClick={() => setFontSizePercent(100)}
          type="button"
          aria-label={t('Reset font size')}
        >
          A
        </button>
        <button
          className="font-size-btn-circle"
          onClick={() => setFontSizePercent(percent => Math.min(percent + 10, 200))}
          type="button"
          aria-label={t('Increase font size')}
        >
          A+
        </button>

        {/* Theme color blocks with tooltips and accessibility */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div
            className={`pxe-header__color-sample brown${theme === 'salmon' ? ' selected' : ''}`}
            style={{ background: 'brown', border: theme === 'salmon' ? '2px solid #23408e' : '1px solid #ccc' }}
            title={brownHover ? t('Salmon Color') : t('Brown theme')}
            tabIndex={0}
            role="button"
            aria-label={brownHover ? t('Salmon Color') : t('Brown theme')}
            aria-pressed={theme === 'salmon'}
            onClick={() => setTheme('salmon')}
            onKeyDown={e => handleThemeKeyDown(e, 'salmon')}
            onMouseEnter={() => setBrownHover(true)}
            onMouseLeave={() => setBrownHover(false)}
          />
          <div
            className={`pxe-header__color-sample blue${theme === 'standard' ? ' selected' : ''}`}
            style={{ background: 'blue', border: theme === 'standard' ? '2px solid #23408e' : '1px solid #ccc' }}
            title={t('Blue theme')}
            tabIndex={0}
            role="button"
            aria-label={t('Blue theme')}
            aria-pressed={theme === 'standard'}
            onClick={() => setTheme('standard')}
            onKeyDown={e => handleThemeKeyDown(e, 'standard')}
          />
          <div
            className={`pxe-header__color-sample black${theme === 'highContrast' ? ' selected' : ''}`}
            style={{ background: '#000', border: theme === 'highContrast' ? '2px solid #23408e' : '1px solid #ccc' }}
            title={t('High contrast view')}
            tabIndex={0}
            role="button"
            aria-label={t('High contrast view')}
            aria-pressed={theme === 'highContrast'}
            onClick={() => setTheme('highContrast')}
            onKeyDown={e => handleThemeKeyDown(e, 'highContrast')}
          />
        </div>

        <button className="pxe-header__utility-link" onClick={() => changeLanguage('en')} type="button">
          {t('English')}
        </button>
        <button className="pxe-header__utility-link" onClick={() => changeLanguage('hi')} type="button">
          {t('Hindi')}
        </button>
      </div>
    </div>
  );
}

export default AccessibilityLanguageBar;