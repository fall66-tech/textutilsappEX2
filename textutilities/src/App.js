
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";





function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 850);
  };

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor='black';
      showAlert(" dark mode has been enabled","success");
      document.title = 'textutils ~ dark ';
    }  
    else {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert(" light mode has been enabled","success");
      document.title = 'textutils ~ light ';
    }
    

  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    {alert && <Alert alert={alert} />}
    <div className="container my-3" >
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm  showAlert={showAlert} heading = "enter your suggested text" mode={mode}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
