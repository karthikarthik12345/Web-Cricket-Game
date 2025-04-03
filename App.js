import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Game from "./Game";



import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/game" element={user ? <Game user={user} /> : <Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
