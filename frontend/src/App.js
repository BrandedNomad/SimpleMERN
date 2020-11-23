import {BrowserRouter,Route} from "react-router-dom";
import React from 'react';
import LoginPage from "./components/LoginPage";

import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path={'/'} component={LoginPage}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
