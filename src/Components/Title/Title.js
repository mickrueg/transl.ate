import React from 'react';
import './Title.css';

const Title = ({position="center"}) => {
    return (
        <div className='Title-page'>
            <div className={`Title ${position}`}>
                transl.ate
            </div>
        </div>
    );
};

export default Title;