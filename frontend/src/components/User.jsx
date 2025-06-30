import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/User.css';

const User = () => {
  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const nameTerm = searchName.trim().toLowerCase();
    const dateTerm = searchDate.trim();

    const results = events.filter(event => {
      const matchesName = nameTerm
        ? event.eventName.toLowerCase().includes(nameTerm)
        : false;

      const matchesDate = dateTerm
        ? event.eventDate.startsWith(dateTerm)
        : false;

      return matchesName || matchesDate;
    });

    setFilteredEvents(results);
    setHasSearched(true);
  };

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
      alert("Failed to load the image for download. The source may not allow cross-origin requests.");
    };
  };

  return (
    <div className="d-flex user-container">
      {/* Sidebar */}
      <div className="user-sidebar" style={{ width: '30%', minWidth: '300px', maxWidth: '400px' }}>
        <h4 className="mb-4">Search Events</h4>
        <form onSubmit={handleSearch} className="search-form">
          {/* Search by Name */}
          <div className="input-container">
            <label className="form-label">By Event Name</label>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Enter event name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            {searchName && (
              <button
                type="button"
                onClick={() => setSearchName('')}
                className="clear-button"
                title="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Search by Date */}
          <div className="input-container">
            <label className="form-label">By Event Date</label>
            <input
              type="date"
              className="form-control search-input"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            {searchDate && (
              <button
                type="button"
                onClick={() => setSearchDate('')}
                className="clear-button"
                title="Clear date"
              >
                ×
              </button>
            )}
          </div>

          <button type="submit" className="btn search-btn">Search</button>
        </form>
      </div>

      {/* Results Panel */}
      <div className="results-panel" style={{ width: '70%' }}>
        <h3 className="mb-4">Matching Results</h3>

        {!hasSearched ? (
          <p className="message">Enter name or date to search for events.</p>
        ) : filteredEvents.length === 0 ? (
          <p className="no-results">No matching events found.</p>
        ) : (
          <div className="results-grid">
            {filteredEvents.map(event => (
              <div
                key={event._id}
                className="event-card"
                onClick={() => handleCardClick(event)}
                style={{ cursor: 'pointer' }}
              >
                <img src={event.imageUrl} alt={event.eventName} />
                <div className="event-card-body">
                  <h5 className="event-card-title">{event.eventName}</h5>
                  <p className="event-card-text">
                    <span className="event-card-date">Date:</span> {formatDate(event.eventDate)}
                  </p>
                  <p className="event-card-text">{event.eventInfo}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {showModal && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>{selectedEvent.eventName}</h4>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.eventName}
                className="modal-image"
              />
              <div className="modal-info">
                <p><strong>Date:</strong> {formatDate(selectedEvent.eventDate)}</p>
                <p><strong>Information:</strong> {selectedEvent.eventInfo}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={downloadImage}>
                Download Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
