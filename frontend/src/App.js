import {BrowserRouter, Route} from "react-router-dom";
import React,{useEffect} from 'react';
import LoginPage from "./components/LoginPage";
import ProfileCard from "./components/ProfileCard";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";

import authReducer from "./store/reducers/authReducer";
import './styles/styles.scss';
import logger from "./store/middleware/logger";

const store = createStore(authReducer,applyMiddleware(logger))

function App() {



  return (
      <Provider store={store}>
          <div className="App">
              <BrowserRouter>
                  <Route exact path={'/'} component={LoginPage}/>
                  <Route path={'/profile'} component={ProfileCard}/>
              </BrowserRouter>
          </div>
      </Provider>

  );
}

export default App;
