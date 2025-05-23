import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TestForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#03294d';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title={3} aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={ <About />} /> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} /> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* </Routes> */}
     
        {/* <About/> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
