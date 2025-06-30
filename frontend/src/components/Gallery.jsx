import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const downloadImage = () => {
    if (!selectedEvent) return;

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = selectedEvent.imageUrl;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);

      canvas.toBlob(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedEvent.eventName}_${formatDate(selectedEvent.eventDate)}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, "image/jpeg");
    };

    image.onerror = () => {
      alert("Failed to load image for download.");
    };
  };

  return (
    <div className="container-fluid mt-4 px-3">
      <h2 className="text-center mb-4">Gallery</h2>

      <div className="row gx-2">
        {events.length === 0 ? (
          <div className="col-12 text-center">
            <p>No events uploaded yet.</p>
          </div>
        ) : (
          events.map(event => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              key={event._id}
              onClick={() => handleCardClick(event)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card h-100 shadow-sm" style={{ borderRadius: '10px' }}>
                <img
                  src={event.imageUrl}
                  alt={event.eventName}
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                />
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">{event.eventName}</h6>
                  <p className="card-text mb-1"><small><strong>Date:</strong> {formatDate(event.eventDate)}</small></p>
                  <p className="card-text"><small>{event.eventInfo}</small></p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {showModal && selectedEvent && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: '10px',
              padding: '20px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            <h3 style={{ marginBottom: '10px' }}>{selectedEvent.eventName}</h3>

            <img
              src={selectedEvent.imageUrl}
              alt={selectedEvent.eventName}
              style={{
                width: '100%',
                borderRadius: '10px',
                marginBottom: '15px'
              }}
            />

            <p><strong>Date:</strong> {formatDate(selectedEvent.eventDate)}</p>
            <p><strong>Info:</strong> {selectedEvent.eventInfo}</p>

            <div style={{ marginTop: '20px' }}>
              <button
                onClick={downloadImage}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  marginRight: '10px',
                  cursor: 'pointer'
                }}
              >
                Download Photo
              </button>

              <button
                onClick={closeModal}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
