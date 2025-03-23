import { Bell, Search } from 'lucide-react'
import React from 'react'

export default function Hearder() {
  return (
    <header className="border-b">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className=" font-bold text-2xl">lysdor.com</div>
        <button className="text-red-600 text-sm font-medium hidden md:block">Rechercher vos voyages</button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="hidden md:flex items-center text-sm font-medium">
          <Search className="h-4 w-4 mr-1" />
          Obtenir l'app
        </button>
        <button className="hidden md:block text-sm font-medium">FR</button>
        <button className="hidden md:block text-sm font-medium">Publier votre annonce</button>
        <button className="hidden md:block text-sm font-medium">Assistance</button>
        <button className="hidden md:block text-sm font-medium">Voyages</button>
        <button className="hidden md:block text-sm font-medium">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-sm font-medium bg-red-600 text-white px-3 py-1.5 rounded-md">Se connecter</button>
      </div>
    </div>
  </header>
  )
}
