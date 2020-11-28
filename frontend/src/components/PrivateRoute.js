import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


const PrivateRoute =({isAuthenticated,component:Component,...props})=>{

    console.log(isAuthenticated, props,Component)

    return (
        <Route path={props.path} render={(props)=>{
           return isAuthenticated ? (<Component {...props}/>):(<Redirect to='/'/>)
        }}/>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated:!!state.token
    }
}

export default connect(mapStateToProps)(PrivateRoute)
