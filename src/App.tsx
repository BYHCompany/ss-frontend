import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import './GlobalStyles/style.scss';
function App() {
  return (
    <div className="app theme-light">
      <Header />
      <div className="container"></div>
      <Footer />
    </div>
  );
}

export default App;
