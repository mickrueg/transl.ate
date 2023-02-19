import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const ToText = () => {

    const {
        toInput
    } = useContext(AppContext);

    return (
        <>
          <textarea id="toText" name="toText" value={toInput} readOnly></textarea>
        </>
    );
};

export default ToText;