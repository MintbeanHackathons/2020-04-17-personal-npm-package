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

export default App;
