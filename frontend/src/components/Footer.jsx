import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <span>{t('© 2025 PXE, DRDO. All rights reserved.')}</span>
      </div>
    </footer>
  );
}

export default Footer;