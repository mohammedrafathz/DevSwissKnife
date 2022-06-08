import React, {useState} from 'react';
import {List} from 'react-bootstrap-icons';
// import {Route, Routes} from 'react-router-dom';
import {Button} from 'reactstrap';

import './App.css';
import JsonKeySorter from './components/json-key-sorter/JsonKeySorter';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className='home'>
      <Sidebar isOpen={sidebar} toggleSidebar={setSidebar} />
      <Button color='light' className="navbar-toggler" onClick={() => setSidebar(s => !s)}>
        <List />
      </Button>
      <JsonKeySorter />
      {/* <Routes>
      </Routes> */}
    </div>
  );
};

export default App;
