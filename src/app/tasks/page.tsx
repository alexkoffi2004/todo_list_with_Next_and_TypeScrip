"use client";

import Link from "next/link";
import TodoItem from "@/components/TodoItem/TodoItem"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { ITodo } from "@/interface/Todo";
import { addTodo, deleteTodo, getTodos, toggleTodo } from "@/getways/todo";
import { div } from "framer-motion/client";


export default function Page() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    
    // Fonction pour charger les taches
    const loadTodos = () => {
      const todos = getTodos();
      setTodos(todos);
    }

    useEffect(() => {
      loadTodos();
    
    // Ecouter le retour sur la page
    const handleFocus =() => {
      loadTodos();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    }; 
  }, []);

    useEffect(() => {
        const todos = getTodos();
        setTodos(todos);
      }, []);

      const handleToggleTodo = (id: number) => {
        toggleTodo(id);
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
        toast.success("État de la tâche mis à jour !");
      };

      const handleDeleteTodo = (id: number) => {
        deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        toast.info("Tâche supprimée !");
      };

  return (
    <main className="max-w-md mx-auto mt-10 p-4 text-center rounded-lg shadow-3xl bg-gradient-to-b from-blue-900 via-blue-700 to-cyan-400">

      <Link className="text-2xl font-bold mb-4 p-2 rounded-lg text-center bg-[#030233] text-white" href="/createtask">
       Create Task
      </Link>
      <div>
      <h1 className="text-2xl font-bold mt-10 p-2 text-center bg-gray-800 text-white rounded-t-lg">Tasks list</h1>
      </div>
      <div className="flex justify-between items-center mb-4 bg-[#CBDBF5] p-1 rounded-b-lg shadow-md">
            <div className="flex flex-col gap-4 w-100">
              {todos.length === 0 ? (
                <div className="text-center text-gray-500 mt-4 mb-4">
                  ❗Aucune tâche n'a encore été ajoutée.
                </div>
              ): (
                todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}
                />
                    ))
              )}
            </div>
        </div>
        <ToastContainer position="bottom-right" aria-label="Notification container"/>
    </main>
  );
}