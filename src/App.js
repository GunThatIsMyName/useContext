import React, { useReducer, useState } from "react";

const initialState = ()=>{
  const todos = [];
}
const ADD = "add"
const reducer = (state,action)=>{
    console.log(state,"state");
    console.log(action,"action");
    switch (action.type){
      case ADD:
        return {todos:[...state.todos,{text:action.payload}]}
      default:
        throw Error();
    }
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [inputValue,setInputValue]=useState("")
  const handleChange = (e)=>{
      setInputValue(e.target.value)
      dispatch({type:ADD})
  }
  const handleSubmit =(event)=>{
      event.preventDefault();
  }
  return (
    <>
      <h1>What should i do </h1>
      <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} placeholder="Write todos" />
      </form>
      <ul>
        <p>todo list</p>
        {state.todos.map((toDo, index) => (
          <li key={index}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
