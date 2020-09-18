import React, { useState } from 'react';

const HookTest = () => {
    let [count, setCount] = useState(0);

    function handleClick () {
        setCount(count+1)
    }
    return (
        <div onClick={handleClick}>
            Test Hooks : {count}
        </div>
    );
}

export default HookTest;
