import React, {useState} from 'react';
import {
  Button,
  Card, CardBody, Col, Input,
  InputGroup, InputGroupText, Row
} from 'reactstrap';
import QRCode from 'react-qr-code';
import {CloudArrowDown, PrinterFill} from 'react-bootstrap-icons';

const QRCodeGenerator = () => {
  const [bgColor, setBgColor] = useState('#335c70');
  const [fgColor, setFgColor] = useState('#ffffff');
  const [text, setText] = useState('https://github.com/mohammedrafathz/DevSwissKnife');

  const downloadCode = async () => {
    const canvas = document.getElementById('cvs');
    const ctx = canvas.getContext('2d');
    const data = (new XMLSerializer()).serializeToString(document.getElementById('qrCode'));

    const DOMURL = window.URL || window.webkitURL || window;

    const img = new Image();
    const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    const url = DOMURL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);

      const imgURI = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

      const a = document.createElement('a');
      const evt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
      });
      a.setAttribute('download', 'qrCode.png');
      a.setAttribute('href', imgURI);
      a.setAttribute('target', '_blank');

      a.dispatchEvent(evt);
    };

    img.src = url;
  };

  const printQRCode = () => {
    const canvas = document.getElementById('cvs');
    const ctx = canvas.getContext('2d');
    const data = (new XMLSerializer()).serializeToString(document.getElementById('qrCode'));

    const DOMURL = window.URL || window.webkitURL || window;

    const img = new Image();
    const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    const url = DOMURL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);

      const dataUrl = document.getElementById('cvs').toDataURL();
      const windowContent = `<style>@page{size:auto; margin: 0mm;}</style>
                            <div style="display:flex;height:100%;justify-content: center;align-items: center;">
                            <img style="width:500px;height:500px" src="${dataUrl}">
                            <div>`;
      const printWin = window.open('', '', 'width=300,height=300');
      printWin.document.open();
      printWin.document.write(windowContent);
      printWin.document.addEventListener('load', function () {
        printWin.focus();
        printWin.document.close();
        printWin.print();
      }, true);
    };

    img.src = url;
  };

  return (
    <>
      <div className='text-center'>
        <h1>QR Code Generator</h1>
        <small>Generate QR codes for a URL or text</small>
      </div>
      <canvas id='cvs' height='300' width='300' style={{display: 'none'}}></canvas>
      <br />
      <Row >
        <Col sm={8} className='m-0-auto'>
          <Card>
            <CardBody>
              <InputGroup className='mb-3'>
                <InputGroupText>Text: </InputGroupText >
                <Input
                  type='url'
                  bsSize='lg'
                  value={text}
                  onChange={({target}) => setText(target.value)}
                />
              </InputGroup>
              <InputGroup className='mb-3'>
                <InputGroupText>Foreground Color: </InputGroupText >
                <div className='form-control form-control-lg'>
                  <Row>
                    <Col sm={2}>
                      <input
                        type='color'
                        className='h-100'
                        value={fgColor}
                        onChange={({target}) => setFgColor(target.value)}
                      />
                    </Col>
                    <Col>
                      <span className='px-3'>
                        {fgColor}
                      </span>
                    </Col>
                  </Row>
                </div>
              </InputGroup>
              <InputGroup className='mb-3'>
                <InputGroupText>Background Color: </InputGroupText >
                <div className='form-control form-control-lg'>
                  <Row>
                    <Col sm={2}>
                      <input
                        type='color'
                        className='h-100'
                        value={bgColor}
                        onChange={({target}) => setBgColor(target.value)}
                      />
                    </Col>
                    <Col>
                      <span className='px-3'>
                        {bgColor}
                      </span>
                    </Col>
                  </Row>
                </div>
              </InputGroup>
              <div className='text-center'>
                <Card className='w-50 m-0-auto'>
                  <CardBody className='rounded' style={{backgroundColor: bgColor}}>
                    <QRCode id='qrCode' bgColor={bgColor} fgColor={fgColor} value={text} />
                  </CardBody>
                </Card>
                <br />
                <Button color='secondary' outline className='me-2' onClick={downloadCode} >
                  <CloudArrowDown size={24} />
                  {' '} Download QR Code
                </Button>
                <Button color='primary' outline onClick={printQRCode} >
                  <PrinterFill size={24} />
                  {' '} Print
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default QRCodeGenerator;