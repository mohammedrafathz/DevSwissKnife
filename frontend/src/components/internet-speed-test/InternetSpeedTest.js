/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import {
  Label,
} from 'reactstrap';


const InternetSpeedTest = () => {
  const [imgLink, setImgLink] = useState('https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png');
  const [downloadSize, setDownloadSize] = useState(5616998);
  const [speedInMbps, setSpeedInMbps] = useState(0);
  const [speedInKbps, setSpeedInKbps] = useState(0);
  const [i, setI] = useState(0);

  var downloadImgSrc = new Image();
  var endTime;

  downloadImgSrc.onload = function () {
    endTime = new Date().getTime();
    displaySpeed();
  };


  var startTime = new Date().getTime();

  downloadImgSrc.src = imgLink;

  // if (i === 0) {
  var displaySpeed = function () {
    let timeDuration = (endTime - startTime) / 1000;
    let loadedBits = downloadSize * 8;
    console.log('interenet sopepd', timeDuration, loadedBits, endTime, startTime, i);

    let bps = (loadedBits / timeDuration).toFixed(2);
    console.log('bps', bps);

    setSpeedInKbps((bps / 1024).toFixed(2));
    setSpeedInMbps((speedInKbps / 1024).toFixed(2));
    // setI(i => i + 1);
    if (timeDuration > 0) {
      alert('Your internet connection speed is: \n'
        + bps + ' bps\n' + speedInKbps
        + ' kbps\n' + speedInMbps + ' Mbps\n');
    }

  };
  // }


  //TODO auto detect json from clipboard and show as placeholder
  return (
    <>
      <Container>
        <h1 className='text-center'>INTERNET SPEED TEST</h1>
        <br />
        <br />
        <br />
        <div className='text-center'>
          <Label>Download in Mbps : {speedInMbps}</Label><br />
          <Label>Download in Kbps: {speedInKbps}</Label><br />
          <Button >
            START
          </Button>
        </div>
      </Container>
    </>
  );
}
  ;

export default InternetSpeedTest;
