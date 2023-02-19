import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import './Application.css';
import CodePanel from './CodePanel.tsx';
import LanguageButton from './LanguageButton.js';

const Application = () => {

    const {
        fromLanguage,setFromLanguage,
        toLanguage,setToLanguage,
        setTitlePosition,
        setOverlay
    } = useContext(AppContext);

    const [slide, setSlide] = useState("down");

    setTitlePosition('top-left');
    setOverlay('hidden');
    setTimeout(() => {
        setSlide('up');
    }, 0);

    return (
        <div className={`App-page ${slide}`}>
            <div className='App-center'>
                <div className='Button-bar'>
                    <LanguageButton language={fromLanguage}/>
                    <div className="Medium-circle"></div>
                    <div className="Little-circle"></div>
                    <div className="Medium-circle"></div>
                    <LanguageButton language={toLanguage}/>
                </div>
                <div className='Code-bar'>
                    <CodePanel />
                    <CodePanel />
                </div>
            </div>
        </div>
    );
};

export default Application;