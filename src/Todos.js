import React, {useState, useReducer} from 'react';
import { initialState, reducer } from './reducers/reducer';


const Todos = () => {
 const [state, dispatch] = useReducer(reducer, initialState);
const [todo, setTodo] = useState("");


const handleChanges = e => {
    e.preventDefault();
    setTodo(e.target.value);
  };



    return (

<div>
<h1>Reducer Todo Project</h1>
<h2>Todo List:</h2>
<form>
<input type = 'text' name = 'todo' placeholder = 'new todo' value = {todo} onChange = {handleChanges} />
<button onClick={() => dispatch({ type: 'ADD_TODO', payload: todo})}>Add Todo</button>
</form>

{state.map(todo => (
    <div key ={todo.id}><p>{todo.item}</p><p>Completed: {todo.completed}</p></div>
))}

</div>
    );
}



export default Todos;