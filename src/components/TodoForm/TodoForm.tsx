"use client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ITodoFormProps } from "@/interface/Todo";


export default function TodoForm({ onAdd }: ITodoFormProps) {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      toast.error("❗veuillez entrez une tâche svp!!!")
      return;
    }
      onAdd(title);
      setTitle("");
      toast.success("✅Tâche ajoutée avec succès !");
      
      // Attend la fin du toast avant la redirection
      setTimeout(() => {
        router.push("/")
    }, 4000); // 4000ms correspond à la durée par défaut d'un toast donc cela retardera le temps que le toast finisse
  };
      

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <div className='flex justify-between border rounded-full w-full'>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nouvelle tâche"
            className="p-2 flex-grow focus:outline-none rounded-l-full"
          /> 
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Ajouter
          </button>
    
      <ToastContainer position="bottom-right" aria-label="Notification container" />
      </div>
    </form>
    
  );
}
