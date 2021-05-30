import React from 'react';
import { profileInfoData } from './assets/profileInfoData';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { ProfileInfo } from './Components/ProfileInfo';
import './GlobalStyles/style.scss';

function App() {
  return (
    <div className="app theme-light">
      <Header />
      <div className="container">
        <ProfileInfo profileInfoData={profileInfoData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
