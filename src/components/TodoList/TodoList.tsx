"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackCircleSharp } from "react-icons/io5"; 
import { TodoStatus } from "@/interface/Todo";
import { addTodo } from "@/getways/todo";
import TodoForm from "@/components/TodoForm/TodoForm";

export default function TodoList() {
  const router = useRouter();


  const handleAddTodo = (title: string, status: TodoStatus) => {
    addTodo(title, status);
  };

  const handleCancel = () => {
    router.push("/tasks");
  };

  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 rounded-2xl shadow-2xl bg-white transform transition-all duration-300">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={handleCancel}
          className="p-2 text-indigo-700 hover:text-indigo-600 transition-colors duration-200"
          aria-label="Retour"
        >
          <IoChevronBackCircleSharp className="text-3xl" />
        </button>
        <h1 className="text-3xl font-bold text-indigo-900">Create New Task</h1>
      </div>
      
      <div className="bg-indigo-50/50 rounded-xl p-6 shadow-inner">
        <TodoForm onAdd={handleAddTodo} />
      </div>
    </main>
  );
}
