import React from "react";

function EyesOnMe() {
    
    return (
        <button      
            onFocus={() => console.log('Good!')}
            onBlur={() => console.log('Hey! Eyes on me!')}
            // onClick={() => {
            // focus();
            // blur();
        >
        Eyes on me
        </button>
    )
};

export default EyesOnMe;

