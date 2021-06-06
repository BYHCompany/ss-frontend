import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import { Paginator } from 'byh-components';

function App() {
  return (
    <Router>
      <div className="app theme-light">
        <Header />
        <div className="container">
          <Paginator allPagesCount={200} currentPage={66} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
