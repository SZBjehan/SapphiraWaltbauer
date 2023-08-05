// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Routes, Route, Switch, Link, Navigate} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ColdImmersion from './pages/ColdImmersion';
import React, { useState } from 'react';


export default function App() {

  const [value, setValue] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        {/* <UserContext.Provider value={{value,setValue}}> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/cold-immersion" element={<ColdImmersion />} />

          {/* <Route path="/booking/:recordID" element={<Booking />} /> */}

          <Route path="*" element={<Navigate to="/"/>} />
        {/* </UserContext.Provider>  */}
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);







// export default App;
