import React, { useReducer, useRef } from "react";

function TodoList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: Date.now(),
            name: action.name,
            completed: "false"
          }
        ];
      case "REMOVE":
        return state.filter((_, index) => index !== action.index);
      case "CLEAR":
        return [];
      case "TOGGLE_COMPLETE":
        return {
          ...state,
          completed: !state.completed
        };
      default:
        return state;
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: "ADD",
      name: inputRef.current.value //inputRef refers to the DOM node (input element) and current.value grabs the text from the input field
    });
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Reducer Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      <div>
        {items.map((item, index) => (
          <div>
            <p key={item.id}>
              {item.name}
              <button onClick={() => dispatch({ type: "REMOVE", index })}>
                X
              </button>
            </p>

            <p onClick={() => dispatch({ type: "TOGGLE_COMPLETE" })}>
              Completed: {item.completed}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
