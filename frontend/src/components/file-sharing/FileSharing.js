import React, {useState} from 'react';
import {
  Card, CardBody, Col, Input,
  ListGroup, ListGroupItem, Row
} from 'reactstrap';
import {useDropzone} from 'react-dropzone';

import styles from './FileSharing.module.css';
import {makeUniqueId} from '../../utils/commonFunction';
import {CheckAll} from 'react-bootstrap-icons';
// import serverApi from '../../api/serverApi';

const FileSharing = () => {
  // const [multipleUploadProgress, setMultipleUploadProgress] = useState(0);
  // const [tooltip, setTooltip] = useState(false);
  const [sessionId] = useState(makeUniqueId(20));
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone();
  console.log(acceptedFiles);
  // multi file dropzone
  // 5 files allowed at a time
  // console.log(multipleUploadProgress);
  // const uploadFiles = async () => {

  //   try {
  //     const fd = new FormData();
  //     const config = {
  //       headers: {
  //         name: 'Accept',
  //         value: 'application/json'
  //       },
  //       onUploadProgress: progressEvent => {
  //         const {loaded, total} = progressEvent;
  //         const percent = Math.floor((loaded * 100) / total);

  //         setMultipleUploadProgress(percent === 100 ? 100 : percent / acceptedFiles.length);

  //         // setMyFiles(f => f.map(a => a.id === id ? {...a, progress: percent} : a));
  //       },
  //       // cancelToken: s.token
  //     };
  //     const {data} = await serverApi('/filesharing', fd, config);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // };

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
        <Col sm='4'></Col>
        <Col sm="4">
          <Input placeholder='Session ID' value={sessionId} />
          <br />
        </Col>
        <Col sm='4'></Col>
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
            {acceptedFiles.map((a, i) =>
              <ListGroupItem key={i} className='d-flex justify-content-between align-items-start'>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <a href="#"> {a.name}
                    </a>
                  </div>
                  {a.size / 1024} Kb | {a.type}
                </div>
                <CheckAll size='32' color='green' />

              </ListGroupItem>
            )}
          </ListGroup>
          {/* <Button onClick={uploadFiles}>upload</Button> */}
        </Col>
      </Row>
    </>
  );
};

export default FileSharing;