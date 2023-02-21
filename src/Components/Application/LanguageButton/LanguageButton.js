import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../AppContext';
import './LanguageButton.css';

const LanguageButton = ({language, options=[],from,open=false}) => {


    const {
        setFromLanguage,
        setToLanguage,
        fromOpen,setFromOpen,
        toOpen,setToOpen
    } = useContext(AppContext);


    const listItems = options.map((e,index)=>{
        return <li className='DropDown-item' key={index} onClick={()=>{
            (from?setFromLanguage(e):setToLanguage(e))
            (from?setFromOpen(false):setToOpen(false))
        }}>{e}</li>
    })

    return (
        <div className='LanguageButton-shape'onClick={()=>{
            if(from&fromOpen){
                setFromOpen(false);
            } else if(from){
                setFromOpen(true);
                setToOpen(false);
            } else if(toOpen){
                setToOpen(false);
            } else {
                setToOpen(true);
                setFromOpen(false);
            }
        }}>
            <div className='LanguageButton-language'>
                    {language}
            </div>
            <div className={`DropDown ${(open?"":"ddClose")}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" className="Escape-Options" viewBox="0 96 960 960" width="30"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                <ul className='DropDown-list'>
                    {listItems}
                </ul>
            </div>
            <svg className='LanguageButton-triangle' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 705 173-173-43-42-130 130-130-130-43 42 173 173Zm0 271q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z"/></svg>
        </div>
    );
};

export default LanguageButton;