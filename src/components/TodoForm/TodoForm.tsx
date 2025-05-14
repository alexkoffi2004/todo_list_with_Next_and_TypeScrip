"use client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ITodoFormProps, TodoStatus } from "@/interface/Todo";

export default function TodoForm({ onAdd }: ITodoFormProps) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<TodoStatus>("en cours");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      toast.error("❗veuillez entrez une tâche svp!!!")
      return;
    }
    onAdd(title, status);
    setTitle("");
    setStatus("en cours");
    toast.success("✅Tâche ajoutée avec succès !");
    
    setTimeout(() => {
      router.push("/tasks")
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entrez votre nouvelle tâche..."
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

        <button 
          type="submit" 
          className="ml-auto px-6 py-2 bg-indigo-700 text-white rounded-full hover:bg-indigo-600 transform hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-indigo-500/25"
        >
          Ajouter
        </button>
      </div>

      <ToastContainer 
        position="bottom-right"
        theme="light"
        className="font-sans"
      />
    </form>
  );
}
