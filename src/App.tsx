import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import { Paginator } from './Components/Paginator';

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
          <Paginator allPagesCount={20} currentPage={2} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
