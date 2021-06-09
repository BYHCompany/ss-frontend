import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import './i18n';
import { SignIn } from './Pages/SignIn';
import { MainPage } from './Pages/MainPage';
import { AdvertPage } from './Pages/AdvertPage';

function App() {
  const [isLogging, setLogging] = useState(false);

  if (!isLogging) {
    return (
      <Router>
        <div className="app theme-light">
          {!isLogging && (
            <>
              <Header />
              <div className="container">
                <AdvertPage />
              </div>
              <Footer />
            </>
          )}
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="app theme-light">
        <SignIn />
      </div>
    </Router>
  );
}

export default App;
