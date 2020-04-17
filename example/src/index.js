import React from 'react'
import ReactDOM from 'react-dom'
import { UsersProvider } from 'react-cookies-users-provider'
import App from './App'

ReactDOM.render(
  <UsersProvider>
    <App />
  </UsersProvider>, 
  document.getElementById('root'))
