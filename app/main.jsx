'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'

import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import firebase from 'APP/fire'

const App = ({children}) =>
  <div>
    <Navbar />
    <h1>Welcome!</h1>
    <p>My name is Erika and I'm a fullstack developer with a passion for clean code and creative design. Check out these links or send me an email!</p>
   
  </div>

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path='*' component={NotFound}/>
  </Router>,
  document.getElementById('main')
)
