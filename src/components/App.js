import React, { useState } from "react";
import './../styles/App.css';
import Login from "./login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    
    <div id="main">
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in</p>
      ) : (
        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;