import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container} from 'reactstrap';
import Notification from 'react-notify-bootstrap';

import './App.css';
import CompareJson from './components/compare-json/CompareJson';
import FileSharing from './components/file-sharing/FileSharing';
import Home from './components/home/Home';
import JsonKeySorter from './components/json-key-sorter/JsonKeySorter';
import Navigation from './components/navigation/Navigation';
import QRCode from './components/qr-code-generator/QRCodeGenerator';
import Sidebar from './components/sidebar/Sidebar';
import URLEncodeDecode from './components/url-encode-decode/URLEncodeDecode';
import {MENU_MAP} from './utils/constants';
import URLParser from './components/url-parser/URLParser';

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
          <Route path={MENU_MAP.jsonKeySorter.path} element={<JsonKeySorter />} />
          <Route path={MENU_MAP.qrCodeGenerator.path} element={<QRCode />} />
          <Route path={MENU_MAP.fileSharing.path} element={<FileSharing />} />
          <Route path={MENU_MAP.compareJSON.path} element={<CompareJson />} />
          <Route path={MENU_MAP.urlEncoder.path} element={<URLEncodeDecode themeMode={themeMode} />} />
          <Route path={MENU_MAP.urlParser.path} element={<URLParser themeMode={themeMode} />} />
        </Routes>
      </Container>
      <Notification />
    </div>
  );
};

export default App;
