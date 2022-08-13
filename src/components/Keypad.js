// Code Keypad Component Here
import React from 'react';
function Keypad (){
    function passwordEnter(){
        console.log(`Entering password...`)
    }
    return (
        <div>
            <input type="password" onChange={passwordEnter} placeholder="Enter Password"/>
        </div>
    )
}

export default Keypad;