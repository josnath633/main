import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"

import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "lys dor - Votre séjour de luxe",
  description:
    "Réservez votre séjour de luxe à l'Hôtel le lys d or. Chambres élégantes, restaurant gastronomique et services premium.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
          {/* <Header /> */}
          {children}
       
      </body>
    </html>
  )
}

