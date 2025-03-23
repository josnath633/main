import Link from "next/link"
import Image from "next/image"
import { Star, Wifi, Tv, Coffee, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const rooms = [
  {
    id: 1,
    name: "la coloré",
    description: "Chambre confortable avec vue sur la ville",
    price: 80000,
    capacity: 2,
    size: 25,
    amenities: ["Wifi", "TV", "Minibar"],
    image: "/images/color.jpg",
  },
  {
    id: 2,
    name: "black&white",
    description: "Chambre spacieuse avec vue panoramique",
    price: 150000,
    capacity: 2,
    size: 35,
    amenities: ["Wifi", "TV", "Minibar", "Coffre-fort"],
    image: "/images/black&white.jpg",
  },
  {
    id: 3,
    name: "Suite Junior",
    description: "Suite élégante avec salon séparé",
    price: 10000,
    capacity: 3,
    size: 45,
    amenities: ["Wifi", "TV", "Minibar", "Coffre-fort", "Machine à café"],
    image: "/images/love.jpg",
  },
  {
    id: 4,
    name: "Suite Exécutive",
    description: "Suite luxueuse avec salon et salle à manger",
    price: 120000,
    capacity: 4,
    size: 60,
    amenities: ["Wifi", "TV", "Minibar", "Coffre-fort", "Machine à café", "Jacuzzi"],
    image: "/images/lov.jpg",
  },
  {
    id: 5,
    name: "zen",
    description: "Notre suite la plus luxueuse avec vue panoramique",
    price: 100000,
    capacity: 4,
    size: 80,
    amenities: ["Wifi", "TV", "Minibar", "Coffre-fort", "Machine à café", "Jacuzzi", "Terrasse privée"],
    image: "/images/lov.jpg",
  },
]

export default function RoomsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Chambres</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos chambres et suites élégantes, conçues pour offrir un confort optimal et une expérience
          inoubliable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
              </div>
              <p className="text-muted-foreground mb-4">{room.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{room.capacity} Pers.</span>
                </div>
                <div className="flex items-center">
                  <Wifi className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Wifi</span>
                </div>
                <div className="flex items-center">
                  <Tv className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">TV</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Minibar</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">{room.price}XFA</p>
                  <p className="text-sm text-muted-foreground">par nuit</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link href={`/rooms/${room.id}`} className="w-full">
                <Button className="w-full">
                  Voir les détails
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

