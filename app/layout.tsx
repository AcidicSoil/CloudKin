import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cloud Storage Platform",
  description: "A self-hosted hybrid platform for document collaboration and file storage",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="bg-primary text-white p-4">
            <h1 className="text-2xl font-bold">Cloud Storage Platform</h1>
          </header>
          <main className="container mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'