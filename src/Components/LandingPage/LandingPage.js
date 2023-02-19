import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import './LandingPage.css';

const LandingPage = () => {

    const {
        setTitlePosition,
        setOverlay
    } = useContext(AppContext);


    setTitlePosition('center');
    setOverlay('')

    const navigate = useNavigate();

    return (
        <div className='LandingPage-page'>
            <div className='LandingPage-button'>
                <div className='LandingPage-button-text'
                onClick={()=>{
                    setTitlePosition("top-left");
                    setOverlay("hidden");
                    navigate('/app',{replace:true})
                    }}>get started</div>
            </div>
        </div>
    );
};

export default LandingPage;