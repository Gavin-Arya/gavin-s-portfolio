import { Inter } from "next/font/google"
import "../src/index.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Gavin - Portfolio",
  description: "Building beautiful interfaces & reliable front-ends",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}