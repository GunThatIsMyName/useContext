import React, { useReducer, useState } from "react";


const ADD="add"
const Delete ="Delete"
const Uncompleted="Uncompleted"
const initState ={
    todos:[]
}

const reducer =(state,action)=>{
    console.log(state,"state")
    console.log(action,"action")
    switch(action.type){
        case ADD:
          return {todos:[...state.todos,{text:action.payload,id:Math.random()}]}
        case Delete:
          const target = state.todos.filter(item=>item.id !== action.id)
          return {todos:target}
        case Uncompleted:
          const checkTarget = state.todos.map(item=>item.id===action.id?{...item,complete:true}:item)
          console.log(checkTarget,"맵핑")
          return {
            todos:checkTarget
          }
        default:
          console.log("no types")
    }
}

function App() {
  const [newTodo,setTodo] = useState("")
  const [stat,dispatch] =useReducer(reducer,initState)
  const handleSubmit =(event)=>{
      event.preventDefault();
      dispatch({type:ADD, payload:newTodo})
      setTodo("")
  }
  const handleChange =(event)=>{
      setTodo(event.target.value)
  }
  console.log(stat.todos,"스텟 안쪽")
  return (
    <>
      <h1>TODO APP</h1>
      <form onSubmit={handleSubmit} >
          <input value={newTodo} onChange={handleChange} placeholder="add new todo" />
      </form>
      {stat.todos.map(item=><li style={{backgroundColor:item.complete?"orange":""}} key={item.id} >
        <span>{item.text}</span>
        <button onClick={()=>dispatch({type:Delete,id:item.id})} >❌</button>
        <button onClick={()=>dispatch({type:Uncompleted,id:item.id})} >✅</button>
        </li>)}
    </>
  );
}

export default App;
