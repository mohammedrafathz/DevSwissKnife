import React from 'react';
import { Button, Container } from 'reactstrap';

const InternetSpeedTest = () => 
//TODO auto detect json from clipboard and show as placeholder
  (
    <>
      <Container>
        <h1 className='text-center'>INTERNET SPEED TEST</h1>
        <br />
        <br />
        <br />
        <div className='text-center'>
          <Button>
                        START
          </Button>
        </div>
      </Container>
    </>
  )
;

export default InternetSpeedTest;
