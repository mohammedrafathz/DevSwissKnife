/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { Button, Container, Label } from 'reactstrap';
import ModalImage from 'react-modal-image';
import styles from './CheatSheets.module.css';

const CheatSheets = () => {
  const [rPort, setRPort] = useState('');

  return (
    <>
      <Container>
        <Label className={styles.header}>CHEATSHEETS</Label><br /><br />
        <Container>
          <div className={styles.div}>
            <ModalImage
              small='./images/cssCheatSheet.png'
              large='./images/cssCheatSheet.png'
              alt='HTML'
              hideDownload={true}
              hideZoom={true}
              className={styles.modalImage}
            />
            <ModalImage
              small='./images/javascriptCheatSheet.png'
              large='./images/javascriptCheatSheet.png'
              alt='HTML'
              hideDownload={true}
              hideZoom={true}
              className={styles.modalImage}
            />
          </div>
          <div className={styles.image}>
            <ModalImage
              small='./images/htmlCheatSheet.webp'
              large='./images/htmlCheatSheet.webp'
              alt='HTML'
              hideDownload={true}
              hideZoom={true}
              className={styles.modalImage}
            />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CheatSheets;
