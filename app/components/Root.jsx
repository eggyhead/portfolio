import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import firebase from 'APP/fire'
import history from '../history'

import {NotFound, Navbar, Home, Profile, Projects } from '../components'

const Root = () => {
  return (
    <div>
        <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                </Switch>
    </div>
  )
}

export default Root;