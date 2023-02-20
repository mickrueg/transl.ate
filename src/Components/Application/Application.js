import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import './Application.css';
import CodePanel from './Panels/CodePanel';
import LanguageButton from './LanguageButton/LanguageButton.js';

const Application = () => {

    
    const {
        fromLanguage,setFromLanguage,
        toLanguage,setToLanguage,
        setTitlePosition,
        setOverlay,
        fromOpen,
        toOpen
    } = useContext(AppContext);
    
    const [slide, setSlide] = useState("down");
    
    setTimeout(() => {
        setTitlePosition('top-left');
        setOverlay('hidden');
        setSlide('up');
    }, 0);

    const languages = ["English","Java","JavaScript","Python"];
    const fromOptions = languages.filter((e)=>e!==fromLanguage)
    const toOptions = languages.filter((e)=>e!==toLanguage)

    return (
        <div className={`App-page ${slide}`}>
            <div className='App-center'>
                <div className='Button-bar'>
                    <LanguageButton language={fromLanguage} options={fromOptions} from open={fromOpen}/>
                    <div className='Language-swap'>
                        <div className="Medium-circle"></div>
                        <div className="Little-circle"></div>
                        <div className="Medium-circle"></div>
                    </div>
                    <LanguageButton language={toLanguage} options={toOptions} open={toOpen}/>
                </div>
                <div className='Code-bar'>
                    <CodePanel />
                    <CodePanel type="toText" layout="toLayout"/>
                </div>
            </div>
        </div>
    );
};

export default Application;