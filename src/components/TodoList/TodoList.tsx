"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useState, useEffect } from "react"; 
import { ITodo } from "@/interface/Todo";
import { addTodo, deleteTodo, getTodos, toggleTodo, updateTodo } from "@/getways/todo";
import TodoForm from "@/components/TodoForm/TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const router = useRouter();

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleAddTodo = (title: string) => {
    const newTodo = addTodo(title);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleCancel =() => {
    router.push("/")
  }

  return (
    <main className="max-w-md mx-auto mt-10">
      <div className="flex items-center justify-center text-center gap-2 mb-4">
        <IoChevronBackCircleSharp className="text-3xl cursor-pointer hover:text-gray-400"
        onClick={handleCancel}/>
        <h1 className="text-3xl font-bold text-center items-center"> Create New Task</h1>
      </div>
      <TodoForm onAdd={handleAddTodo} />
    </main>
  );
}
