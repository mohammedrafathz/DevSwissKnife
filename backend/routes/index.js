const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/filesharing', (req, res) => {
  res.download(path.resolve(`./uploads/${req.query.sessionId}/${req.query.filename}`))
});

module.exports = router;
