import React, { Component, Fragment } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Forgot from './Auth/Password/Forgot'
import Reset from './Auth/Password/Reset'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'
import Navbar from './Navbar'
import { AuthProvider } from './AuthContext'
import ProtectedRoute from './ProtectedRoute'
import UnprotectedRoute from './UnprotectedRoute'

class App extends Component {
  render(){
    return(
      <AuthProvider>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Airlines} />
          <Route exact path="/airlines/:slug" component={Airline} />
          <UnprotectedRoute path="/login" component={Login}/>
          <UnprotectedRoute exact path="/register" component={Register} />
          <UnprotectedRoute path="/forgot-password" component={Forgot}/>
          <UnprotectedRoute path="/reset-password" component={Reset}/>
        </Switch>
      </AuthProvider>
    )
  }
}

export default App
