import React from 'react';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './GlobalStyles/style.scss';
import './i18n';
import { authRoutes, routes } from './routes';
import { BreadCrumbs } from './Components/BreadCrumbs';

function App() {
  const [isLogging, setLogging] = React.useState(false);

  if (!isLogging) {
    return (
      <Router>
        <div className="app theme-light">
          {!isLogging && (
            <>
              <Header />
              <div className="container">
                <Switch>
                  {routes.map(({ path, name, Component }, key) => (
                    <Route
                      exact
                      path={path}
                      key={key}
                      render={(props) => {
                        const crumbs = routes
                          .filter(({ path }) => props.match.path.includes(path))
                          .map(({ path, ...rest }) => ({
                            path: Object.keys(props.match.params).length
                              ? Object.keys(props.match.params).reduce(
                                  (path, param) =>
                                    // @ts-ignore
                                    path.replace(`:${param}`, props.match.params[param]),
                                  path,
                                )
                              : path,
                            ...rest,
                          }));
                        return (
                          <div>
                            <Component {...props} />
                            <BreadCrumbs crumbs={crumbs} />
                          </div>
                        );
                      }}
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
            <Route path={route.path} key={route.name} render={() => <route.Component />} />
          ))}
          <Redirect to={'/signIn'} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
