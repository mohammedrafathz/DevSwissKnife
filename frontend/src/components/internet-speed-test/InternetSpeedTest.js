/* eslint-disable no-unused-vars */
import React, {useCallback, useState} from 'react';
import {Button, Container, Label} from 'reactstrap';


import classes from './InternetSpeedTest.module.css';

const imageAddr = 'https://res.cloudinary.com/dhznnpvlm/image/upload/v1597167466/123_lhrqhr.jpg';
const downloadSize = 4995374; //bytes

const InternetSpeedTest = () => {
  const [speedInMbps, setSpeedInMbps] = useState(0);
  const [loading, setLoading] = useState(false);

  const measureConnectionSpeed = useCallback(() => {
    // console.log("detecting");
    let startTime, endTime;
    const download = new Image();

    download.onload = () => {
      endTime = (new Date()).getTime();
      showResults();
      setLoading(false);
    };

    download.onerror = (err, msg) => {
      setLoading(false);
      // setError('Connection Error.');
    };

    startTime = (new Date()).getTime();
    const cacheBuster = '?nnn=' + startTime;
    download.src = imageAddr + cacheBuster;

    const showResults = () => {
      const duration = (endTime - startTime) / 1000;
      const bitsLoaded = downloadSize * 8;
      const speedBps = (bitsLoaded / duration).toFixed(2);
      const speedKbps = (speedBps / 1024).toFixed(2);
      const speedMbps = (speedKbps / 1024).toFixed(2);

      setSpeedInMbps(speedMbps);
    };
  }, []);

  const initSpeedDetection = useCallback(() => {
    setLoading(true);
    // window.setTimeout(measureConnectionSpeed, 1);
    measureConnectionSpeed();
  }, [measureConnectionSpeed]);

  return (
    <>
      <Container>
        <h1 className='text-center'>INTERNET SPEED TEST</h1>
        <br />
        <br />
        <div className='text-center'>
          {loading && <div className={classes.load2}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
          </div>}
          <Label style={{fontWeight:'bold', fontSize:22}}>Your Internet Speed is :</Label><br />
          <Label style={{fontWeight:'bold', fontSize:52}}>{speedInMbps} MB/s</Label><br /><br/>
          <Button onClick={initSpeedDetection} style={{backgroundColor:'green'}}>
            START
          </Button>
        </div>
      </Container>
    </>
  );
}
  ;

export default InternetSpeedTest;
