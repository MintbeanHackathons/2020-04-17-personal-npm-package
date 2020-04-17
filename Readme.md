# react-cookies-users-provider

> Provides the logged in user after saving them in a cookie

[![NPM](https://img.shields.io/npm/v/react-cookies-users-provider.svg)](https://www.npmjs.com/package/react-cookies-users-provider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cookies-users-provider
```

## Usage

Import the component and wrap it around the components that where you want the user context to be accessible:
```jsx
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { UsersProvider } from 'react-cookies-users-provider'
import App from './App'

ReactDOM.render(
  <UsersProvider>
    <App />
  </UsersProvider>, 
  document.getElementById('root'))
```

Get the context and set a cookie, it will be accessible in the component and in your browser's cookies:

```jsx
// App.js
import React, { useContext } from "react";
import { UserContext } from "react-cookies-users-provider";

const App = () => {
  const userCtx = useContext(UserContext);


  return (
    <div onLoad={userCtx.setCookie("user", { name: "user-1", email: "user-1@example.com" })}>
      {userCtx ? (
        <>
          <h3>{userCtx.cookies.user.name}</h3>
          <h3>{userCtx.cookies.user.email}</h3>
        </>
      ) : null}
    </div>
  );
};
```

## License

MIT © [Redvanisation](https://github.com/Redvanisation)
