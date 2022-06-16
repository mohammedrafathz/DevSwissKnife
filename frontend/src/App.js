import React, { useState } from 'react';
import { List } from 'react-bootstrap-icons';
// import {Route, Routes} from 'react-router-dom';
import { Button } from 'reactstrap';

import './App.css';
// import JsonKeySorter from './components/json-key-sorter/JsonKeySorter.js';
import Sidebar from './components/sidebar/Sidebar.js';
import InternetSpeedTest from './components/internet-speed-test/InternetSpeedTest.js';
// import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className='home'>
      <Sidebar isOpen={sidebar} toggleSidebar={setSidebar} />
      <Button color='light' className="navbar-toggler" onClick={() => setSidebar(s => !s)}>
        <List />
      </Button>
      {/* <Routes>
        <Route path="/json-key-sorter" component={JsonKeySorter} />
        <Route path="/internet-speed-test" component={InternetSpeedTest} />
      </Routes> */}
      {/* <JsonKeySorter /> */}
      <InternetSpeedTest />
      {/* <Routes>
      </Routes> */}
    </div>
  );
};

export default App;
