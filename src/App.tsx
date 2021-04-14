import React, {FC} from 'react';
import './App.css';
import MemeGenerator from "./Components/MemeGenerator";
import Header from "./Components/Header";

const App: FC = () => {
  return (
      <div className="App">
        <Header/>
        <MemeGenerator/>
      </div>
  );
}

export default App;
