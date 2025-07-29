//routes/upload.js
const express = require('express');
const multer = require('multer');
const { storage } = require('../helpers/uploads');
const router = express.Router();

 const upload = multer({ storage });

router.post('/admin/upload', upload.array('files',10 ), (req, res) => {
  res.json({ url: req.file.path });
});

module.exports = router;
