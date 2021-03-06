import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './GlobalStyles/style.scss';
import './i18n';
import { routes } from './routes';
import { BreadCrumbs } from './Components/BreadCrumbs';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileByAccessToken } from './Store/ducks/auth/authReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileByAccessToken());
  }, [dispatch]);

  return (
    <Router>
      <div className="app theme-light">
        <Switch>
          {routes.map(({ path, name, Component, isAuth = false }, key) => (
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
                if (isAuth) {
                  return <Component {...props} />;
                }

                return (
                  <>
                    <Header />
                    <div className="container">
                      <Component {...props} />
                      {<BreadCrumbs crumbs={crumbs} />}
                    </div>
                    <Footer />
                  </>
                );
              }}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
