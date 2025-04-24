import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

import Login from "./components/auth/login/Login";
import Dashboard from "./components/auth/Dashboard";
import NotFound from "./components/notFound/NotFound";
import Protected from "./components/protected/Protected";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/dashboard"
              element={
                <Protected isSignedIn={loggedIn}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
