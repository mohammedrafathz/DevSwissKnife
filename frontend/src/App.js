import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import Notification from 'react-notify-bootstrap';

import './App.css';
// import CompareJson from './components/compare-json/CompareJson.js';
import InternetSpeedTest from './components/internet-speed-test/InternetSpeedTest.js';
import TemporaryEmail from './components/temporary-email/TemporaryEmail.js';
import TokenGenerator from './components/token-generator/TokenGenerator.js';
import RandomPort from './components/random-port/RandomPort.js';
import CheatSheets from './components/cheat-sheets/CheatSheets.js';
import FileSharing from './components/file-sharing/FileSharing';
import Home from './components/home/Home';
import JsonKeySorter from './components/json-key-sorter/JsonKeySorter';
import Navigation from './components/navigation/Navigation';
import QRCode from './components/qr-code-generator/QRCodeGenerator';
import Sidebar from './components/sidebar/Sidebar';
import URLEncodeDecode from './components/url-encode-decode/URLEncodeDecode';
import { MENU_MAP } from './utils/constants';
import URLParser from './components/url-parser/URLParser';
import Whiteboard from './components/whiteboard/Whiteboard';
import Footer from './components/footer/Footer';
import NotFound from './components/not-found/NotFound';
import HashGenerator from './components/hash-generator/HashGenerator';
import TextStatistics from './components/text-statistics/TextStatistics';

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState(false);

  return (
    <div className='wrapper d-flex align-items-stretch'>
      <Sidebar themeMode={themeMode} isOpen={sidebar} toggleSidebar={setSidebar} />
      <div className='content'>
        <Navigation
          changeMode={setThemeMode}
          toggleSidebar={() => setSidebar(s => !s)} />
        <Container>
          <Routes>
            <Route path={MENU_MAP.home.path} element={<Home />} />
            <Route path={MENU_MAP.internetSpeedTest.path} element={<InternetSpeedTest />} />
            <Route path={MENU_MAP.temporaryEmail.path} element={<TemporaryEmail />} />
            <Route path={MENU_MAP.cheatSheets.path} element={<CheatSheets />} />
            <Route path={MENU_MAP.jsonKeySorter.path} element={<JsonKeySorter />} />
            <Route path={MENU_MAP.qrCodeGenerator.path} element={<QRCode />} />
            <Route path={MENU_MAP.fileSharing.path} element={<FileSharing />} />
            {/* <Route path={MENU_MAP.compareJSON.path} element={<CompareJson />} /> */}
            <Route path={MENU_MAP.hashGenerator.path} element={<HashGenerator />} />
            <Route path={MENU_MAP.tokenGenerator.path} element={<TokenGenerator />} />
            <Route path={MENU_MAP.randomPort.path} element={<RandomPort />} />
            <Route path={MENU_MAP.urlEncoder.path} element={<URLEncodeDecode themeMode={themeMode} />} />
            <Route path={MENU_MAP.urlParser.path} element={<URLParser themeMode={themeMode} />} />
            <Route path={MENU_MAP.whiteboard.path} element={<Whiteboard themeMode={themeMode} />} />
            <Route path={MENU_MAP.textStatistics.path} element={<TextStatistics />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
        <Notification />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default App;
