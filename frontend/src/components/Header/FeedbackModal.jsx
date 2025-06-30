import React, { useState } from 'react';

function FeedbackModal({ onClose }) {
  const [form, setForm] = useState({
    name: '', contact: '', email: '', type: '', subject: '', message: '', captcha: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Feedback submitted!');
    onClose();
    setForm({ name: '', contact: '', email: '', type: '', subject: '', message: '', captcha: '' });
  };
  const handleReset = () => setForm({ name: '', contact: '', email: '', type: '', subject: '', message: '', captcha: '' });

  return (
    <div className="pxe-header__modal-overlay" onClick={onClose}>
      <form className="pxe-header__modal-form" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#23408e', marginBottom: 4 }}>
            Complaint / Suggestion Form
          </div>
          <div style={{ fontSize: 13, color: '#555' }}>
            Complete the below form to send us your complaint and suggestion. Fields marked with <span style={{ color: 'red' }}>*</span> are required.
          </div>
        </div>
        {/* ...form fields as before (see previous code for details)... */}
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <label>Name <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="name" value={form.name} required onChange={handleChange} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Contact Number <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="contact" value={form.contact} required onChange={handleChange} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <label>Email ID <span style={{ color: 'red' }}>*</span></label>
            <input type="email" name="email" value={form.email} required onChange={handleChange} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Type <span style={{ color: 'red' }}>*</span></label>
            <select name="type" value={form.type} required onChange={handleChange}>
              <option value="">Select Type</option>
              <option value="complaint">Complaint</option>
              <option value="suggestion">Suggestion</option>
              <option value="enquiry">Enquiry</option>
            </select>
          </div>
        </div>
        <div>
          <label>Subject <span style={{ color: 'red' }}>*</span></label>
          <select name="subject" value={form.subject} required onChange={handleChange}>
            <option value="">Select Subject</option>
            <option value="website">Website</option>
            <option value="service">Service</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Message <span style={{ color: 'red' }}>*</span></label>
          <textarea name="message" value={form.message} required onChange={handleChange} rows={3} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <label>Enter the Characters <span style={{ color: 'red' }}>*</span></label>
            <input type="text" name="captcha" value={form.captcha} required onChange={handleChange} />
            <div style={{ fontSize: 12, color: '#007bff', marginTop: 2, cursor: 'pointer' }}>Get new captcha!</div>
          </div>
          <div>
            <img src="https://dummyimage.com/100x32/cccccc/333&text=G2MB1A" alt="captcha" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 10 }}>
          <button type="submit">SUBMIT</button>
          <button type="button" onClick={handleReset}>RESET</button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackModal;