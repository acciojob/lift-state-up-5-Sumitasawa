import React, { useState } from "react";
function Login({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(); 
    }
  };
   return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );

}

export default Login;