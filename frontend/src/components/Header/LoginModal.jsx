import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginModal({ onClose }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onClose();
    setUserId('');
    setPassword('');
    navigate('/dashboard');
  };

  return (
    <div className="pxe-header__modal-overlay" onClick={onClose}>
      <form className="pxe-header__modal-form" onClick={e => e.stopPropagation()} onSubmit={handleLogin}>
        <h4 style={{ color: '#23408e', marginBottom: 10, textAlign: 'center' }}>Login</h4>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <button type="button" onClick={onClose} className="pxe-header__modal-close">Cancel</button>
      </form>
    </div>
  );
}

export default LoginModal;