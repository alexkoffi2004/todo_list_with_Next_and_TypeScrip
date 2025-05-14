"use client";

import Link from "next/link";
import TodoItem from "@/components/TodoItem/TodoItem"
import TodoListHeader from "@/components/TodoListHeader/TodoListHeader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { ITodo } from "@/interface/Todo";
import { deleteTodo, getTodos } from "@/getways/todo";


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

      const handleDeleteTodo = (id: number) => {
        deleteTodo(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        toast.info("Tâche supprimée !");
      };

  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 rounded-2xl shadow-2xl bg-white transform transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <Link 
          className="inline-block text-xl font-semibold px-5 py-2 rounded-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300" 
          href="/"
        >
          🏠 Home
        </Link>
        <Link 
          className="inline-block text-xl font-semibold px-4 py-2 rounded-full text-center bg-indigo-700 text-white shadow-lg hover:bg-indigo-600 transform hover:scale-105 transition-all duration-300" 
          href="/createtask"
        >
          ✨ Create New Task
        </Link>
      </div>
      
      <div className="bg-indigo-50/50 rounded-xl p-6 shadow-inner">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-900 tracking-wide">
          📋 Tasks List
        </h1>
        <TodoListHeader/>
        <div className="space-y-4">
          {todos.length === 0 ? (
            <div className="text-center text-indigo-700 text-lg py-8 bg-white/80 rounded-lg backdrop-blur-sm">
              ✨ Aucune tâche n&apos;a encore été ajoutée.
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  
                  onDelete={handleDeleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <ToastContainer 
        position="bottom-right"
        theme="light"
        className="font-sans"
      />
    </main>
  );
}