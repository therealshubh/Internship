const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventDate: String,
  eventInfo: String,
  imageUrl: String,
});

module.exports = mongoose.model('Event', eventSchema);
