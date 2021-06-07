import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles/style.scss';
import './i18n';
import { AuthTemplate } from './Templates/AuthTemplate';
import { SignIn } from './Pages/SignIn';

function App() {
  const [isLogging, setLogging] = useState(true);

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
        <SignIn />
      </div>
    </Router>
  );
}

export default App;
