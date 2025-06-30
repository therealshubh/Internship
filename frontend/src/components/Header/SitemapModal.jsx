import React from 'react';

// SitemapTree component can be defined here or imported if large
function SitemapTree() {
  // ...the tree structure from previous code...
  return (
    <div>
      {/* ...your sitemap tree JSX... */}
      <ul>
        <li>Home</li>
        <li>DRDO</li>
        {/* ...etc... */}
      </ul>
    </div>
  );
}

function SitemapModal({ onClose }) {
  return (
    <div className="pxe-header__modal-overlay" onClick={onClose}>
      <div className="pxe-header__modal-sitemap" onClick={e => e.stopPropagation()}>
        <div className="pxe-header__modal-title">Sitemap</div>
        <SitemapTree />
        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <button className="pxe-header__modal-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default SitemapModal;