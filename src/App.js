import React from 'react';
import './App.css';

import Notion from './components/Notion';
import InputNotion from "./components/InputNotion";

function App(){
    return (
      <div className="App">
        <InputNotion></InputNotion>
        {/* <Notion></Notion> */}
      </div>
    );
}

export default App;
