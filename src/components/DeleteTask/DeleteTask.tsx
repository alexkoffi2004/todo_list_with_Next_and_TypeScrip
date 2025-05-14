"use client";

import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { ITodo } from "@/interface/Todo";

interface DeleteTaskProps {
  todo: ITodo;
}

export default function DeleteTask({ todo }: DeleteTaskProps) {
  const router = useRouter();

  const handleDeleteClick = () => {
    // Rediriger vers la page de suppression avec l'ID de la tâche
    router.push(`/deletetask/${todo.id}`);
  };

  return (
    <button
      onClick={handleDeleteClick}
      className="p-2 text-red-600 hover:text-red-700 transition-colors duration-200"
      aria-label="Delete task"
    >
      <FaTrash className="w-5 h-5" />
    </button>
  );
} 