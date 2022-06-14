import React from 'react';
import './styles/css/App.css';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import useWindowWidth from './hooks/useWindowWidth';

function App() {
  const width = useWindowWidth();

  return (
    <>
      {width}
      <Routes>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
