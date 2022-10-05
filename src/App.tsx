import React from 'react';
import {Routes, Route} from 'react-router'

import Siginin from './pages/Signin';
import Login from './pages/Login';
import Tips from './pages/Tips';
import Main from './pages/Main';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signin' element={<Siginin/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/tips' element={<Tips/>}/>
      </Routes>
    </div>
  );
}

export default App;
