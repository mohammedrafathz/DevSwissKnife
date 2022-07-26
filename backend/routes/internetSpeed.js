var express = require('express');
var router = express.Router();
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

export async function getDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log(speed);
  return speed;
}

/* GET internet speed test. */
router.get('/getSpeed', function(req, res, next) {
  const testResults =  getDownloadSpeed();
  res.send('respond with a resource', testResults);
});

module.exports = router;