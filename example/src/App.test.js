import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { UserContext } from 'react-cookies-users-provider';
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('accesses the user context successfully', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  const userCtx = useContext(UserContext)
  userCtx.setCookie('user', { name: 'user-1', email: 'user-1@example.com' })
  expect(userCtx.cookies.user).toBe(true)
})
