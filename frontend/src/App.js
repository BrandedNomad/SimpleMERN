import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';
import LoginPage from "./components/LoginPage";
import ProfileCard from "./components/ProfileCard";
import {connect} from 'react-redux'

import './styles/styles.scss';


function App({isAuthenticated,...props}) {

 console.log("first",isAuthenticated)



  return (
      <div className="App">
          <BrowserRouter>
              <Route exact path={'/'} component={LoginPage}/>
              <Route path={'/profile'} render={(props)=>{
                  console.log("inside:",props)
                  return isAuthenticated ? (<ProfileCard {...props}/>):(<LoginPage {...props}/>)
              }}/>
          </BrowserRouter>
      </div>

  );
}


function mapStateToProps(state){

    console.log("insideMapStateToProps: ",state)
    return {
        isAuthenticated:!!state.token
    }
}


export default connect(mapStateToProps)(App);
