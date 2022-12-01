
const ToDoList = ({todos}) => {
    const lis = todos.map((todo, index)=>{
        return (<li key={index}>{todo}</li>)
    })
    return (
       <ul>
        {lis}
       </ul>
    )
}
export default ToDoList;