import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import './i18n';
import { Email } from './Pages/SignUp/Email/Email';
import { SignUp } from './Pages/SignUp';

function App() {
  const [isLogging, setLogging] = useState(false);

  if (!isLogging) {
    return (
      <Router>
        <div className="app theme-light">
          {!isLogging && (
            <>
              <Header />
              <div className="container"></div>
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
        <SignUp />
      </div>
    </Router>
  );
}

export default App;
