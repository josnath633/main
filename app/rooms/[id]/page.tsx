import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Star, Users, Check, ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import ReservationForm from "@/components/reservation-form"

const rooms = [
  {
    id: 1,
    name: "la coloré",
    description:
      "Chambre confortable avec vue sur la ville. Idéale pour les voyageurs d'affaires ou les couples en escapade urbaine. Profitez d'un espace bien aménagé avec toutes les commodités essentielles pour un séjour agréable.",
    price: 120,
    capacity: 2,
    size: 25,
    amenities: [
      "Wifi gratuit",
      "TV écran plat",
      "Minibar",
      "Climatisation",
      "Coffre-fort",
      "Sèche-cheveux",
      "Articles de toilette",
    ],
    images: [
      "/images/image.jpg",
      "/images/color.jpg",
      "/images/image.jpg",
    ],
  },
  {
    id: 2,
    name: "Chambre Deluxe",
    description:
      "Chambre spacieuse avec vue panoramique sur la ville. Profitez d'un espace généreux et d'un confort supérieur. La chambre Deluxe offre une expérience haut de gamme avec des équipements premium et une décoration élégante.",
    price: 100000,
    capacity: 2,
    size: 35,
    amenities: [
      "Wifi gratuit",
      "TV écran plat",
      "Minibar",
      "Climatisation",
      "Coffre-fort",
      "Sèche-cheveux",
      "Articles de toilette de luxe",
      "Peignoirs et chaussons",
      "Machine à café Nespresso",
    ],
    images: [
      "/images/black&white.jpg",
      "/images/color.jpg",
      "/images/color.jpg",
    ],
  },
  {
    id: 3,
    name: "Suite Junior",
    description:
      "Suite élégante avec salon séparé. Idéale pour les séjours prolongés ou pour ceux qui recherchent plus d'espace. La Suite Junior combine élégance et fonctionnalité pour un séjour mémorable.",
    price: 80000,
    capacity: 3,
    size: 45,
    amenities: [
      "Wifi gratuit",
      "TV écran plat",
      "Minibar",
      "Climatisation",
      "Coffre-fort",
      "Sèche-cheveux",
      "Articles de toilette de luxe",
      "Peignoirs et chaussons",
      "Machine à café Nespresso",
      "Salon séparé",
      "Bureau spacieux",
    ],
    images: [
      "/images/color.jpg",
      "/images/color.jpg",
      "/images/color.jpg",
    ],
  },
  {
    id: 4,
    name: "Suite Exécutive",
    description:
      "Suite luxueuse avec salon et salle à manger. Parfaite pour les voyageurs exigeants ou les familles. Profitez d'un espace généreux et d'équipements haut de gamme pour un séjour d'exception.",
    price: 150000,
    capacity: 4,
    size: 60,
    amenities: [
      "Wifi gratuit",
      "TV écran plat",
      "Minibar",
      "Climatisation",
      "Coffre-fort",
      "Sèche-cheveux",
      "Articles de toilette de luxe",
      "Peignoirs et chaussons",
      "Machine à café Nespresso",
      "Salon séparé",
      "Salle à manger",
      "Bureau spacieux",
      "Jacuzzi",
    ],
    images: [
      "/images/color.jpg",
      "/images/color.jpg",
      "/images/color.jpg",
    ],
  },
  {
    id: 5,
    name: "Suite Présidentielle",
    description:
      "Notre suite la plus luxueuse avec vue panoramique. La Suite Présidentielle offre une expérience incomparable avec des espaces généreux, une décoration raffinée et des équipements exclusifs. Idéale pour les occasions spéciales.",
    price: 100000,
    capacity: 4,
    size: 80,
    amenities: [
      "Wifi gratuit",
      "TV écran plat",
      "Minibar",
      "Climatisation",
      "Coffre-fort",
      "Sèche-cheveux",
      "Articles de toilette de luxe",
      "Peignoirs et chaussons",
      "Machine à café Nespresso",
      "Salon séparé",
      "Salle à manger",
      "Bureau spacieux",
      "Jacuzzi",
      "Terrasse privée",
      "Service de majordome",
    ],
    images: [
      "/images/color.jpg",
      "/images/color.jpg",
      "/images/color.jpg",
    ],
  },
]

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const roomId = Number.parseInt(params.id)
  const room = rooms.find((r) => r.id === roomId)

  if (!room) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link href="/rooms" className="flex items-center text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour aux chambres
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
          <div className="flex items-center mb-6">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            <span className="ml-2 text-muted-foreground">5.0 (24 avis)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src={room.images[0] || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {room.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-[150px] rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${room.name} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-muted-foreground">{room.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Caractéristiques</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                <span>{room.capacity} Personnes</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 mr-2 text-primary"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
                <span>{room.size} m²</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Équipements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-background rounded-lg border p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">{room.price}XFA</p>
                <p className="text-sm text-muted-foreground">par nuit</p>
              </div>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
              </div>
            </div>
            <Separator className="my-4" />
            <ReservationForm roomId={room.id} roomName={room.name} price={room.price} />
          </div>
        </div>
      </div>
    </div>
  )
}

