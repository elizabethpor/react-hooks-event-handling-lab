import React from "react";

function Keypad() {
    function handleChange() {
        console.log("Entering password...");
    }
    return (
        <input
            type="password"
            name="passwordBox"
            onChange={handleChange}
            placeholder="Enter the password"
        />
    )
};

export default Keypad;