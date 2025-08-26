import React, { useState } from "react";
import './../styles/App.css';
import Login from './login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id="main">
      {isLoggedIn ? (
        <h2>You are logged in</h2>
      ) : (
        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
