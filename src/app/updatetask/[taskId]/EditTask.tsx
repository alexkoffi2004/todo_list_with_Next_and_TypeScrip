"use client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";
import { getTodos, updateTodo } from "@/getways/todo";

const EditTask = ({ taskId }: { taskId: string } ) => {
  const router = useRouter();
  const [newtask, setNewTask] = useState(""); // Charger la tâche à partir de l'ID

  useEffect(() => {
    const todos = getTodos(); // Récupérer la liste des tâches
    const taskToEdit = todos.find((todo) => todo.id === parseInt(taskId)); // Trouver la tâche à modifier
    if (taskToEdit) {
      setNewTask(taskToEdit.title); // Initialiser le champ de saisie avec le titre de la tâche
    }
  }, [taskId]);


  const handleSave = () => {
    updateTodo(parseInt(taskId), newtask); // Mettre à jour la tâche avec le nouvel intitulé
    console.log("Tâche sauvegardée :", newtask);
     // Rediriger vers la page principale après la sauvegarde
    toast.success("Tâche mise à jour !");

    // attend la fin du toast avant de charger la modification.
    setTimeout(() => {
      router.push("/");
    }, 3500);
  };

  

  const handleCancel =() => {
    router.push("/tasks")
  }

  return (
    <div className="p-4">
      <div className='flex flex-col text-center items-center'>
        <h1 className='font-bold'>Modifier la tâche</h1>
          <input
            type="text"
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex border rounded-full p-2 w-100"
          />
      </div>
      <div className='flex flex-row items-center gap-5 justify-center'>
        <div className='flex items-center'>
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 mt-2 rounded-full ">
            Sauvegarder
          </button>
        </div>
        <div className='flex items-center'>
          <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 mt-2 rounded-full">
            Annuler
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-right"/>
    </div>
  );
};

export default EditTask;