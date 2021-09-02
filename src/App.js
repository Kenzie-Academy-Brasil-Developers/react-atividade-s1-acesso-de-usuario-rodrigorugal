import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const user = "Rodrigo";

  const login = () => {
    setIsLoggedIn(false);
  };

  const logout = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={login}
          Logout={logout}
        />
      </header>
    </div>
  );
}

export default App;
