"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const roomId = searchParams.get("roomId")
  const roomName = searchParams.get("roomName")
  const checkInStr = searchParams.get("checkIn")
  const checkOutStr = searchParams.get("checkOut")
  const adults = searchParams.get("adults")
  const children = searchParams.get("children")
  const total = searchParams.get("total")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!roomId || !roomName || !checkInStr || !checkOutStr || !total) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Informations de réservation manquantes</h1>
        <p className="mb-8">Veuillez retourner à la page de réservation pour continuer.</p>
        <Link href="/rooms">
          <Button>Retour aux chambres</Button>
        </Link>
      </div>
    )
  }

  const checkIn = new Date(checkInStr)
  const checkOut = new Date(checkOutStr)
  const nights = Math.ceil(Math.abs(checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Redirect to confirmation page after 2 seconds
      setTimeout(() => {
        router.push("/confirmation")
      }, 2000)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto py-12 px-4 max-w-md text-center">
        <div className="bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Paiement réussi!</h1>
        <p className="mb-8">
          Votre réservation a été confirmée. Vous allez être redirigé vers la page de confirmation.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link href={`/rooms/${roomId}`} className="flex items-center text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour aux détails de la chambre
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Finaliser votre réservation</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Prénom</Label>
                <Input id="first-name" placeholder="Jean" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Nom</Label>
                <Input id="last-name" placeholder="Dupont" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jean.dupont@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" placeholder="+33 6 12 34 56 78" required />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="text-xl font-semibold mb-4">Méthode de paiement</h2>
            <Tabs defaultValue="card">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="card">Carte bancaire</TabsTrigger>
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
                <TabsTrigger value="bank">Virement</TabsTrigger>
              </TabsList>
              <TabsContent value="card">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nom sur la carte</Label>
                      <Input id="card-name" placeholder="Jean Dupont" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Numéro de carte</Label>
                      <Input id="card-number" placeholder="4242 4242 4242 4242" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Date d'expiration</Label>
                        <Input id="expiry" placeholder="MM/AA" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Traitement en cours..." : "Payer maintenant"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="paypal">
                <div className="text-center p-8 border rounded-lg">
                  <p className="mb-4">Vous serez redirigé vers PayPal pour finaliser votre paiement.</p>
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Traitement en cours..." : "Continuer avec PayPal"}
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="bank">
                <div className="p-6 border rounded-lg">
                  <p className="mb-4">Veuillez effectuer un virement bancaire avec les informations suivantes:</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Bénéficiaire:</span>
                      <span>lys d or</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">IBAN:</span>
                      <span>FR76 1234 5678 9012 3456 7890 123</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">BIC:</span>
                      <span>ABCDEFGHIJK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Référence:</span>
                      <span>RESERVATION-{roomId}</span>
                    </div>
                  </div>
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Traitement en cours..." : "Confirmer la réservation"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Résumé de la réservation</CardTitle>
              <CardDescription>Détails de votre séjour</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">{roomName}</h3>
                <div className="text-sm text-muted-foreground">
                  {adults} adulte{Number.parseInt(adults as string) > 1 ? "s" : ""}
                  {children && Number.parseInt(children) > 0
                    ? `, ${children} enfant${Number.parseInt(children) > 1 ? "s" : ""}`
                    : ""}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Arrivée</div>
                  <div className="text-sm text-muted-foreground">{format(checkIn, "PPP", { locale: fr })}</div>
                </div>
                <div>
                  <div className="font-medium">Départ</div>
                  <div className="text-sm text-muted-foreground">{format(checkOut, "PPP", { locale: fr })}</div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Durée du séjour</span>
                  <span>
                    {nights} nuit{nights > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{Number.parseFloat(total).toFixed(2)}xfa</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 text-xs text-muted-foreground">
              <p>
                En finalisant cette réservation, vous acceptez nos conditions générales et notre politique de
                confidentialité.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

