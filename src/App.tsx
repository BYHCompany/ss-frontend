import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import { CookiePopup } from './Components/CookiePopup';

function App() {
  return (
    <Router>
      <div className="app theme-light">
        <Header />
        <div className="container">
          <CookiePopup />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
