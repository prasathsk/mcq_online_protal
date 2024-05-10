import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DataTableApi from './Components/dataTableApi';
import StartButton from './Components/start';
import QuestionComponents from './Components/question';

function App() {

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <button onClick={addCount}>even</button>
      <button onClick={subCount}>odd</button>
      <button onClick={notCount}>not</button>
      <p>count:{count}</p>
      <p>even:{evenNum}</p>
      <p>odd:{oddNum}</p>
      <p>not value:{notNum.map((data) => {
        console.log(data)
        return data
      })}</p>*/}
      {/* <DataTableApi /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartButton />}></Route>
          <Route path='/question' element={<QuestionComponents />}></Route>
          <Route path='/data_table' element={<DataTableApi />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
