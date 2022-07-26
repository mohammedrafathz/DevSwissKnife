import React from 'react';
import { Button, Container } from 'reactstrap';
import {
  Label,
} from 'reactstrap';


const TemporaryEmail = () => {
  //TODO auto detect json from clipboard and show as placeholder
  (
    <>
      <Container>
        <h1 className='text-center'>TEMPORARY EMAIL</h1>
        <br />
        <br />
        <br />
        <div className='text-center'>
          <Label>Email:</Label><br /><br />
          <Button onClick={{}}>
                        GENERATE
          </Button>
        </div>
      </Container>
    </>
  );
};

export default TemporaryEmail;
