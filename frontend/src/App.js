import {BrowserRouter,Route} from "react-router-dom";
import React from 'react';
import LoginPage from "./components/LoginPage";
import ProfileCard from "./components/ProfileCard";

import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path={'/'} component={LoginPage}/>
          <Route path={'/profile'} component={ProfileCard}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
