import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import { BigAdvertPreview } from './Components/BigAdvertPreview';
import { carExample } from './assets/bigAdvertPreview';
import { CookiePopup } from './Components/CookiePopup/CookiePopup/CookiePopup';

function App() {
  return (
    <Router>
      <div className="app theme-light">
        <Header />
        <div className="container">
          {/* <BigAdvertPreview
            car={carExample}
            src="https://i.ytimg.com/vi/Xa8DwaXVcS0/maxresdefault.jpg"
          /> */}
          <CookiePopup />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
