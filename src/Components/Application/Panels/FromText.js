import React, { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import './FromText.css';

const FromText = () => {

    const {
        fromLanguage,
        fromInput,setFromInput,
        toLanguage,
        setToInput,
        setFromOpen,
        setToOpen
    } = useContext(AppContext);

    const translate = (fromLanguageSelected, fromInputSelected, toLanguageSelected) =>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_OpenAIToken}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "model": "code-davinci-002",
        "prompt": `##### Translate this function  from JavaScript into Python\n### ${fromLanguageSelected}\n    \n    ${fromInputSelected}        \n### ${toLanguageSelected}`,
        "temperature": 0,
        "max_tokens": 54,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "stop": [
            "###"
        ]
        });

        fetch("https://api.openai.com/v1/completions?", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            })
        .then(response => response.json())
        .then(result => {
            const translatedCode = result["choices"][0]["text"];  
            console.log(translatedCode.trim());
            setToInput(translatedCode.trim());
        })
        .catch(error => console.log('error', error));

    }

    return (
        <>
            <textarea id="fromText" name="fromText" placeholder='Type code here...' onChange={(e)=>{setFromInput(e.target.value)}} onClick={()=>{
                setFromOpen(false);
                setToOpen(false);
            }}></textarea>
            <input type="submit" id="fromTextSubmit" name="fromTextSubmit" className='fromTextSubmit' value="submit" onClick={()=>{
                setToInput("Loading...");
                console.log(fromInput);
                translate(fromLanguage,fromInput,toLanguage)
            }}></input>
        </>
    );
};

export default FromText;