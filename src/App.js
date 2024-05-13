import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import DataTableApi from './Components/dataTableApi';
import StartButton from './Components/start';
import QuestionComponents from './Components/question';
import TodoList from './Components/toDo';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartButton />}></Route>
          <Route path='/question' element={<QuestionComponents />}></Route>
          <Route path='/data_table' element={<DataTableApi />}></Route>
          <Route path='/todo' element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
