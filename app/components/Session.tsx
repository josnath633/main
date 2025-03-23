import { Button } from '@/components/ui/button'
import React from 'react'

export default function Session() {
  return (
<section className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48">
              <img
                src="/placeholder.svg?height=192&width=400"
                alt="Hotels.com Rewards"
                width={400}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm text-gray-500 mb-1">Hotels.com Rewards</h3>
              <p className="font-medium mb-3">10 nuits cumulées = 1 nuit bonus</p>
              <Button variant="outline" size="sm" className="w-full">
                Découvrez
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="h-48">
            <img
                src="/placeholder.svg?height=192&width=400"
                alt="Séjours préférentiels"
                width={400}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm text-gray-500 mb-1">Séjours préférentiels</h3>
              <p className="font-medium mb-3">Explorez ces lieux prisés et économisez grâce aux Prix membres</p>
              <Button variant="outline" size="sm" className="w-full">
                Découvrir les offres
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="h-48">
            <img
                src="/placeholder.svg?height=192&width=400"
                alt="Séjours courts"
                width={400}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm text-gray-500 mb-1">Des séjours courts, mais inoubliables</h3>
              <p className="font-medium mb-3">7 hôtels pour des séjours courts et agréables en 2023</p>
              <Button variant="outline" size="sm" className="w-full">
                Découvrir la liste
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}
