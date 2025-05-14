"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1c3d] to-[#1a2c4e] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Gestionnaire de Tâches
            </span>
          </h1>
          
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">✨ Commencez à organiser vos tâches ✨</h2>
            <div className="flex justify-center">
            <Link 
              href="/tasks" 
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Voir la Liste des Tâches
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
