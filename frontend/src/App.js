import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container} from 'reactstrap';

import './App.css';
import FileSharing from './components/file-sharing/FileSharing';
import Home from './components/home/Home';
import JsonKeySorter from './components/json-key-sorter/JsonKeySorter';
import Navigation from './components/navigation/Navigation';
import QRCode from './components/qr-code-generator/QRCodeGenerator';
import Sidebar from './components/sidebar/Sidebar';
import {MENU_MAP} from './utils/constants';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='home'>
      <Navigation toggleSidebar={() => setSidebar(s => !s)} />
      <Sidebar isOpen={sidebar} toggleSidebar={setSidebar} />
      <Container>
        <Routes>
          <Route path={MENU_MAP.home.path} element={<Home />} />
          <Route path={MENU_MAP.jsonKeySorter.path} element={<JsonKeySorter />} />
          <Route path={MENU_MAP.qrCodeGenerator.path} element={<QRCode />} />
          <Route path={MENU_MAP.fileSharing.path} element={<FileSharing />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
