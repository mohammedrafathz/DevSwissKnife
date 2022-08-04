import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container} from 'reactstrap';
// import Notification from 'react-notify-bootstrap';

import './App.css';
import CompareJson from './components/compare-json/CompareJson.js';
import InternetSpeedTest from './components/internet-speed-test/InternetSpeedTest.js';
import TemporaryEmail from './components/temporary-email/TemporaryEmail.js';
// import FileSharing from './components/file-sharing/FileSharing.js';
import Home from './components/home/Home.js';
// import JsonKeySorter from './components/json-key-sorter/JsonKeySorter.js';
import Navigation from './components/navigation/Navigation.js';
// import QRCode from './components/qr-code-generator/QRCodeGenerator.js';
import Sidebar from './components/sidebar/Sidebar.js';
// import URLEncodeDecode from './components/url-encode-decode/URLEncodeDecode.js';
import {MENU_MAP} from './utils/constants.js';
import URLParser from './components/url-parser/URLParser.js';
// import Whiteboard from './components/whiteboard/Whiteboard.js';
import TokenGenerator from './components/token-generator/TokenGenerator.js';

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState(false);

  return (
    <div className={`home ${themeMode ? 'bg-dark dark' : 'bg-light'}`}>
      <Navigation
        changeMode={setThemeMode}
        toggleSidebar={() => setSidebar(s => !s)} />
      <Sidebar themeMode={themeMode} isOpen={sidebar} toggleSidebar={setSidebar} />
      <Container>
        <Routes>
          <Route path={MENU_MAP.home.path} element={<Home />} />
          <Route path={MENU_MAP.internetSpeedTest.path} element={<InternetSpeedTest />} />
          <Route path={MENU_MAP.temporaryEmail.path} element={<TemporaryEmail />} />
          {/* <Route path={MENU_MAP.jsonKeySorter.path} element={<JsonKeySorter />} /> */}
          {/* <Route path={MENU_MAP.qrCodeGenerator.path} element={<QRCode />} /> */}
          {/* <Route path={MENU_MAP.fileSharing.path} element={<FileSharing />} /> */}
          <Route path={MENU_MAP.compareJSON.path} element={<CompareJson />} />
          <Route path={MENU_MAP.tokenGenerator.path} element={<TokenGenerator />} />
          {/* <Route path={MENU_MAP.urlEncoder.path} element={<URLEncodeDecode themeMode={themeMode} />} /> */}
          <Route path={MENU_MAP.urlParser.path} element={<URLParser themeMode={themeMode} />} />
          {/* <Route path={MENU_MAP.whiteboard.path} element={<Whiteboard themeMode={themeMode} />} /> */}
        </Routes>
      </Container>
      {/* <Notification /> */}
    </div>
  );
};

export default App;
