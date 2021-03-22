import React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {routes} from './commons/routesConst';
import {configureStore} from "./store/store";

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <div id={'root'}>
                <BrowserRouter>
                    <div className="app">
                        {Object.keys(routes()).map((element, index) => {
                            const RouterComponent = routes()[element].component;
                            return <Route key={index} exact path={element} component={() => <RouterComponent/>}/>
                        })}
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;