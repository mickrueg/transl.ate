import logo from './logo.svg';
import './App.css';
import Background from './Components/Background/Background.js';
import LandingPage from './Components/LandingPage/LandingPage.js';
import { Route, Routes } from 'react-router-dom';
import Application from './Components/Application/Application.js';
import { useState } from 'react';
import Title from './Components/Title/Title.js';
import { AppContext } from './AppContext';
// require("dotenv").config()


function App() {

  const [overlay, setOverlay] = useState("");
  const [titlePosition, setTitlePosition] = useState("center");
  const [fromLanguage,setFromLanguage] = useState("JavaScript");
  const [fromInput,setFromInput] = useState("");
  const [fromOpen,setFromOpen] = useState(false)
  const [toLanguage,setToLanguage] = useState("Python");
  const [toInput,setToInput] = useState("Type code to the left and click submit to see translated code here :)");
  const [toOpen,setToOpen] = useState(false)

  return (
    <div className="App">
      <AppContext.Provider value={{
        overlay,setOverlay,
        titlePosition,setTitlePosition,
        fromLanguage,setFromLanguage,
        toLanguage,setToLanguage,
        fromInput,setFromInput,
        toInput,setToInput,
        fromOpen,setFromOpen,
        toOpen,setToOpen
      }}>
        <Background overlay={overlay}/>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/app" element={<Application />} />
          
        </Routes>
        <Title position={titlePosition}/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
