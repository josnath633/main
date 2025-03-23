"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface ReservationFormProps {
  roomId: number
  roomName: string
  price: number // Le prix est en XFA
}

export default function ReservationForm({ roomId, roomName, price }: ReservationFormProps) {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const nights = calculateNights()
  const subtotal = nights * price
  const taxes = subtotal * 0.1 // 10% tax
  const total = subtotal + taxes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler la soumission du formulaire
    setTimeout(() => {
      router.push(
        `/checkout?roomId=${roomId}&roomName=${encodeURIComponent(roomName)}&checkIn=${checkIn?.toISOString()}&checkOut=${checkOut?.toISOString()}&adults=${adults}&children=${children}&total=${total}`,
      )
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="check-in">Arrivée</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-in"
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP", { locale: fr }) : "Sélectionner"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  disabled={(date) => date < new Date() || (checkOut ? date >= checkOut : false)}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="check-out">Départ</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-out"
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !checkOut && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP", { locale: fr }) : "Sélectionner"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={(date) => !checkIn || date <= checkIn}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="adults">Adultes</Label>
            <Select value={adults} onValueChange={setAdults}>
              <SelectTrigger id="adults">
                <SelectValue placeholder="Adultes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="children">Enfants</Label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger id="children">
                <SelectValue placeholder="Enfants" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {nights > 0 && (
          <div className="space-y-2 mt-4">
            <div className="flex justify-between">
              <span>
                {price} XFA x {nights} nuits
              </span>
              <span>{subtotal} XFA</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes et frais (10%)</span>
              <span>{taxes.toFixed(2)} XFA</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total</span>
              <span>{total.toFixed(2)} XFA</span>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full" disabled={!checkIn || !checkOut || isSubmitting}>
          {isSubmitting ? "Traitement en cours..." : "Réserver maintenant"}
        </Button>
      </div>
    </form>
  )
}
