import logo from './logo.svg';
import './App.css';
import Background from './Components/Background/Background.tsx';
import LandingPage from './Components/LandingPage/LandingPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Application from './Components/Application/Application.tsx';
import { useState } from 'react';
import Title from './Components/Title/Title.tsx';
import { AppContext } from './AppContext';

function App() {

  const [overlay, setOverlay] = useState("");
  const [titlePosition, setTitlePosition] = useState("center");

  return (
    <div className="App">
      <AppContext.Provider value={{
        overlay,setOverlay,
        titlePosition,setTitlePosition
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
