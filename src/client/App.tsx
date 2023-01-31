import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';

import Mainbar from './container/Mainbar';
import MainContent from './container/MainContent';
import LoginPage from './container/LoginPage';
import Signup from './components/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainbar />}>
          <Route index element={<LoginPage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Home" element={<MainContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.querySelector('#root'));
