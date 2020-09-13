import React from 'react';

function ListFunction(props) {
    const numbers = [1, 2, 3, 4, 5];

    const items = numbers.map((i)=> <li key={i}>Number {i}</li>);

    return <ul>{items}</ul>
}

export default ListFunction;