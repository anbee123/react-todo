import { useState } from "react";

const ToDoForm = ({addTodo}) => {
    const [newToDo, setNewToDo] = useState("")
    const handleAddToDo=()=> {
        addTodo(newToDo)
        setNewToDo("")
    }

    return (
        <>
        <h2>New To-Do</h2>
        <input
         value={newToDo} 
         placeholder="New To-Do"
         onChange={(event)=>{setNewToDo(event.target.value)}} />
        <button onClick={handleAddToDo}>ADD TO-DO</button>
        </>
    )
}
export default ToDoForm;