import './App.css';
import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
  const [todos,setToDos] = useState([])

  const addTodo =(todo) =>{
    setToDos([...todos, todo])
    ///the ... is spreding the old todo from new todo, the new todo will add on right fater the old ones
  }

  return (
    <div className="App">
      <ToDoList todos={todos}/>
      <ToDoForm addTodo ={addTodo}/>
     
    </div>
  );
}

export default App;
