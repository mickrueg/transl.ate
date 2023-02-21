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
        fromOpen,setFromOpen,
        toOpen,setToOpen
    } = useContext(AppContext);
    
    const [slide, setSlide] = useState("down");
    
    setTimeout(() => {
        setTitlePosition('top-left');
        setOverlay('hidden');
        setSlide('up');
    }, 0);

    const languages = ["English","Java","JavaScript","Python"];
    const fromOptions = languages.filter((e)=>e!==fromLanguage&e!==toLanguage)
    const toOptions = languages.filter((e)=>e!==fromLanguage&e!==toLanguage)

    return (
        <div className={`App-page ${slide}`}>
            <div className='App-center'>
                <div className='Button-bar'>
                    <LanguageButton language={fromLanguage} options={fromOptions} from open={fromOpen}/>
                    <div className='Language-swap' onClick={()=>{
                        const savedFromLanguage = fromLanguage;
                        setFromLanguage(toLanguage);
                        setToLanguage(savedFromLanguage);
                        setFromOpen(false);
                        setToOpen(false);
                    }}>
                        <div className="Medium-circle"> 
                            <svg className='Medium-circle arrow left' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 705 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/></svg>
                        </div>
                        <div className="Little-circle"></div>
                        <div className="Medium-circle">
                            <svg className='Medium-circle arrow right' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 705 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/></svg>
                        </div>
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