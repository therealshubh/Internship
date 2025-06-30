const express = require('express');
const multer = require('multer');
const Event = require('../models/Event');
const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { eventName, eventDate, eventInfo } = req.body;
  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  const event = new Event({ eventName, eventDate, eventInfo, imageUrl });

  try {
    await event.save();
    res.status(201).json({ message: 'Event uploaded successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

module.exports = router;