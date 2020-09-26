import React from 'react';
import './App.css';

import H2 from './Components/H2';
import ListFunction from './Components/ListFunction';
import Form from './Components/Form';

import Calculator from './Components/CalculatorComponents/Calculator';
import HookTest from './Components/HookTest';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
        <h1>Learn ReactJs</h1>
        <H2 text="01) Render First Element"><p>Hello World</p></H2>

        {/* Lesson Two */}
        <H2 text="02) List"></H2>
        <ListFunction/>

        {/* Lesson Three */}
        <H2 text="03) Forms"></H2>
        <Form/>

        {/* Lesson Four */}
        <H2 text="04) Lift State Up"></H2>
        <Calculator/>

        {/* Lesson Five */}
        <H2 text="04) Hooks"></H2>
        <HookTest/>
        <H2 text="05) Hooks effect"></H2>
        <Counter/>
    </div>
  );
}

export default App;
