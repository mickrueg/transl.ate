import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../AppContext';
import './FromText.css';

const FromText = () => {

    const {
        fromLanguage,
        fromInput,setFromInput,
        toLanguage,
        toInput, setToInput,
        setFromOpen,
        setToOpen
    } = useContext(AppContext);

    useEffect(()=>{
        if(toInput!=="Loading..." && toInput!=="Type a prompt or code in the left and click submit to see your prompt translated to the code selected :)"){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var body = {
                "userFromLanguage": fromLanguage,
                "userInput": fromInput,
                "userToLanguage": toLanguage,
                "aiResponse": toInput,
                "timestamp": new Date()
            };
            
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(body),
            redirect: 'follow'
            };
            
            fetch("https://transl-ate.onrender.com/fromInputs", requestOptions)
            .then(response => {
                response.text()
                console.log(body)
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    },[toInput])


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
            <textarea id="fromText" name="fromText" placeholder='Type a prompt or your code here...' onChange={(e)=>{setFromInput(e.target.value)}} onClick={()=>{
                setFromOpen(false);
                setToOpen(false);
            }}></textarea>
            <input type="submit" id="fromTextSubmit" name="fromTextSubmit" className='fromTextSubmit' value="submit" onClick={()=>{
                setToInput("Loading...");
                console.log(fromInput);
                translate(fromLanguage,fromInput,toLanguage);
            }}></input>
        </>
    );
};

export default FromText;