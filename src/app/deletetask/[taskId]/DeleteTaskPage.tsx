"use client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getTodos, deleteTodo } from "@/getways/todo";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { ITodo } from "@/interface/Todo";

const DeleteTaskPage = ({ taskId }: { taskId: string }) => {
  const router = useRouter();
  const [task, setTask] = useState<ITodo | null>(null);

  useEffect(() => {
    const todos = getTodos();
    const taskToDelete = todos.find((todo) => todo.id === parseInt(taskId));
    if (taskToDelete) {
      setTask(taskToDelete);
    } else {
      toast.error("❌ Tâche non trouvée");
      setTimeout(() => {
        router.push("/tasks");
      }, 2000);
    }
  }, [taskId, router]);

  const handleDelete = () => {
    if (task) {
      deleteTodo(task.id);
      toast.info("✅ Tâche supprimée avec succès !");
      setTimeout(() => {
        router.push("/tasks");
      }, 2000);
    }
  };

  const handleCancel = () => {
    router.push("/tasks");
  };

  if (!task) {
    return null;
  }

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
        <h1 className="text-3xl font-bold text-indigo-900">Supprimer la tâche</h1>
      </div>

      <div className="bg-indigo-50/50 rounded-xl p-6 shadow-inner">
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-indigo-700 mb-4">
              Êtes-vous sûr de vouloir supprimer la tâche suivante ?
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-xl font-medium text-indigo-900">{task.title}</p>
              <p className="text-sm text-indigo-500 mt-2">
                Statut : {task.completed ? "Complétée" : "En cours"}
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <button
              onClick={handleDelete}
              className="px-6 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-500 transform hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-red-500/25"
            >
              Supprimer
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

export default DeleteTaskPage; 