"use client"

import Link from "next/link"
import { CheckCircle, Calendar, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ConfirmationPage() {
  // In a real application, this would come from a database or session
  const bookingDetails = {
    id: "BK" + Math.floor(Math.random() * 10000000),
    roomName: "Suite Junior",
    checkIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    checkOut: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
    guests: 2,
    total: 660,
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Réservation Confirmée!</h1>
        <p className="text-muted-foreground">
          Votre réservation a été confirmée avec succès. Vous recevrez un email de confirmation sous peu.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Détails de la réservation</CardTitle>
          <CardDescription>Référence: {bookingDetails.id}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">{bookingDetails.roomName}</h3>
              <div className="flex items-start mb-2">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <div className="font-medium">Arrivée</div>
                  <div className="text-sm text-muted-foreground">
                    {bookingDetails.checkIn.toLocaleDateString("fr-FR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <div className="font-medium">Départ</div>
                  <div className="text-sm text-muted-foreground">
                    {bookingDetails.checkOut.toLocaleDateString("fr-FR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Informations de l'hôtel</h3>
              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <div className="font-medium">Adresse</div>
                  <div className="text-sm text-muted-foreground">
                    123 Avenue Principale
                    <br />
                    75001 Paris, France
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-2">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <div className="font-medium">Téléphone</div>
                  <div className="text-sm text-muted-foreground">+33 1 23 45 67 89</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">info@hotelgrandview.com</div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-lg mb-4">Résumé du paiement</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Durée du séjour</span>
                <span>
                  {Math.ceil(
                    (bookingDetails.checkOut.getTime() - bookingDetails.checkIn.getTime()) / (1000 * 60 * 60 * 24),
                  )}{" "}
                  nuits
                </span>
              </div>
              <div className="flex justify-between">
                <span>Nombre de personnes</span>
                <span>{bookingDetails.guests} adultes</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total payé</span>
                <span>{bookingDetails.total.toFixed(2)}XFA</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="bg-muted p-4 rounded-lg w-full text-sm">
            <h4 className="font-semibold mb-2">Informations importantes</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Check-in à partir de 14h00</li>
              <li>Check-out jusqu'à 12h00</li>
              <li>Une pièce d'identité sera demandée à l'arrivée</li>
              <li>Petit-déjeuner servi de 7h00 à 10h30</li>
            </ul>
          </div>
        </CardFooter>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button variant="outline">Retour à l'accueil</Button>
        </Link>
        <Button>
          Gérer ma réservation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

