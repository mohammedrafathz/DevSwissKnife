import React, {useCallback, useEffect, useState} from 'react';
import {
  Card, CardBody, Col, FormGroup, Input,
  Label,
  ListGroup, ListGroupItem, Row, Spinner
} from 'reactstrap';
import {useDropzone} from 'react-dropzone';
import io from 'socket.io-client';

import styles from './FileSharing.module.css';
import {generateUniqueId} from '../../utils/commonFunction';
import {CheckAll} from 'react-bootstrap-icons';
import {basePath, birdNames} from '../../utils/constants';
// import serverApi from '../../api/serverApi';



const FileSharing = () => {
  // const [multipleUploadProgress, setMultipleUploadProgress] = useState(0);
  // const [tooltip, setTooltip] = useState(false);
  const [socket, setSocket] = useState(null);
  const birdName = birdNames[Math.floor(Math.random() * 200) + 1];
  const [sessionId, setSessionId] = useState(`${birdName}-${generateUniqueId(4)}`);
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
    maxFiles: 5,
    maxSize: 5242880
  });

  const uploadFiles = useCallback(uploadFiles => {
    socket.emit('fileUpload', uploadFiles);
  }, [socket]);

  useEffect(() => {
    const newSocket = io(basePath);
    setSocket(newSocket);

    if (sessionId) {
      newSocket.emit('reteriveFiles', sessionId);
    }

    newSocket.on('disconnect', () => {
      console.log('reconnecting');
      newSocket.io.reconnect();
    });

    return () => newSocket.close();
  }, [sessionId, setSocket]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const filesArr = [];

      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i];
        const newFile = {
          folder: sessionId,
          filename: file.name,
          file,
          uploaded: false
        };

        filesArr.push(newFile);

      }

      uploadFiles(filesArr);

      setFiles(f => [...f, ...filesArr]);
    }
  }, [acceptedFiles, sessionId, uploadFiles]);

  useEffect(() => {
    if (socket) {
      socket.on('success', data => {
        if (files.length > 0) {
          const uploadedFiles = files.map(f => data.includes(f.filename) ? {...f, uploaded: true} : f);

          setFiles([...uploadedFiles]);
        }
      });

      socket.on('savedFiles', data => {
        setFiles(data);
      });
    }
  }, [files, socket]);


  return (
    <>
      <div className='text-center'>
        <h1>Quick File Sharing</h1>
        <p>Share your files across multiple devices. Use the Session ID to locate and download files</p>
        <small className='text-muted'>{'** We don\'t save your files **'}</small>
        <br />
      </div>
      <br />
      <Row className='justify-content-md-center'>
        <Col sm='2'></Col>
        <Col sm="6">
          <FormGroup row>
            <Label
              for="sessionID"
              sm={3}
            >
              Session Id:
            </Label>
            <Col sm={9}>
              <Input id='sessionID' placeholder='Session ID' value={sessionId} onChange={({target}) => setSessionId(target.value)} />
            </Col>
          </FormGroup>
          <br />
        </Col>
        <Col sm='2'></Col>
        <Col sm="6">
          <Card>
            <CardBody>
              <div className={styles.dropzone} {...getRootProps()}>
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag & drop some files here, or click to select files</p>
                }
              </div>
            </CardBody>
          </Card>
          <br />
        </Col>
        <Col sm='12'></Col>
        <Col sm="4">
          <ListGroup>
            {files.map((a, i) =>
              <ListGroupItem key={i} className='d-flex justify-content-between align-items-start'>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <a href={`${basePath}/api/filesharing?sessionId=${sessionId}&filename=${a.file.name}`}> {a.file.name}
                    </a>
                  </div>
                  {a.file.size / 1024} Kb | {a.file.type}
                </div>
                {a.uploaded ?
                  <CheckAll size='32' color='green' /> :
                  <Spinner size="sm" className='mt-2' />}
              </ListGroupItem>
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default FileSharing;