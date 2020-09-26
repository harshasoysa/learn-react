import React, {useState, useEffect} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    console.log("count" + count);

    useEffect(() => {
        const id = setInterval(() => {
        setCount(count + 1); 
        console.log(count);
        }, 1000);
        return () => clearInterval(id);
    }, []); 
    return <h1>{count}</h1>;
}

export default Counter;