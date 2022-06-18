const express = require('express');
const {upload} = require("../config/multerConfig")
const router = express.Router();

/* GET home page. */
router.post('/filesharing', upload.array('sharedfiles', 5), (req, res, next) => {
  res.render('index', {title: 'Express'});
});

module.exports = router;
