import React, { useReducer, useState } from "react";
import { Delete, Uncompleted } from "./action";
import Add from "./Add";
import { useDispatch, useTodos } from "./Context";
import List from "./list";
import Todo from "./todo";

function App() {
  const todos =useTodos();
  return (
    <>
      <h1>TODO APP</h1>
      <Add />
      <List name={"TO DO"} >
      {todos.map(item=>(<Todo key={item.id}  complete={item.complete} id={item.id} text={item.text} />))}
      </List>
    </>
  );
}

export default App;
