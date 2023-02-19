import React from 'react';
import './Background.css';


const Background = ({overlay=""}) => {
    return (
        <div className='Background'>
            <div className='background-image'></div>
            <div className={`background-overlay ${overlay}`}></div>
        </div>
    );
};

export default Background;