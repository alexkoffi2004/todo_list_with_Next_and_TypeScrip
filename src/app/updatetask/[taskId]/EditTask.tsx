"use client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getTodos, updateTodo } from "@/getways/todo";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { TodoStatus } from "@/interface/Todo";

const EditTask = ({ taskId }: { taskId: string } ) => {
  const router = useRouter();
  const [newtask, setNewTask] = useState("");
  const [status, setStatus] = useState<TodoStatus>("en cours");

  useEffect(() => {
    const todos = getTodos();
    const taskToEdit = todos.find((todo) => todo.id === parseInt(taskId));
    if (taskToEdit) {
      setNewTask(taskToEdit.title);
      setStatus(taskToEdit.status);
    }
  }, [taskId]);

  const handleSave = () => {
    if (newtask.trim() === "") {
      toast.error("❗Veuillez entrer une tâche valide");
      return;
    }
    updateTodo(parseInt(taskId), newtask, status);
    toast.success("✅ Tâche mise à jour avec succès !");
    setTimeout(() => {
      router.push("/tasks");
    }, 2000);
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
        <h1 className="text-3xl font-bold text-indigo-900">Modifier la tâche</h1>
      </div>

      <div className="bg-indigo-50/50 rounded-xl p-6 shadow-inner">
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={newtask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Modifier votre tâche..."
              className="w-full px-6 py-4 text-lg text-indigo-900 bg-white border-2 border-indigo-200 rounded-full focus:outline-none focus:border-indigo-500 transition-colors duration-200 placeholder-indigo-300"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="text-indigo-900 font-medium">Statut :</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as TodoStatus)}
              className="px-4 py-2 text-indigo-900 bg-white border-2 border-indigo-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200"
            >
              <option value="en cours">En cours</option>
              <option value="terminé">Terminé</option>
            </select>
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-indigo-700 text-white rounded-full hover:bg-indigo-600 transform hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-indigo-500/25"
            >
              Sauvegarder
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-2.5 bg-white text-indigo-700 border border-indigo-200 rounded-full hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 font-medium shadow-lg"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>

      <ToastContainer 
        position="bottom-right"
        theme="light"
        className="font-sans"
      />
    </main>
  );
};

export default EditTask;