import React from 'react';
import {Routes, Route} from 'react-router'

import Siginin from './pages/Signin';
import Login from './pages/Login';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/' element={<Siginin/>}/>
      </Routes>
    </div>
  );
}

export default App;
