require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

console.log("Using this MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB CONNECTED SUCCESSFULLY");
    console.log("Database name:", mongoose.connection.db.databaseName);
  })
  .catch(err => {
    console.log("CONNECTION FAILED:");
    console.log(err.message);
    console.log("Full error:", err);
  });

// Simple test endpoint
app.post('/api/test-save', async (req, res) => {
  try {
    const Test = mongoose.model('Test', new mongoose.Schema({ name: String, time: Date }));
    const doc = new Test({ name: "debug-test", time: new Date() });
    await doc.save();
    res.json({ ok: true, id: doc._id });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});