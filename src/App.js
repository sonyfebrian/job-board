import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import Login from "./component/Login";
import Home from "./component/Home";
import Detail from "./component/Detail";
import firebase from "./services/firebase";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);
  return (
    <div className="App">
      {user ? (
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Home user={user} />
          <Route path="/details/:slug" element={<Detail />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
