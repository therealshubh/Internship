import React from 'react';
import { useTranslation } from 'react-i18next';

function NoticeCard({ type, title, date, description }) {
  const { t } = useTranslation();
  return (
    <div className="card notice-card mb-3">
      <div className="card-header">{t(type)}</div>
      <div className="card-body">
        <h5 className="card-title">{t(title)}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <p className="card-text">{t(description)}</p>
      </div>
    </div>
  );
}

export default NoticeCard;