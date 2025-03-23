import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function Foot() {
  return (
    <footer className="container mx-auto px-4 py-6 border-t">
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-500">Découvrez plus d'hôtels</p>
      <button className="text-sm text-gray-500">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  </footer>
  )
}
