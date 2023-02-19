import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{useState} from 'react';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
    }
  }
  return (
   <>
   <Navbar title="TextUtiles"  aboutText="About us" mode={mode} toggleMode ={toggleMode}/> 
   <div className="container my-3">
   <TextForm heading="Enter the Text" mode=
   {mode} toggleMode={toggleMode}/>
   </div>

   <About mode={mode} toggleMode={toggleMode}/>
  
   </>
  );
}

export default App;
