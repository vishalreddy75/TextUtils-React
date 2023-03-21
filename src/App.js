import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import Alert from './Components/Alert';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      setSwitch('light');
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark Mode has been enabled","success");
      //document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light');
      setSwitch('dark');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success");
      //document.title = 'TextUtils - Light Mode'
    }
  }
  const showAlert = (message,type) =>{
    setalert({
      message : message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const[Mode,setMode] = useState("light");
  const[Switch,setSwitch] = useState("dark");
  const[alert,setalert] = useState(null);
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={Mode}  switch={Switch} togglemode={toggleMode} aboutText="About"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path ='/About' element={<About mode={Mode}/>}/>
          <Route exact path = '/' element={<TextForm showalert={showAlert} heading="Try TextUtils - For Easy Text Analysis and Manipulation" mode={Mode}/>}/> 
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
