import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/base/Footer';
import Header from './components/base/Header';
import Home from './components/base/Home';
import Login from './components/login/Login';
import { userStorage } from './userContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <userStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </userStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
