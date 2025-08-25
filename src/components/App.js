
import React from "react";
import './../styles/App.css';
import Login from './login'
const App = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
        {/* Do not remove the main div */}

        {isLoggedIn ? (
        <h2>You are logged in</h2>
      ) : (
        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
