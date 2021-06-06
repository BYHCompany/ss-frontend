import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import { MainPage } from './Pages/MainPage';

function App() {
  return (
    <Router>
      <div className="app theme-light">
        <Header />
        <div className="container">
          <MainPage />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
