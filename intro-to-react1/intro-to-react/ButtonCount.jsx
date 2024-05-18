import React, { useState } from "react";

export default function ButtonCount() {
    // biggest idea in React is: state variables!
    const [count, setCount] = useState(10);

    function addOne() {
        console.log("adding 1 to the count variable...");
        setCount(count + 1);
    }

    function resetCounter() {
        setCount(0);
    }

    console.log("redrawing the screen...");
    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    );
}
