import "./App.css";
import About from "./components/About";
import Inputbar from "./components/Inputbar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#012150";
      showAlert("DarkBlue mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="textUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>}></Route>
            <Route exact path="/" element={<Inputbar mode={mode} showAlert={showAlert} />}> </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
