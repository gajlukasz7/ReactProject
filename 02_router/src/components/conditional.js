import React, {Component} from 'react';

const Conditional = () => {

    const value = true;

    const returnValue = () => {
        return false;
    }

    const showIt = () => {
        return ( returnValue()?
            <div>HELLO IT'S TRUE</div> 
            : 
            <div>HELLO IT'S FALSE</div>
        ) 
    }

    return (
        <div>
            { showIt() }
        </div>
    )
}

export default Conditional;