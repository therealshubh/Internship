import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const alphabets = [
  { letter: 'A', path: '/about-us' },
  { letter: 'B', path: '/blog' },
  { letter: 'C', path: '/contact' },
  { letter: 'D', path: '/dashboard' },
  { letter: 'E', path: '/events' },
  { letter: 'F', path: '/faq' },
  { letter: 'G', path: '/gallery' },
  { letter: 'H', path: '/help' },
  { letter: 'I', path: '/information' },
  { letter: 'J', path: '/jobs' }
];

function AlphabetNav() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {alphabets.map(({ letter, path }) => (
        <Link
          to={path}
          key={letter}
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '10px 0',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            background: '#f8f9fa',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textDecoration: 'none',
            color: '#212529'
          }}
        >
          {letter}
        </Link>
      ))}
    </div>
  );
}

export default AlphabetNav;