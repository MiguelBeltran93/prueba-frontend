import React, { useEffect } from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from './commons/routesConst';
import { configureStore } from './store/store';
import { useTranslation } from 'react-i18next';

const store = configureStore();

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    changeLanguage('es-CO');
  }, []);

  return (
    <Provider store={store}>
      <div id={'root'}>
        <BrowserRouter>
          <div className="app">
            {Object.keys(routes()).map((element, index) => {
              const RouterComponent = routes()[element].component;
              return (
                <Route
                  key={index}
                  exact
                  path={element}
                  component={() => <RouterComponent />}
                />
              );
            })}
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
