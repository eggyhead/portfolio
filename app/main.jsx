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
    <h1>TESTING MAIN</h1>
   
  </div>

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path='*' component={NotFound}/>
  </Router>,
  document.getElementById('main')
)
