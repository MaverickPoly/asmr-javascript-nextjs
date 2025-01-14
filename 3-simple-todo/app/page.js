"use client";

import {useState} from "react";
import TodoForm from "@/components/TodoForm";
import TodoTile from "@/components/TodoTile";

export default function Home() {
  const [todos, setTodos] = useState([["Workout", false]]);


  const onToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index][1] = !newTodos[index][1];
    setTodos(newTodos);
  };


  return (
    <div className="flex flex-col bg-emerald-100 rounded p-6 mx-4 w-full max-w-xl">
      <TodoForm setTodos={setTodos} todos={todos}/>

      <div className="flex space-y-3 flex-col">
        {todos.map((todo, index) => {
          return (
              <TodoTile key={index} todo={todo} onToggle={() => onToggle(index)} />
          )
        })}
      </div>
    </div>
  );
}
