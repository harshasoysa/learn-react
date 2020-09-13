import React from 'react';
import './App.css';

import H2 from './Components/H2';
import ListFunction from './Components/ListFunction';

function App() {
  return (
    <div className="App">
        <h1>Learn ReactJs</h1>
        <H2 text="Render First Element"><p>Hello World</p></H2>

        {/* Lesson Two */}
        <H2 text="List"></H2>
        <ListFunction/>
    </div>
  );
}

export default App;
