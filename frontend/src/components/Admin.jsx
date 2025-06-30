import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Admin.css';
import { useNavigate } from 'react-router-dom'; // ✅ For redirecting

const Admin = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventInfo, setEventInfo] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate(); // ✅ Hook for navigation

   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months start from 0
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // ✅ Save the actual image file
      setImagePreview(URL.createObjectURL(file)); // ✅ For preview
    }
  };

  const handleUpload = async () => {
    if (!eventName || !eventDate || !eventInfo || !image) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('eventDate', eventDate);
    formData.append('eventInfo', eventInfo);
    formData.append('image', image); // ✅ This must match Multer's field name

    try {
      await axios.post('http://localhost:5000/api/events', formData);
      alert("Event uploaded successfully!");
      navigate('/gallery'); // ✅ Redirect to gallery
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    }
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-light p-4" style={{ width: '30%', borderRight: '1px solid #ccc' }}>
        <h4 className="mb-4">Admin</h4>
        <form className="d-flex flex-column gap-3" onSubmit={e => e.preventDefault()}>
          <label>Event Name</label>
          <input type="text" className="form-control" placeholder="Enter Name" value={eventName} onChange={e => setEventName(e.target.value)} />

          <label>Event Date</label>
          <input type="date" className="form-control" value={eventDate} onChange={e => setEventDate(e.target.value)} />

          <label>Information</label>
          <input type="text" className="form-control" placeholder="Enter details" style={{ height: '100px' }} value={eventInfo} onChange={e => setEventInfo(e.target.value)} />

          <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />

          <button type="button" className="btn btn-secondary mt-2" onClick={() => setShowPreview(true)}>Show Preview</button>
          <button type="button" className="btn btn-primary mt-3" onClick={handleUpload}>Upload</button>
        </form>
      </div>

      {/* Preview */}
      <div className="p-4" style={{ width: '70%' }}>
        <div style={{ marginLeft: '400px' }}>
          <h2>Preview</h2>
        </div>
        <div style={{ marginLeft: '400px' }}>
          {showPreview && (
            <>
              <h4>Event Name:</h4>
              <p>{eventName || <span style={{ color: '#aaa' }}>No event name</span>}</p>
              <h4>Event Date:</h4>
              <p>{eventDate ? formatDate(eventDate) : <span style={{ color: '#aaa' }}>No event date</span>}</p>
              <h4>Information:</h4>
              <p>{eventInfo || <span style={{ color: '#aaa' }}>No information</span>}</p>
              <h4>Event Photo:</h4>
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="img-fluid rounded" style={{ maxHeight: '150px' }} />
              ) : (
                <div style={{ color: '#aaa', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc', borderRadius: '8px' }}>
                  No image selected
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
