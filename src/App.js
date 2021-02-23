import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';

import AddTechModal from './components/tech/AddTechModal';
import TechListModal from './components/tech/TechListModal';

import AddBtn from './components/layout/AddBtn';
import SearchBar from './components/layout/SearchBar';

const App = () => {
  useEffect(() => {
    // initialises materialize javascript
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
