import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, Utensils, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/color.jpg"
          alt="Hotel Grand View"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">lys d or</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Votre séjour de luxe vous attend</p>
          <Link href="/rooms">
            <Button size="lg" className="text-lg">
              Réserver Maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md">
            <Wifi className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">WiFi Gratuit</h3>
            <p className="text-muted-foreground">Connexion haut débit disponible dans tout l'hôtel</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md">
            <Utensils className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Restaurant 5 Étoiles</h3>
            <p className="text-muted-foreground">Cuisine gastronomique préparée par nos chefs renommés</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md">
            <MapPin className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Emplacement Central</h3>
            <p className="text-muted-foreground">Situé au cœur de la ville, proche de toutes les attractions</p>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Chambres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "la coloré", price: "80000", image: "/images/color.jpg" },
              { name: "black&white", price: "150000", image: "/images/lov.jpg" },
              { name: "zen", price: "100000", image: "/images/black&white.jpg" },
            ].map((room, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <div className="flex items-center mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="text-2xl font-bold mb-4">
                    {room.price}XFA <span className="text-sm font-normal text-muted-foreground">/ nuit</span>
                  </p>
                  <Link href={`/rooms/${index + 1}`}>
                    <Button className="w-full">Voir les détails</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/rooms">
              <Button variant="outline" size="lg">
                Voir toutes les chambres
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Sophie Martin",
              comment: "Un séjour inoubliable! Le personnel était attentionné et la chambre parfaite.",
            },
            {
              name: "Jean Dupont",
              comment: "Excellent rapport qualité-prix. L'emplacement est idéal pour explorer la ville.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
              </div>
              <p className="mb-4 italic">"{testimonial.comment}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à réserver votre séjour de rêve?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez directement sur notre site pour bénéficier des meilleurs tarifs et d'avantages exclusifs.
          </p>
          <Link href="/rooms">
            <Button size="lg" variant="secondary" className="text-lg">
              Réserver Maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hôtel lys dor</h3>
            <p className="text-muted-foreground">
              123 Avenue Principale
              <br />
              75001 Paris, France
              <br />
              Tel: +33 1 23 45 67 89
              <br />
              Email: info@hotelgrandview.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:text-foreground">
                  Chambres
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-muted-foreground hover:text-foreground">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/spa" className="text-muted-foreground hover:text-foreground">
                  Spa & Bien-être
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Conciergerie
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Navette Aéroport
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Salle de Fitness
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Piscine
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Business Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Inscrivez-vous pour recevoir nos offres spéciales</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
              <Button className="rounded-l-none">OK</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} lys d or. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

