import React, { useState } from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './GlobalStyles/style.scss';
import './i18n';
import { SignUp } from './Pages/SignUp';
import { authRoutes, routes } from './routes';

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
                <Switch>
                  {routes.map((route) => (
                    <Route
                      exact={route.exact}
                      path={route.path}
                      key={route.name}
                      render={() => <route.component />}
                    />
                  ))}
                  <Redirect to="/" />
                </Switch>
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
        <Switch>
          {authRoutes.map((route) => (
            <Route path={route.path} key={route.name} render={() => <route.component />} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
